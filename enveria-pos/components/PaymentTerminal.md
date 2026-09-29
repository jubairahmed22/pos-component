# PaymentTerminal

Mirror of the card reader's state on the cashier screen: waiting, PIN, processing, approved, declined, reader offline.

## Use
- Card data never touches the POS: the certified reader (EMV, P2PE) handles card entry and PIN. The POS shows only brand, last four digits and the authorisation code.
- The state title is the largest text so the cashier can answer "is it through?" at a glance; the amount repeats beside it.
- Declined and offline states always offer **Retry** and **Other method** — no dead ends.
- Never ask the customer to say their PIN, and never show a full card number.

## Props
`state` (`waiting` · `pin` · `processing` · `approved` · `declined` · `offline`), `amount`, `brand`, `last4`, `auth`, `onRetry`, `onOther`, `onCancel`, `currency`.
