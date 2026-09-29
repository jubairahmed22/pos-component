# Enveria POS: kit for Claude Code

1. Unzip. Move the `enveria-pos` folder into your repo at `design-system/enveria-pos/`.
2. Paste `enveria-pos/CLAUDE-snippet.md` into your repo's `CLAUDE.md`.
3. **Already have a POS?** Use `enveria-pos/MIGRATE.md` (it upgrades your POS in place behind a feature flag). **Starting fresh?** Use `enveria-pos/PROMPTS.md`.
4. Open the prompts file you chose and run the first step (Phase 1 or M1) in plan mode. Then run one phase per session, with `/clear` between them.

Why this saves tokens: Claude Code reads the short `RULES.md` (about 1.5k tokens) instead of the whole system. It opens a component's notes only when it builds that component, and it keeps its progress in `PLAN.md` or `MIGRATION.md` instead of in chat history.

If the POS shares CSS with your storefront, use `tokens.scoped.css`. It only affects elements inside `.enveria-pos`, so the shop's look doesn't change.
