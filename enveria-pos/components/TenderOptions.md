# TenderOptions

Payment method selector on the tender screen.

## Use
- 2-column grid of `target-key` options with a 28px icon, the method name and its keyboard shortcut hint (F1–F4) for proficient users.
- Selected option uses `primary-soft` fill plus a 2px `primary` border — two cues, not colour alone.
- Order by frequency for the store and keep it fixed.

## Props
`value`, `onChange(id)`, `options` (`[{id,label,icon,hint}]`), `showHints`.
