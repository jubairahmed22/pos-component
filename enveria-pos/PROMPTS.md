# Prompts for Claude Code — run in order, one per session

Before you start:
1. Copy this `enveria-pos` folder into your repo at `design-system/enveria-pos/`.
2. Paste `CLAUDE-snippet.md` into your project's `CLAUDE.md` (create it if missing).
3. Commit, so every phase is easy to review or roll back.

Between phases: run `/clear`. `PLAN.md` carries the memory, so nothing needs re-explaining and old context isn't re-billed.

---

## Phase 1: Plan (use plan mode: Shift+Tab until "plan mode")

```
Read design-system/enveria-pos/RULES.md and design-system/enveria-pos/reference/props.d.ts only.
Then inspect this repo just enough to answer: framework + language, styling approach (CSS modules / Tailwind / styled / other), component folder conventions, test/lint/typecheck commands, and where these already exist: products + variants, inventory by location, customers + loyalty, orders (online), payments, returns/refunds, auth/roles.
Do not read every file; use search and package.json/config files.

Write design-system/enveria-pos/PLAN.md containing:
- Stack summary (5 lines max) and the target folder for POS components.
- A mapping table: each design-system component → file path it will live at → existing data source/API it binds to (or "needs API").
- Gaps: data or endpoints the POS needs that don't exist yet.
- A phased checklist (Phases 2–7 below) with checkboxes, each task small enough for one session.
Don't write any code yet.
```

## Phase 2: Foundation

```
Follow CLAUDE.md and design-system/enveria-pos/PLAN.md. Do Phase 2 only:
- Import tokens.css globally for the POS area, plus the Google Fonts it references. If the project uses Tailwind, add tailwind-preset.js as a preset.
- Light/dark via data-theme on the POS root; default light.
- One formatMoney(amount, currency) helper (rules in RULES.md §3) with unit tests.
- Port Icon, Button, Badge, StatusBanner in this project's idioms (framework, TS, styling). For each: read components/<Name>.md, and search reference/bundle.js for "function <Name>" plus the matching ".ep-<name>" rules in components.css. Don't read those files whole.
- Run typecheck, lint and tests; fix failures. Tick the boxes in PLAN.md.
```

## Phase 3: Sale screen

```
Follow CLAUDE.md and PLAN.md. Do Phase 3 only: ScanField, ProductTile, CartLine, Totals, Keypad, ManagerApproval, then compose the Register screen (see screens/Register-light.png once).
Bind to the real product catalog, cart state and auth/roles from PLAN.md, not mock data. Barcode scans must work without focusing a field. Implement the keyboard map in RULES.md §12.
Same porting method as Phase 2. Run checks, tick PLAN.md.
```

## Phase 4: Payments

```
Follow CLAUDE.md and PLAN.md. Do Phase 4 only: TenderOptions, QuickCash, SplitTender, PaymentTerminal, ChangeDue, ReceiptOptions, CustomerDisplay.
PaymentTerminal only reflects the payment provider's reader/terminal SDK state; never collect or log card data in our code (RULES.md §10). If no terminal SDK exists, create a typed adapter interface plus a mock adapter, and note it in PLAN.md gaps.
CustomerDisplay runs as a separate route that mirrors the active cart (use whatever realtime mechanism the project already has).
Run checks, tick PLAN.md.
```

## Phase 5: Omnichannel

```
Follow CLAUDE.md and PLAN.md. Do Phase 5 only: CustomerCard (lookup by phone/email/loyalty QR), VariantPicker, StockLocator, OrderQueue (pickup, curbside, ship-from-store), and cart-line fulfilment (take now / ship to customer / pickup) in one payment.
Reuse the ecommerce backend's existing customer, inventory, variant and order APIs. Add only the missing endpoints listed in PLAN.md gaps, with tests.
Run checks, tick PLAN.md.
```

## Phase 6: Returns and end of day

```
Follow CLAUDE.md and PLAN.md. Do Phase 6 only: ReturnLine, RefundSummary, the Returns screen (receipt / order number / phone / card-last-4 lookup, online orders returnable in store, refund to original tender, reason codes, restock vs write-off), then CashCount (blind count), ShiftSummary (Z report) and the Cash-up screen.
Gated actions go through ManagerApproval and are written to an audit log.
Run checks, tick PLAN.md.
```

## Phase 7: Verify

```
Follow CLAUDE.md. Audit only the POS code against RULES.md and report a table of violations with file:line, then fix them:
- hardcoded colors/px font sizes/radii where a token exists (grep for #hex, rgb(, px font-size)
- tap targets under 56px; text under 15px
- state shown by color alone; missing aria-labels on icon-only buttons; missing focus ring
- money not using formatMoney or not tabular/right-aligned
- anything that shows full card numbers or unmasked customer contact
Then run typecheck, lint, tests and the build. Check both themes. Tick PLAN.md.
```

---

## Later, for any single change (cheapest form)

```
Per CLAUDE.md, <what you want>. Only read RULES.md and components/<Name>.md.
```
