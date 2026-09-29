# StatusBanner

System state messages across the top of the sale screen or inside a dialog.

## Use
- Every tone has an icon **and** a bold lead word ("Offline.", "Declined."), so meaning never depends on colour.
- Errors say what to do next and offer the action inline (`action` slot) — an error must never cost more than one extra tap.
- `training` is a striped amber bar that replaces the scan field; nothing else uses the `training` token.
- Banners never cover the cart or the Pay button, and never auto-dismiss while they still apply.

## Props
`tone` (`info` · `success` · `warning` · `danger` · `training`), `title`, `icon` (override), `action` (a node), children.
