# CartLine

One line of the current sale with its quantity stepper and line total.

## Use
- Unselected lines show a compact quantity chip (`2×`, `target-min`); only the selected line expands into the − / + stepper, so a stray tap on another line selects it instead of changing its quantity. Quantity typed on the keypad replaces the value for large counts.
- The newest or tapped line is `selected` (`primary-soft`); keypad actions (qty, price override, discount, void) apply to the selected line.
- A voided line stays visible, struck through on `danger-soft` with a "Void" badge, so the audit trail is on screen and the customer sees it removed.
- `fulfilment` marks lines in a mixed basket that aren't taken now: **Ship to customer** or **Pickup** (with time). Everything is paid in one transaction.
- Discounts show as their own row with the tag icon and a signed amount.

## Props
`name`, `meta` (modifiers, SKU), `qty`, `price`, `total` (optional override), `discount`, `discountLabel`, `fulfilment` (`ship` · `pickup`), `pickupAt`, `voided`, `selected`, `onInc`, `onDec`, `onQty` (tap on the chip), `currency`.

## Don't
Don't let a stepper decrement to zero to remove a line; removal is Void, which is logged.
