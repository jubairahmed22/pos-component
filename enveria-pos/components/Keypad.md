# Keypad

Numeric keypad for amounts, quantities, PLU codes and PINs.

## Use
- Layout follows the calculator/POS convention (7-8-9 on top) that trained cashiers already type blind; do not reorder.
- Keys are `target-key` (72px) with `space-2` gaps, sized for fast double-speed tapping at 80 cm.
- `mask` hides the value for PINs; `decimal` swaps `00` for `.` where cents are typed.
- Physical number keys and a USB numpad must drive the same keypad.

## Props
`value`, `label`, `enterLabel`, `onChange(value)`, `onEnter(value)` (`null` hides Enter), `showDisplay`, `mask`, `decimal`.

## Don't
Don't use the phone layout (1-2-3 on top) on a register. Don't auto-submit on length except for PINs of fixed length.
