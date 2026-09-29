# Register

The complete retail sale screen, composed from the other components.

## Layout
- Top bar: mode tabs (**Sale · Returns · Orders**, with the count of online orders needing action), the always-focused scan field (or the training stripe), sync status and cashier/till.
- Left: category chips (one scrolling row) and the fixed product grid. Tiles with variants open `VariantPicker`.
- Right: the cart rail, fixed at `rail-width` (440px): attached customer (`CustomerCard` compact), cart lines (with fulfilment badges for ship/pickup items), `Totals`, Hold · Discount · Void, and the `xl` Pay button at the bottom.
- `hand="left"` mirrors the layout so the cart and Pay sit under a left-handed cashier's hand.

## Behaviour
- Scan or tap adds/increments a line and selects it; the grid never re-sorts; totals and Pay never move.
- A mixed basket (take now + ship to customer + pickup elsewhere) is one sale and one payment.
- `offline` swaps the Synced badge for Offline; sales continue and queue for sync (see README, Offline).

## Props
`hand` (`right` · `left`), `training`, `offline`, `cashier`, `customer`, `orders`, `lines`, `selected`, `height`, `currency`.
