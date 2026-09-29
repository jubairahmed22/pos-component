# OrderQueue

Queue of online orders the store must fulfil: pickup in store (BOPIS), curbside and ship-from-store.

## Use
- Sort by promise time; late orders go to the top with a `danger` border, the alert icon and the word "Late".
- Every row states channel (icon + word), customer, items, value, whether it is already paid, the promise time and one next action: **Start picking → Continue → Hand over**.
- Picking progress is shown as a bar plus a count (`3/5`).
- Hand over requires scanning the order QR or verifying ID; paid-online orders never re-charge at the till.
- The Orders tab in `Register` shows the count of orders needing action.

## Props
`orders` (`[{id, channel: pickup|curbside|ship, customer, items, total, paid, due, status: new|picking|ready|late, picked, onOpen}]`), `currency`.
