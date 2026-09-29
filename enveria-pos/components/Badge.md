# Badge

Compact status tag for tiles, cart lines and headers; always carries a word.

## Use
Tones: `warning` (ID check, low stock), `danger` (voided), `success` (paid), `manager` (gated), `info` (customer attached), default neutral (sold out). Text is 15px bold — the `caption` floor — so it stays legible at arm's length.

## Props
`tone`, `icon` (optional `Icon` name), children (one or two words).

## Don't
Never communicate a state by badge colour alone; the word is required.
