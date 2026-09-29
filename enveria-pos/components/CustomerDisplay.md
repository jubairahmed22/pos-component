# CustomerDisplay

The customer-facing screen: what they're buying, what they saved, what to do next.

## Use
- Runs on a second display or the rear screen of the terminal; readable at 1.5 m (22px lines, 44px total).
- Mirrors the cart live so the customer catches mistakes before paying — a proven error and dispute reducer.
- Shows savings and points earned; shows nothing the customer shouldn't see (no masked contact, no margins, no cashier notes).
- The dark bottom block carries the one instruction for the current step (check items → tap card → thank you).

## Props
`lines` (`[{qty, name, price, discount, fulfilment}]`), `customer`, `subtotal`, `savings`, `tax`, `total`, `points`, `state` (`cart` · `pay` · `thanks`), `height`, `currency`.
