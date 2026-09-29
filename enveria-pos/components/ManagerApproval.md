# ManagerApproval

Supervisor PIN dialog that gates voids, refunds, price overrides, discounts above threshold and no-sale drawer opens.

## Use
- Header in `manager` purple so everyone at the counter can see a gated action is in progress.
- States the exact action and amount being approved, and who requested it, before the PIN is entered.
- PIN is masked as dots; Approve stays disabled until the PIN is complete.
- The footer tells both parties the action is logged — a quiet deterrent to misconduct.

## Props
`action`, `detail`, `pinLength` (default 4), `audit`, `onApprove`, `onCancel`.

## Don't
Never let a cashier approve their own request, and never cache an approval across sales.
