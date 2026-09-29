# CustomerCard

The customer attached to the sale: identity, loyalty tier, points, store credit and cross-channel context.

## Use
- Attach by phone number, email, loyalty card scan or QR from the shopper's app. The compact form sits at the top of the cart rail; the full card opens on tap.
- Contact details are always masked (`••• 4821`) on the cashier screen and never shown on the customer display.
- `note` surfaces the single most useful cross-channel fact: an online order ready for pickup, an open return, an expiring voucher.
- Store credit and points appear as tenders on the payment screen when a customer is attached.

## Props
`name`, `tier`, `phone`, `email` (pre-masked), `points`, `credit`, `orders`, `note`, `compact`, `onDetach`, `currency`.
