# SplitTender

Running list of payments applied to one sale and the balance still to collect.

## Use
- Every applied tender is a line with icon, label (masked where it's a card or gift card) and signed amount; each can be removed until the sale completes.
- **Remaining** sits on `warning-soft` until it reaches zero, then turns `success-soft` and reads "Fully paid".
- Order of application: store credit and gift cards first, then cash, then card for the remainder.

## Props
`total`, `payments` (`[{label, icon, amount}]`), `onRemove(index)`, `currency`.
