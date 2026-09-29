# ReturnLine

One item from the original receipt being returned, with quantity, reason code and condition.

## Use
- Lines come from the looked-up receipt (in-store or online order), so price is the **price actually paid** after discounts — never the current shelf price.
- Quantity can't exceed what was sold minus earlier returns.
- A reason code is required before refund; codes feed returns reporting. Condition decides whether stock goes back to sellable inventory or is written off.
- Policy blocks (outside return window, opened electronics, final sale) show as a warning badge with the reason and the allowed alternative.

## Props
`name`, `meta`, `soldQty`, `price` (paid unit price), `returnQty`, `reason`, `reasons`, `condition` (`resell` · `damaged`), `blocked` (text), `currency`.
