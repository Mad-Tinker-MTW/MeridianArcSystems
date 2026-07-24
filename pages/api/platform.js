import { env } from "cloudflare:workers";

const founderEmail = "frankydlp@gmail.com";

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

export default async function handler(req, res) {
  const user = identity(req);
  const db = env.DB;
  if (!db) return res.status(503).json({ ok: false, mode: "read-only", user, records: [], error: "Durable storage is not attached." });
  await initialize(db);

  if (req.method === "GET") {
    const collection = String(req.query.collection || "governance");
    const result = await db.prepare("SELECT id, collection, payload, owner_email, created_at, updated_at FROM meridian_records WHERE collection = ? ORDER BY updated_at DESC LIMIT 100").bind(collection).all();
    return res.status(200).json({
      ok: true, mode: "durable", user,
      capabilities: user.role === "Founder" ? ["create", "review", "accept", "publish", "assign"] : user.role === "Steward" ? ["create", "review"] : ["read"],
      records: (result.results || []).map((row) => ({ ...row, payload: JSON.parse(row.payload) }))
    });
  }

  if (req.method === "POST") {
    if (user.role === "Reader") return res.status(403).json({ ok: false, error: "A steward identity is required." });
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
    if (body.action === "delete") {
      if (user.role !== "Founder") return res.status(403).json({ ok: false, error: "Founder authority is required." });
      await db.prepare("DELETE FROM meridian_records WHERE id = ?").bind(String(body.id)).run();
      return res.status(200).json({ ok: true });
    }
    const id = String(body.id || crypto.randomUUID());
    const collection = String(body.collection || "governance");
    const payload = JSON.stringify(body.payload || {});
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
