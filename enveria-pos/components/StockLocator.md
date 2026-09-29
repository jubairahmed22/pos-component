# StockLocator

Endless-aisle stock lookup across this store, nearby stores and the warehouse, with a fulfilment action per location.

## Use
- The current store is always the first row, highlighted, so "not here" is never ambiguous.
- Each location states quantity, distance and the promised time in customer language ("Pickup today", "Delivery in 1–2 days").
- Actions map to fulfilment types: **Add** (take now), **Reserve** (click-and-collect from another store), **Ship** (ship-to-customer from warehouse or store). The resulting cart line carries a fulfilment badge.
- Show data freshness (`updated`) — stock older than a few minutes must say so.

## Props
`name`, `sku`, `updated`, `rows` (`[{location, type: here|store|warehouse, qty, distance, eta, onAct}]`).
