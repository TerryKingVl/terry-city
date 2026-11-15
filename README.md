# TERRY CITY — Wildlands

Cloudflare Worker RPG with D1 persistence.

## Current status

The production `worker.js` is being audited from the owner's latest uploaded source. **Do not deploy older builds or reset D1.**

## Safety

- Keep the existing D1 binding `DB`.
- Back up remote D1 before schema changes or progress resets.
- Never put admin secrets in GitHub.
- A successful JavaScript syntax check is not a gameplay or visual test.

## Planned verification

1. Worker and embedded browser JavaScript syntax.
2. Smoke tests for `/`, `/join`, `/motion-preview`, and `/motion-asset/*`.
3. Browser tests for creation UI, sprite rendering, map movement and arena.
4. D1 integration tests on a **separate test database**, never production.
5. Gameplay regression tests: classes, Terry, equipment, loot, bosses, parties, quests.

Production deployment is not configured yet.
