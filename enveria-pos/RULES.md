# Enveria POS — rules (read this first; it is enough for most tasks)

Omnichannel POS UI for retail + ecommerce. Staff-facing screens (register, returns, orders, cash-up) and one customer-facing screen. Viewed at ~80 cm, under time pressure, while talking to a customer.

## Files in this folder (read only what the task needs)
- `tokens.css` — ALL design values as CSS variables + type classes. Import once, globally. Never hardcode a color/size/radius that has a token.
- `components.css` — reference styles for every component (`ep-*` classes). Copy rules from here when porting.
- `components/<Name>.md` — usage rules + props for one component. Read only the ones you are building.
- `reference/props.d.ts` — prop types for all components. `reference/bundle.js` — working React reference implementation (read the one function you are porting, not the whole file).
- `screens/*.png` — how finished screens look. Open only when building that screen.
- `reference/brand-book.md` — full guidelines. Only for policy questions (returns, offline, payments).
- `tailwind-preset.js` — optional, if the project uses Tailwind.

## Non-negotiables
1. **Tokens only.** Colors `var(--ink)`, `var(--primary)`…; spacing `var(--space-1..7)`; radii `var(--radius-sm|md|lg)`; targets `var(--target-min|key|primary)`.
2. **Sizes.** Nothing tappable < 56px (`--target-min`). Keys/tiles/tenders 72px (`--target-key`). Pay button 88px (`--target-primary`). Min text 15px (`.caption`); body 18px (`.body`).
3. **Numbers.** All money in `var(--font-mono)` with `tabular-nums`, right-aligned. Format `৳ 1,240.00` (symbol, thin space, grouping, 2 decimals), negatives with `−`. Use one `formatMoney()` helper; currency configurable.
4. **One primary action per screen**, and it states the amount: `Pay ৳ 3,786.50`, `Refund ৳ 2,241.00`.
5. **Color is never the only signal.** Every state = icon + word. Selected = `--primary-soft` fill + 2px `--primary` border.
6. **Color roles:** `primary` forward action/selected · `danger` loses money/data (void, refund, delete) · `warning` attention · `info` system message · `manager` supervisor-gated · `training` training mode only. Text on fills uses the matching `on-*` token.
7. **Nothing moves during a sale.** Fixed product grid (no re-sorting), fixed cart rail (`--rail-width` 440px), totals + Pay pinned at the bottom of the rail. Transitions ≤ 120ms, never blocking.
8. **Errors cost one tap.** Say what happened + offer the fix inline. Never clear scanned codes, typed amounts or the cart on error.
9. **Gated actions** (void, refund w/o receipt, cash refund of card sale, price override, big discount, no-sale) show a lock icon and go through ManagerApproval; log them. Voided lines stay visible, struck through.
10. **Payments/PCI:** card entry + PIN only on the card reader. UI shows brand, last 4, auth code. Never full PAN, never ask for PIN. Mask customer phone/email (`••• 4821`); never show them on the customer display.
11. **Accessibility:** focus ring `3px solid var(--focus)`, offset 2px. Scan field keeps focus when no dialog is open. Icons need `aria-label` when alone. Both themes (`data-theme="light"|"dark"`) must work.
12. **Keyboard:** F1 Cash, F2 Card, F3 Wallet, F4 Split, F5 Customer, F6 Hold, F7 Recall, F8 Discount, F9 Return, F10 Orders, F12 Pay, `/` search, `+/−` qty, Del void line, Esc close, Enter confirm.
13. **Omnichannel:** one customer record across online + store; cart lines can be take-now, ship-to-customer or pickup (badge on the line), all paid in one transaction; online orders returnable in store; refunds to original tender by default.
14. **No** emoji, gradients (except the training stripe), decorative shadows, left-border accent cards, or new font sizes outside the type classes.

## Type classes (from tokens.css)
`.figure-hero` 64 · `.figure-total` 44 · `.figure-line` 20 · `.figure-key` 28 (mono) · `.title` 28 · `.heading` 22 · `.action` 20 · `.body` 18 · `.label` 16 · `.caption` 15 (sans).

## Components (name → purpose)
Button · Badge · Icon · Keypad · ScanField · ProductTile · VariantPicker · StockLocator · CartLine · Totals · CustomerCard · TenderOptions · QuickCash · SplitTender · PaymentTerminal · ChangeDue · ReceiptOptions · CustomerDisplay · StatusBanner · ManagerApproval · OrderQueue · ReturnLine · RefundSummary · CashCount · ShiftSummary · ShortcutSheet.
Screens: Register (sale) · ReturnsScreen · CashUpScreen · CustomerDisplay.
