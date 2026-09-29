# ReturnsScreen

The returns and exchanges screen: find the original sale, choose items, reason, condition, refund to original tender.

## Flow
1. Scan the receipt barcode, or search by order number, customer phone or card last four. Online orders are returnable in store.
2. Pick lines and quantities from the original sale (`ReturnLine`); set reason and condition.
3. `RefundSummary` shows the refund to the original tender; exchanges turn the refund into credit on a new sale.
4. Policy exceptions (no receipt, outside window, cash refund of a card sale) route through `ManagerApproval`.
