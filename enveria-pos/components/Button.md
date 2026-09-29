# Button

Buttons for every register action; one primary per screen, sized by consequence.

## Use
- `variant="primary"` for the one forward action on screen (Pay, Complete sale, Confirm tender). Size `xl` (`target-primary`, 88px) on the sale screen; `lg` inside dialogs.
- `variant="secondary"` for everything that moves sideways: Hold, Recall, Customer, Reprint.
- `variant="danger"` for anything that loses money or data: Void, Delete line, Refund, Cancel sale. Always an icon **and** a word.
- `variant="manager"` only for the Approve button of a supervisor dialog.
- `requiresManager` adds the lock glyph so cashiers learn before tapping that the action is gated and logged.
- `ghost` for low-stakes tertiary actions in dense areas (Reprint, Notes).

## Props the consumer provides
`variant`, `size` (`md` 56px · `lg` 72px · `xl` 88px), `icon` (an `Icon` name), `block`, `disabled`, `requiresManager`, `onClick`, children (the label).

## Do / don't
- Do write the amount into the Pay label (`Pay ৳ 3,786.50`) so the cashier confirms the figure at the moment of commitment.
- Do place the primary button at the bottom of the cart rail, on the side of the cashier's dominant hand.
- Don't put two primary buttons on one screen. Don't use `md` for anything tapped more than once per sale.
- Don't place Void next to Pay: keep at least one row or `space-4` between destructive and primary.
