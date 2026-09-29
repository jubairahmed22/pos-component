# RefundSummary

Refund totals and where the money goes, shown before the refund is committed.

## Use
- Always shows the source receipt and channel — online orders can be returned in store.
- Refunds go to the **original tender** by default (card to the same card, wallet to wallet); cash refunds of card sales and refunds without a receipt require `requiresManager` and are paid as store credit by policy.
- The refund button states the amount, in the same pattern as Pay.

## Props
`receipt`, `soldAt`, `channel`, `items`, `subtotal`, `tax`, `total`, `tenders` (`[{label, icon, amount}]`), `requiresManager`, `currency`.
