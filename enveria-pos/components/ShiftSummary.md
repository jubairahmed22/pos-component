# ShiftSummary

The end-of-day (Z) report for a till or the whole store.

## Use
- Three columns: sales (gross → net), by tender (count and amount, which reconcile to the processor and the cash count), and exceptions.
- Exceptions — voids, no-sale opens, overrides, offline sales — are listed by count so loss-prevention patterns show without digging.
- Printed and emailed at close; the same layout serves the X report (mid-shift, non-resetting).

## Props
`data` (`{gross, returns, returnsCount, discounts, tax, net, tenders:[{label,count,amount}], transactions, voids, noSales, overrides, offlineSynced}`), `currency`.
