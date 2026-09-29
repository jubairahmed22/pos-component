# ProductTile

A tappable product button in the quick-add grid.

## Use
- Minimum 112px tall, `space-2` gaps; name in 18px bold, price in `figure-line` mono so prices align down a column.
- Positions are fixed per store: cashiers learn tiles by place, so never re-sort tiles by popularity at runtime.
- `selected` flashes for `duration-state` after an add so the cashier sees which tile registered.
- `stock="out"` disables the tile with a dashed outline and the words "Sold out"; `low` and `ageCheck` add a warning badge.

- `variants` summarises what the tile opens ("4 colours · 6 sizes", "Serial required"); a tile with variants opens `VariantPicker` instead of adding directly.

## Props
`name`, `category`, `price`, `currency`, `variants`, `stock` (`in` · `low` · `out`), `ageCheck`, `selected`, `onClick`.

## Don't
No product photos as the primary identifier; they slow recognition under store lighting. If used, keep the name as the largest element.
