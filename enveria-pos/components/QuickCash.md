# QuickCash

One-tap cash amounts: exact plus the next likely notes.

## Use
Shows `Exact` first, then the amount due rounded up to each banknote (e.g. ৳ 1,678.08 → 1,700 · 1,800 · 2,000), so most cash sales take one tap instead of typing. Configure `notes` to the local currency's denominations.

## Props
`due`, `notes` (default `[100, 200, 500, 1000]`), `count`, `onPick(amount)`, `currency`.
