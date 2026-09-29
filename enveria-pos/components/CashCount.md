# CashCount

Denomination-by-denomination cash count for opening float, cash drops and close-out.

## Use
- Count each denomination with the stepper or type the count on the keypad; the subtotal per denomination and the running total update live.
- `blind` hides the expected amount until the count is submitted — the industry-standard control against counts being adjusted to match.
- Variance is shown as Balanced / Over / Short with icon and amount; beyond `tolerance` it turns `danger-soft` and requires a manager note.

## Props
`denominations` (default BDT notes and coins), `counts`, `expected`, `blind`, `tolerance`, `currency`.
