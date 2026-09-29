# Upgrading an EXISTING POS to Enveria POS

Use these prompts instead of PROMPTS.md when your project already has a POS.
Strategy: restyle and improve the POS you have, one screen at a time, behind a switch. Business logic, API calls, state and data models stay as they are. Nothing is rebuilt from scratch.

Before you start:
1. Copy this folder to `design-system/enveria-pos/` and paste `CLAUDE-snippet.md` into `CLAUDE.md`.
2. Make sure the existing tests pass, and commit. Create a branch: `git checkout -b pos-redesign`.
3. Run one phase per session, `/clear` between phases, and commit after each.

---

## M1: Audit (plan mode, no code)

```
Read design-system/enveria-pos/RULES.md and reference/props.d.ts only.
Find the EXISTING POS in this repo: its routes/screens, components, state/store, styling method, and the APIs it calls. Use search; don't read unrelated storefront code.

Write design-system/enveria-pos/MIGRATION.md with:
1. Stack + where the POS lives (paths), and whether it shares CSS/theme with the storefront.
2. Screen inventory: each existing POS screen → the matching Enveria screen (Register, Returns, Orders, Cash-up, Customer display) or "no match".
3. Component map table: existing component (path) → Enveria component → keep props? (yes/adapt) → risk (low/med/high).
4. Style map: existing colors/variables/Tailwind classes → the Enveria token that replaces each.
5. RULES.md violations found now (top 15, with file:line): tiny tap targets, color-only states, full card numbers, unmasked contacts, moving layouts, missing keyboard support, etc.
6. Feature gaps vs the design system (e.g. variants picker, stock in other stores, online order queue, blind cash count). Mark each "later".
7. A checklist for M2–M6 below, in small tasks, riskiest last.
Do not change any code.
```

## M2: Token bridge (biggest visual win, lowest risk)

```
Follow CLAUDE.md and MIGRATION.md. Do M2 only:
- If the POS shares an app/CSS with the storefront, import tokens.scoped.css and add class "enveria-pos" (+ data-theme) on the POS root layout ONLY. Otherwise import tokens.css. Also import components.css. The storefront must look unchanged.
- Add a feature flag (env var or setting, default OFF) that toggles the "enveria-pos" class, so the old look is one switch away.
- Using the style map in MIGRATION.md, point the POS's existing color/spacing/radius variables (or Tailwind theme for POS files) at the Enveria tokens. Replace, don't duplicate. No markup or logic changes in this phase.
- Run existing tests + typecheck + build. Report what changed visually per screen. Tick MIGRATION.md.
```

## M3: Restyle screens, one per session (repeat for each screen)

```
Follow CLAUDE.md and MIGRATION.md. Upgrade ONLY the <Sale | Payment | Returns | Orders | Cash-up> screen to Enveria POS.
Rules for this phase:
- Keep all existing props, state, handlers, API calls, routes and tests working. Change markup, class names and styles only, plus the UX rules in RULES.md.
- For each component in this screen's row of the component map: read components/<Name>.md, and search reference/bundle.js for "function <Name>" and components.css for its ".ep-" rules. Adapt the existing component to match; don't create a parallel copy unless the map says "adapt".
- Look at screens/<Screen>-light.png once for layout.
- Keep behind the flag if the markup change is large.
Run tests, typecheck, lint and build. Fix regressions. Tick MIGRATION.md and list anything deferred.
```

## M4: Behaviour fixes (small separate commits)

```
Follow CLAUDE.md and MIGRATION.md. Fix the RULES.md violations listed in MIGRATION.md §5, one commit per rule group:
fixed layout (no re-sorting/jumping), keyboard map (§12), scanner focus, ManagerApproval + audit log for gated actions, masked card/contact data, icon+word for every state, formatMoney everywhere.
Keep existing logic; add tests for each behaviour you add. Tick MIGRATION.md.
```

## M5: New features (only the ones you want)

```
Follow CLAUDE.md and MIGRATION.md. Add <feature from §6, e.g. VariantPicker + StockLocator> to the existing POS, using the storefront's existing product/variant/inventory APIs. Read only the relevant components/<Name>.md. Add missing endpoints with tests only if MIGRATION.md lists them as gaps.
```

## M6: Verify, then remove the flag

```
Follow CLAUDE.md. Audit POS files only against RULES.md: hardcoded colors/px sizes where tokens exist, tap targets < 56px, text < 15px, color-only states, missing aria-labels/focus rings, unformatted money, exposed card or contact data, leftover old-theme variables.
Report a violations table (file:line), fix them, run all checks and the build, and confirm the storefront is visually unchanged.
Then remove the feature flag and the old POS styles that are no longer used.
```
