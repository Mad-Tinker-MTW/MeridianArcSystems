CREATE TABLE IF NOT EXISTS meridian_records (
  id TEXT PRIMARY KEY,
  collection TEXT NOT NULL,
  payload TEXT NOT NULL,
  owner_email TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS meridian_records_collection_idx
ON meridian_records(collection, updated_at DESC);
