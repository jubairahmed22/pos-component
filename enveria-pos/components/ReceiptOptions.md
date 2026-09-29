# ReceiptOptions

The end-of-sale receipt choice: email, SMS, print, or none, with an optional gift receipt.

## Use
- If the customer has an email on file, Email is pre-selected as the primary option — one tap to finish.
- **No receipt** still stores the receipt in the customer's order history for returns.
- Gift receipt hides prices and adds a return barcode.

## Props
`email`, `phone` (masked), `gift`, `onPick(label)`.
