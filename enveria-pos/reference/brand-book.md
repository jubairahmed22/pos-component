Enveria POS is an omnichannel point-of-sale system for retail stores that also sell online. It is built for the conditions a register actually works in: a screen 80 cm away, a queue, a customer talking, a scanner in one hand, bright or dim store lighting and real money changing hands. Every rule below exists to make a cashier faster and less likely to make a mistake.

## Principles

1. **Readable at arm's length.** The register is read from ~80 cm, twice the distance of a phone. Nothing the cashier needs is set smaller than `caption` (15px); body is `body` (18px); the sale total is `figure-total` (44px); change due is `figure-hero` (64px).
2. **Hit it without looking twice.** Nothing tappable is smaller than `target-min` (56px). Repeated actions (keys, tiles, tenders) use `target-key` (72px); Pay uses `target-primary` (88px). Neighbouring targets sit at least `space-2` apart.
3. **Nothing moves.** Product tiles, the cart rail (`rail-width`), Totals and Pay keep fixed positions so cashiers build muscle memory. Never re-sort, reflow or animate content into place while a sale is in progress.
4. **One forward action.** Each screen has exactly one `primary` button, and it states the amount (`Pay ৳ 3,786.50`).
5. **Errors cost one tap.** Every error names what happened and offers the fix in place. Scanned codes, typed amounts and cart contents are never cleared by an error.
6. **Money actions are visible and logged.** Voids, refunds, price overrides, large discounts and no-sale drawer opens need a manager PIN (`ManagerApproval`), stay on screen as struck-through lines, and are recorded.
7. **Built for both experts and trainees.** Labels are always visible for new staff; keyboard shortcuts (F1–F4, numpad, scanner-first focus) serve experienced ones. Training mode is unmistakable.

## Content fundamentals

- Write for someone mid-conversation: short, plain verbs. Buttons are a verb or a verb + object: `Pay`, `Hold sale`, `Void`, `Try again`. Never "Submit", "OK" or "Proceed".
- Sentence case everywhere except the small totals labels (`SUBTOTAL`, `VAT`), which are uppercase `label` with 0.04em tracking.
- Banners lead with a bold state word ending in a full stop, then the next step: "**Card declined.** Ask for another method." "**Offline.** Card payments queue and sync when back online."
- Address the cashier implicitly (imperative), never "we" or "the system". No exclamation marks, no emoji, no blame ("Invalid input" becomes "Code not found — check the digits").
- Money: currency symbol, thin space, grouped thousands, two decimals — `৳ 1,240.00` (use `money()`). Negative amounts use a true minus: `−৳ 19.00`. Quantities use `×`: `Chicken puff × 3`.

## Visual foundations

### Colour
- Two themes: **Store** (light, default — for bright retail lighting and glare) and **Night service** (dark — for bars, restaurants and low-light counters). Both meet WCAG AA for every text pair named in the tokens' usage notes.
- Screen background `surface-0`; panels `surface-1`; keys, tiles and steppers `surface-2`; pressed or selected neutral `surface-3`. Text is `ink`; secondary text `ink-muted`.
- `primary` (deep teal) is reserved for the one forward action, the selected tender, the Exact quick-cash and the change-due block. Text on it is `on-primary`.
- `danger` only for actions that lose money or data. `warning` for attention without action (low stock, ID check). `info` for neutral system messages. `manager` purple only for supervisor-gated flows. `training` amber only for the training-mode stripe.
- Colour never carries meaning alone: every state has an icon and a word, and selection adds a 2px `primary` border as well as `primary-soft` fill. `success` shares the primary hue and is always shown with the check icon.
- Borders that define a control use `line-strong` (≥3:1). `line` is for dividers only.

### Type
- Text is set in **Atkinson Hyperlegible Next** (`sans`), designed for low-vision legibility: distinct `I l 1`, `0 O`, open counters. Figures are set in **Atkinson Hyperlegible Mono** (`mono`) with tabular numerals so prices align and totals don't jitter as digits change. Both load from Google Fonts.
- Styles: `figure-hero`, `figure-total`, `figure-line`, `figure-key` for numbers; `title`, `heading`, `action`, `body`, `label`, `caption` for text. Don't introduce sizes between them.
- All money is right-aligned in `mono`.

### Space, size and shape
- 4px base: `space-1` 4 · `space-2` 8 · `space-3` 12 · `space-4` 16 · `space-5` 24 · `space-6` 32 · `space-7` 48.
- Touch sizes: `target-min` 56 · `target-key` 72 · `target-primary` 88. These are floors, not suggestions.
- Radii: `radius-sm` (chips, inputs), `radius-md` (keys, buttons, tiles, lines), `radius-lg` (panels, dialogs).
- Elevation is minimal: `shadow-panel` separates panels from the background; `shadow-dialog` is for modals only. Flat fills do the rest.

### Motion and feedback
- Press feedback within `duration-press` (60ms): fill darkens to the `-press`/`surface-3` state and the key scales to 98%. No transition exceeds `duration-state` (120ms) and none ever blocks the next tap.
- Every scan and every add gives feedback in three channels: the tile or line highlights, the cart updates, and the register plays a short tone (distinct tones for success and not-found).

### Focus
- Focus ring: 3px solid `focus`, 2px offset, on every interactive element. The scan field holds focus whenever no dialog is open.

### Layout
- Counter terminal: landscape 1280×800 and up. Catalog on one side, cart rail (`rail-width`, 440px) on the other, scan bar across the top. Pay sits at the bottom of the rail.
- Handedness: `Register` takes `hand="left"` to mirror the layout so the cart and Pay are under the cashier's working hand and away from the scanner arm. Set it per till, not per user session, so tills stay consistent.

## Security and accounting

- Gated actions carry the lock glyph (`requiresManager`) before they are tapped.
- The approval dialog states the exact action, amount and requesting cashier; a cashier can never approve their own request.
- Voided lines stay in the cart, struck through, until the sale closes, and print on the journal.
- Cash sales end on `ChangeDue`, which stays until the drawer closes — the drawer is the confirmation, not a timer.
- Training mode replaces the scan bar with the striped `training` banner for the entire session.

## Iconography

- A single set of line icons drawn for this system, exported as the `Icon` component: 24px grid, 2px stroke, round caps and joins, `currentColor`. Names: scan, search, cash, card, split, gift, wallet, plus, minus, trash, lock, alert, check, info, x, back, del, tag, user, offline, printer, drawer, hold, receipt, age, truck, store, box, clock, return, mail, phone, star, display, keyboard, globe, sync, calc, contactless.
- Icons accompany words; they never replace them, except on the quantity stepper (which has `aria-label`s).
- No emoji, no brand payment-network logos inside the UI chrome (show those only on the card reader).

## Omnichannel: store and ecommerce as one system

- **One customer, one history.** Attach a customer (`CustomerCard`) by phone, email, loyalty card or app QR. Online and in-store orders, returns, points and store credit are the same record.
- **Endless aisle.** When an item or size isn't on the shelf, the sale continues: `VariantPicker` shows stock here and online per size, `StockLocator` shows nearby stores and the warehouse, and the line is added with a fulfilment badge (`Ship to customer`, `Pickup`).
- **Mixed baskets.** Take-now, ship-to-customer and pickup-elsewhere items are paid in one transaction on one receipt.
- **Online orders fulfilled by the store.** `OrderQueue` handles pickup in store (BOPIS), curbside and ship-from-store, sorted by promise time, with one next action per order. Paid-online orders are never charged again at the till.
- **Return anywhere.** Online orders can be returned in store (`ReturnsScreen`); refunds go to the original tender.
- **One price, one promotion engine.** Prices and promotions are the same online and in store; a line discount always names the promotion (`Buy 2 save 10%`).

## Payments and compliance

- Card data never reaches the POS. Card entry and PIN happen on a certified EMV reader with point-to-point encryption; the POS keeps the PCI DSS scope small by only showing `PaymentTerminal` states, card brand, last four digits and the authorisation code.
- Never display a full card number, never ask for a PIN, never store card data in notes or receipts.
- Tenders: cash, card (chip, contactless, swipe fallback), mobile wallet, gift card, store credit, loyalty points, and `SplitTender` for any combination. Apply credit and gift cards first, then cash, then card for the remainder.
- Refunds default to the original tender. A cash refund of a card sale, a refund without a receipt or one outside the return window needs `ManagerApproval`.
- Customer contact details are masked on the cashier screen and never shown on `CustomerDisplay`.

## Offline

- Sales, returns with a receipt on this till, and cash payments continue offline. Card payments use the reader's offline authorisation up to its floor limit; above that, ask for another method.
- The top bar shows `Offline` (warning badge with the offline icon); every sale made offline is queued, synced in order when the connection returns, and counted in `ShiftSummary`.
- Stock and online orders show when they were last updated; never present stale stock as live.

## Returns and exchanges

1. Find the original sale: scan the receipt barcode, or search by order number, customer phone or card last four.
2. Pick lines and quantities (`ReturnLine`); a reason code is required; set condition (back to stock or write off).
3. `RefundSummary` shows the refund to the original tender, using the price actually paid.
4. For an exchange, the refund becomes credit on a new sale in the same flow.

## End of day

- Blind cash count by denomination (`CashCount` with `blind`), then expected cash and variance appear. Variance beyond tolerance needs a manager note.
- `ShiftSummary` (Z report) reconciles card and wallet totals against the payment processor and cash against the count, and lists exceptions: voids, no-sale opens, overrides, offline sales.
- Offline sales must be fully synced before the day closes.

## Keyboard and hardware

- Standard F-key map in `ShortcutSheet`: F1–F4 tenders, F5 customer, F6 hold, F7 recall, F8 discount, F9 return, F10 online orders, F12 pay, `/` search, `Del` void line, `Esc` close.
- Supported hardware: 1D/2D barcode scanner (GS1 barcodes, QR for orders and loyalty), EMV card reader, receipt printer, cash drawer, customer-facing display, scale. Hardware state shows in the top bar and `StatusBanner`, never in a blocking dialog.
- Handheld (line-busting and stock checks) uses the same components at `target-min` and larger; the cart rail becomes a bottom sheet.

## Screens this system covers

Sale (`Register`), variants and stock (`VariantPicker`, `StockLocator`), customers (`CustomerCard`), online orders (`OrderQueue`), tender (`TenderOptions`, `QuickCash`, `Keypad`, `SplitTender`, `PaymentTerminal`), completion (`ChangeDue`, `ReceiptOptions`), customer-facing screen (`CustomerDisplay`), returns (`ReturnsScreen`: `ReturnLine`, `RefundSummary`), end of day (`CashUpScreen`: `CashCount`, `ShiftSummary`), supervisor approval (`ManagerApproval`) and system states (`StatusBanner`).
