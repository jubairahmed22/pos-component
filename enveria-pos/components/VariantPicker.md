# VariantPicker

Colour-then-size matrix for apparel and footwear, with stock here and online on every size.

## Use
- Opens when a tile or scan resolves to a style rather than a single SKU. Colour first (named swatch chips, never colour alone), then size.
- Each size shows on-hand here and available online, so the cashier never has to leave the sale to check stock.
- A size with 0 here is dashed but still selectable; the primary action then becomes **Order for delivery** (endless aisle) instead of Add to sale.
- **Find in other stores** opens `StockLocator` for the chosen variant.

## Props the consumer provides
`name`, `style`, `price`, `colors` (`[{id,label,swatch}]` — swatch is product data), `sizes`, `stock` and `online` (maps keyed `"<colorId>-<size>"`), `color`, `size`, `onPick`, `onAdd`, `onShip`, `onFind`, `currency`.
