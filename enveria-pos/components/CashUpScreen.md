# CashUpScreen

End-of-day close: blind cash count, then the Z report.

## Flow
1. Cashier counts the drawer blind (`CashCount` with `blind`).
2. On submit the expected amount and variance appear; variance beyond tolerance needs a manager note.
3. `ShiftSummary` (Z report) reconciles card and wallet totals against the payment processor and cash against the count, then prints and emails.
4. Offline sales must be fully synced before the day can close.
