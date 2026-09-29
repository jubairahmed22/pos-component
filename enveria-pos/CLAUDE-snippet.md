## Design system: Enveria POS
- All POS / store-staff UI follows `design-system/enveria-pos/RULES.md`. Read it before any UI work on POS screens; it is usually enough.
- Read a component's `design-system/enveria-pos/components/<Name>.md` only when building or changing that component.
- Do NOT read `reference/bundle.js` or `reference/brand-book.md` in full. Search them for the one function/section you need.
- Use tokens from `tokens.css` (CSS variables) only; no hardcoded colors, font sizes, radii or touch sizes.
- Progress and decisions live in `design-system/enveria-pos/PLAN.md`; update its checklist when a task is done.
- This project already has a POS: upgrade it in place (see `design-system/enveria-pos/MIGRATE.md`). Never change business logic, API contracts or data models as part of a visual/UX change; keep existing tests green.
- Progress for the upgrade lives in `design-system/enveria-pos/MIGRATION.md`.
