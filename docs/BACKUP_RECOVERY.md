# Meridian Arc Backup and Recovery

## Export

Founder request:

`GET /api/platform?collection=backup&action=backup`

The response is a `meridian-backup-v1` JSON package containing every durable record.
Store exported packages outside the application deployment.

## Validate before restoration

Send the exported package to `POST /api/platform`:

```json
{
  "action": "restore",
  "backup": {},
  "dryRun": true
}
```

A successful response reports the number of validated records and makes no changes.

## Restore

After reviewing the dry-run result, repeat the founder-authorized request with
`"dryRun": false`. Records are upserted by ID. Existing records not present in the
backup are not deleted.

## Recovery evidence

The hardening audit verifies that export format checks, founder authority,
dry-run validation, record limits, and explicit restoration are present in the
production source. A live recovery should be repeated after material schema changes.
