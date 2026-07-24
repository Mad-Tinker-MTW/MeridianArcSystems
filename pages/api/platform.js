import { env } from "cloudflare:workers";

const founderEmail = "frankydlp@gmail.com";
const allowedCollections = new Set(["governance", "validation", "backup", "security"]);
const privateCollections = new Set(["validation", "backup", "security"]);
const maxPayloadBytes = 64 * 1024;
const idPattern = /^[A-Za-z0-9][A-Za-z0-9._:-]{0,95}$/;

function identity(req) {
  const email = String(req.headers["oai-authenticated-user-email"] || "").toLowerCase();
  const encodedName = req.headers["oai-authenticated-user-full-name"];
  const encoding = req.headers["oai-authenticated-user-full-name-encoding"];
  let name = "";
  if (encodedName && encoding === "percent-encoded-utf-8") {
    try { name = decodeURIComponent(encodedName); } catch { name = ""; }
  }
  const role = email === founderEmail ? "Founder" : email ? "Steward" : "Reader";
  return { email, name: name || email || "Public reader", role };
}

async function initialize(db) {
  await db.batch([
    db.prepare(`CREATE TABLE IF NOT EXISTS meridian_records (
      id TEXT PRIMARY KEY,
      collection TEXT NOT NULL,
      payload TEXT NOT NULL,
      owner_email TEXT NOT NULL,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    )`),
    db.prepare("CREATE INDEX IF NOT EXISTS meridian_records_collection_idx ON meridian_records(collection, updated_at DESC)")
  ]);
}

function sameOrigin(req) {
  const origin = req.headers.origin;
  if (!origin) return true;
  try { return new URL(origin).host === req.headers.host; } catch { return false; }
}

function parseBody(req) {
  const raw = typeof req.body === "string" ? req.body : JSON.stringify(req.body || {});
  if (new TextEncoder().encode(raw).byteLength > maxPayloadBytes) throw new Error("Payload exceeds 64 KB.");
  return typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
}

export default async function handler(req, res) {
  const user = identity(req);
  const db = env.DB;
  if (!db) return res.status(503).json({ ok: false, mode: "read-only", user, records: [], error: "Durable storage is not attached." });
  await initialize(db);

  if (req.method === "GET") {
    const collection = String(req.query.collection || "governance");
    if (!allowedCollections.has(collection)) return res.status(400).json({ ok: false, error: "Unknown collection." });
    if (privateCollections.has(collection) && user.role === "Reader") return res.status(403).json({ ok: false, error: "A steward identity is required." });
    if (req.query.action === "backup") {
      if (user.role !== "Founder") return res.status(403).json({ ok: false, error: "Founder authority is required." });
      const result = await db.prepare("SELECT id, collection, payload, owner_email, created_at, updated_at FROM meridian_records ORDER BY collection, id").all();
      return res.status(200).json({ ok: true, format: "meridian-backup-v1", exported_at: new Date().toISOString(), records: result.results || [] });
    }
    const result = await db.prepare("SELECT id, collection, payload, owner_email, created_at, updated_at FROM meridian_records WHERE collection = ? ORDER BY updated_at DESC LIMIT 100").bind(collection).all();
    return res.status(200).json({
      ok: true, mode: "durable", user,
      capabilities: user.role === "Founder" ? ["create", "review", "accept", "publish", "assign"] : user.role === "Steward" ? ["create", "review"] : ["read"],
      records: (result.results || []).map((row) => ({ ...row, payload: JSON.parse(row.payload) }))
    });
  }

  if (req.method === "POST") {
    if (user.role === "Reader") return res.status(403).json({ ok: false, error: "A steward identity is required." });
    if (!sameOrigin(req)) return res.status(403).json({ ok: false, error: "Cross-origin writes are not accepted." });
    if (!String(req.headers["content-type"] || "").toLowerCase().startsWith("application/json")) return res.status(415).json({ ok: false, error: "JSON content type required." });
    let body;
    try { body = parseBody(req); } catch (error) { return res.status(400).json({ ok: false, error: error.message || "Invalid JSON." }); }
    if (body.action === "delete") {
      if (user.role !== "Founder") return res.status(403).json({ ok: false, error: "Founder authority is required." });
      const deleteId = String(body.id || "");
      if (!idPattern.test(deleteId)) return res.status(400).json({ ok: false, error: "Invalid record ID." });
      await db.prepare("DELETE FROM meridian_records WHERE id = ?").bind(deleteId).run();
      return res.status(200).json({ ok: true });
    }
    if (body.action === "restore") {
      if (user.role !== "Founder") return res.status(403).json({ ok: false, error: "Founder authority is required." });
      if (body.backup?.format !== "meridian-backup-v1" || !Array.isArray(body.backup.records)) return res.status(400).json({ ok: false, error: "Invalid Meridian backup." });
      if (body.backup.records.length > 1000) return res.status(400).json({ ok: false, error: "Backup exceeds 1,000 records." });
      let records;
      try {
        records = body.backup.records.map((record) => {
          if (!idPattern.test(String(record.id || "")) || !allowedCollections.has(String(record.collection || ""))) throw new Error("Backup contains an invalid record.");
          JSON.parse(String(record.payload || "{}"));
          return record;
        });
      } catch (error) { return res.status(400).json({ ok: false, error: error.message || "Invalid backup." }); }
      if (body.dryRun !== false) return res.status(200).json({ ok: true, dryRun: true, validated: records.length });
      const now = new Date().toISOString();
      const statements = records.map((record) => db.prepare(`INSERT INTO meridian_records (id, collection, payload, owner_email, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?)
        ON CONFLICT(id) DO UPDATE SET collection = excluded.collection, payload = excluded.payload, owner_email = excluded.owner_email, updated_at = excluded.updated_at`)
        .bind(String(record.id), String(record.collection), String(record.payload), String(record.owner_email || user.email), String(record.created_at || now), now));
      if (statements.length) await db.batch(statements);
      return res.status(200).json({ ok: true, restored: statements.length });
    }
    const id = String(body.id || crypto.randomUUID());
    const collection = String(body.collection || "governance");
    if (!idPattern.test(id)) return res.status(400).json({ ok: false, error: "Invalid record ID." });
    if (!allowedCollections.has(collection)) return res.status(400).json({ ok: false, error: "Unknown collection." });
    const payload = JSON.stringify(body.payload || {});
    if (new TextEncoder().encode(payload).byteLength > maxPayloadBytes) return res.status(413).json({ ok: false, error: "Payload exceeds 64 KB." });
    const now = new Date().toISOString();
    await db.prepare(`INSERT INTO meridian_records (id, collection, payload, owner_email, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?)
      ON CONFLICT(id) DO UPDATE SET payload = excluded.payload, updated_at = excluded.updated_at`)
      .bind(id, collection, payload, user.email || "workspace-user", now, now).run();
    return res.status(200).json({ ok: true, id, mode: "durable" });
  }

  res.setHeader("Allow", "GET, POST");
  return res.status(405).json({ ok: false, error: "Method not allowed." });
}
