# Meridian Arc Threat Review

## Protected assets

- Private validation evidence and tester context
- Governance proposals and ownership history
- Founder-only deletion, backup, and restoration authority
- Integrity of the public specification and published releases

## Trust boundaries

- Public GitHub Pages is a static reader with device-local fallback.
- The private platform receives workspace identity headers from the hosting boundary.
- D1 is authoritative for shared governance, validation, security, and backup records.

## Reviewed threats and controls

| Threat | Control |
| --- | --- |
| Anonymous mutation | Server rejects writes without a steward identity. |
| Cross-site write | Mutations require same-origin requests and JSON content type. |
| Oversized input | Requests and serialized payloads are capped at 64 KB. |
| Collection probing | Collections use a fixed allow-list; private collections reject readers. |
| Record-path injection | Record IDs use a bounded character allow-list. |
| Privilege escalation | Delete, export, and restore require founder authority. |
| Invalid backup injection | Restore validates format, count, IDs, collections, and JSON before writing. |
| Accidental destructive restore | Restore defaults to dry-run; an explicit `dryRun: false` is required. |

## Residual risks

- Hosting identity headers must remain protected by the platform edge.
- A platform-level rate limiter should be added before opening authenticated writes to a large audience.
- Formal penetration testing remains appropriate before handling regulated or highly sensitive information.
