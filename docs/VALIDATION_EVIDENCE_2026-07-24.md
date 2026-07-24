# External Validation Evidence — 2026-07-24

## Gate 07 decision

**Status: Pass**

Two human testers who did not build Meridian Arc — the founder's daughter and
son — used the live site on their own phones and supplied external evidence.
Their evidence covered:

- **VAL-005:** inspecting a real release and distinguishing source,
  translation, and release;
- **VAL-007:** opening the mobile navigation, visiting multiple sections, and
  reporting no clipping, tiny text, confusing controls, or horizontal
  scrolling.

This satisfies the hardening gate's stated requirement for at least two
non-builder people to complete live-site tasks.

## Mission score

The complete evidence package reports:

- 8 of 8 missions with evidence;
- usability score of **94/100**;
- one friction finding on VAL-001;
- no blocked missions.

## Integrity boundary

Gate 07 passing does not convert every mission into human-live evidence.
VAL-004 and VAL-006 were reconstructed by an AI domain reviewer from production
source, and VAL-001 intentionally remains friction because the reviewer was not
a naive first-time user. The human evidence and AI-reviewed evidence remain
separately attributed.
