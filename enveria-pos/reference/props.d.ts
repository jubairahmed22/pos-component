// Enveria POS — component props (documentation; loaded as window.EnveriaPOS)
export type IconName = "scan"|"search"|"cash"|"card"|"split"|"gift"|"wallet"|"plus"|"minus"|"trash"|"lock"|"alert"|"check"|"info"|"x"|"back"|"del"|"tag"|"user"|"offline"|"printer"|"drawer"|"hold"|"receipt"|"age"|"truck"|"store"|"box"|"clock"|"return"|"mail"|"phone"|"star"|"display"|"keyboard"|"globe"|"sync"|"calc"|"contactless";
export interface IconProps { name: IconName; size?: number; label?: string; className?: string }
export interface ButtonProps { variant?: "primary"|"secondary"|"danger"|"ghost"|"manager"; size?: "md"|"lg"|"xl"; icon?: IconName; block?: boolean; disabled?: boolean; requiresManager?: boolean; onClick?: () => void; children?: React.ReactNode }
export interface BadgeProps { tone?: "neutral"|"warning"|"danger"|"success"|"manager"|"info"; icon?: IconName; children: React.ReactNode }
export interface KeypadProps { value?: string|number; label?: string; enterLabel?: string; onChange?: (v: string) => void; onEnter?: ((v: string) => void) | null; showDisplay?: boolean; mask?: boolean; decimal?: boolean }
export interface ScanFieldProps { state?: "ready"|"idle"|"notfound"; value?: string; placeholder?: string }
export interface ProductTileProps { name: string; category?: string; price: number; currency?: string; stock?: "in"|"low"|"out"; ageCheck?: boolean; variants?: string; selected?: boolean; onClick?: () => void }
export interface CartLineProps { name: string; meta?: string; qty?: number; price: number; total?: number; discount?: number; discountLabel?: string; fulfilment?: "ship"|"pickup"; pickupAt?: string; voided?: boolean; selected?: boolean; onInc?: () => void; onDec?: () => void; onQty?: () => void; currency?: string }
export interface TotalsProps { subtotal: number; discount?: number; tax: number; taxLabel?: string; total: number; items?: number; currency?: string }
export interface TenderOptionsProps { value?: string; onChange?: (id: string) => void; options?: { id: string; label: string; icon: IconName; hint?: string }[]; showHints?: boolean }
export interface QuickCashProps { due: number; notes?: number[]; count?: number; onPick?: (amount: number) => void; currency?: string }
export interface ChangeDueProps { tendered: number; total?: number; change?: number; currency?: string }
export interface StatusBannerProps { tone?: "info"|"success"|"warning"|"danger"|"training"; title?: string; icon?: IconName; action?: React.ReactNode; children?: React.ReactNode }
export interface ManagerApprovalProps { action: string; detail?: string; pinLength?: number; audit?: string; onApprove?: () => void; onCancel?: () => void }
export interface RegisterProps { hand?: "right"|"left"; training?: boolean; offline?: boolean; cashier?: string; customer?: string; orders?: number; lines?: (CartLineProps & { id: number })[]; selected?: number; height?: number; currency?: string }
export interface VariantPickerProps { name: string; style?: string; price: number; colors: { id: string; label: string; swatch: string }[]; sizes: string[]; stock?: Record<string, number>; online?: Record<string, number>; color?: string; size?: string; onPick?: (v: { color: string; size: string; here: number }) => void; onAdd?: () => void; onShip?: () => void; onFind?: () => void; currency?: string }
export interface StockLocatorProps { name: string; sku?: string; updated?: string; rows: { location: string; type: "here"|"store"|"warehouse"; qty: number; distance?: string; eta?: string; onAct?: () => void }[] }
export interface CustomerCardProps { name: string; tier?: string; phone?: string; email?: string; points?: number; credit?: number; orders?: number; note?: string; compact?: boolean; onDetach?: () => void; currency?: string }
export interface OrderQueueProps { orders: { id: string; channel: "pickup"|"curbside"|"ship"; customer: string; items: number; total: number; paid?: boolean; due: string; status: "new"|"picking"|"ready"|"late"; picked?: number; onOpen?: () => void }[]; currency?: string }
export interface ReturnLineProps { name: string; meta?: string; soldQty: number; price: number; returnQty?: number; reason?: string; reasons?: string[]; condition?: "resell"|"damaged"; blocked?: string; currency?: string }
export interface RefundSummaryProps { receipt: string; soldAt: string; channel: string; items: number; subtotal: number; tax: number; total: number; tenders: { label: string; icon?: IconName; amount: number }[]; requiresManager?: boolean; currency?: string }
export interface PaymentTerminalProps { state: "waiting"|"pin"|"processing"|"approved"|"declined"|"offline"; amount: number; brand?: string; last4?: string; auth?: string; onRetry?: () => void; onOther?: () => void; onCancel?: () => void; currency?: string }
export interface SplitTenderProps { total: number; payments: { label: string; icon?: IconName; amount: number }[]; onRemove?: (index: number) => void; currency?: string }
export interface ReceiptOptionsProps { email?: string; phone?: string; gift?: boolean; onPick?: (label: string) => void }
export interface CustomerDisplayProps { lines: { qty: number; name: string; price: number; discount?: number; fulfilment?: "ship"|"pickup" }[]; customer?: string; subtotal: number; savings?: number; tax: number; total: number; points?: number; state?: "cart"|"pay"|"thanks"; height?: number; currency?: string }
export interface CashCountProps { denominations?: number[]; counts?: Record<number, number>; expected?: number; blind?: boolean; tolerance?: number; currency?: string }
export interface ShiftSummaryProps { data: { gross: number; returns: number; returnsCount: number; discounts: number; tax: number; net: number; tenders: { label: string; count: number; amount: number }[]; transactions: number; voids: number; noSales: number; overrides: number; offlineSynced: number }; currency?: string }
export interface ShortcutSheetProps { keys?: [string, string][] }
/** Formats a number as currency: money(1240) → "৳ 1,240.00". */
export declare function money(n: number, currency?: string): string;
