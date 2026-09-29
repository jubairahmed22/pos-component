# ScanField

The always-on scan/search bar at the top of the sale screen.

## Use
- Keep it focused whenever no dialog is open, so a barcode scan always lands here without a tap.
- `ready` (primary border + "Scanner ready") tells the cashier the scanner will work before they scan.
- `notfound` turns the field `danger-soft`, keeps the scanned code visible for manual correction and plays the error tone. Never clear the code on error.
- Searching accepts product name, SKU or PLU.

## Props
`state` (`ready` · `idle` · `notfound`), `value`, `placeholder`.
