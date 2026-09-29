/* @ds-bundle: {"format":4,"namespace":"EnveriaPOS","components":[{"name":"Icon"},{"name":"Button"},{"name":"Badge"},{"name":"Keypad"},{"name":"ScanField"},{"name":"ProductTile"},{"name":"CartLine"},{"name":"Totals"},{"name":"TenderOptions"},{"name":"QuickCash"},{"name":"ChangeDue"},{"name":"StatusBanner"},{"name":"ManagerApproval"},{"name":"VariantPicker"},{"name":"StockLocator"},{"name":"CustomerCard"},{"name":"OrderQueue"},{"name":"ReturnLine"},{"name":"RefundSummary"},{"name":"PaymentTerminal"},{"name":"SplitTender"},{"name":"ReceiptOptions"},{"name":"CustomerDisplay"},{"name":"CashCount"},{"name":"ShiftSummary"},{"name":"ShortcutSheet"},{"name":"Register"}]} */
(function () {
  var React = window.React, h = React.createElement, useState = React.useState;
  function cx() { return Array.prototype.filter.call(arguments, Boolean).join(" "); }
  function money(n, cur) {
    if (n == null || isNaN(n)) return "";
    var neg = n < 0, s = Math.abs(n).toFixed(2).split(".");
    s[0] = s[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return (neg ? "−" : "") + (cur == null ? "৳" : cur) + " " + s.join(".");
  }

  /* 24px stroke icons, 2px lines, round caps. Drawn for this system. */
  var P = {
    scan: "M3 7V4h3M18 4h3v3M21 17v3h-3M6 20H3v-3M7 8v8M10 8v8M13 8v8M17 8v8",
    search: "M11 4a7 7 0 1 0 0 14a7 7 0 1 0 0-14zM16 16l5 5",
    cash: "M3 6h18v12H3zM12 9a3 3 0 1 0 0 6a3 3 0 1 0 0-6zM6 9v.01M18 15v.01",
    card: "M3 5h18v14H3zM3 10h18M7 15h4",
    split: "M4 5h7v14H4zM13 5h7v14h-7z",
    gift: "M4 10h16v10H4zM3 7h18v3H3zM12 7v13M12 7c-2-4-6-4-6-1s6 1 6 1c2-4 6-4 6-1s-6 1-6 1",
    wallet: "M4 7h14a2 2 0 0 1 2 2v9H4zM4 7l11-3v3M16 12h4v3h-4z",
    plus: "M12 5v14M5 12h14",
    minus: "M5 12h14",
    trash: "M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13M10 11v6M14 11v6",
    lock: "M6 11h12v9H6zM8 11V8a4 4 0 0 1 8 0v3",
    alert: "M12 3L2 20h20zM12 10v4M12 17v.01",
    check: "M4 12l5 5L20 6",
    info: "M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18zM12 11v6M12 7.5v.01",
    x: "M6 6l12 12M18 6L6 18",
    back: "M9 6l-6 6l6 6M3 12h11a6 6 0 0 1 6 6",
    del: "M8 5h13v14H8l-6-7zM12 9l6 6M18 9l-6 6",
    tag: "M3 3h8l10 10l-8 8L3 11zM7.5 7.5v.01",
    user: "M12 4a4 4 0 1 0 0 8a4 4 0 1 0 0-8zM4 21c1-4 4-6 8-6s7 2 8 6",
    offline: "M3 3l18 18M8.5 16.5a5 5 0 0 1 7 0M5 13a10 10 0 0 1 5-2.7M14 10.3A10 10 0 0 1 19 13M2 9.5a15 15 0 0 1 4-2.5M12 6a15 15 0 0 1 10 3.5M12 20v.01",
    printer: "M6 9V3h12v6M6 17H3V9h18v8h-3M6 14h12v7H6z",
    drawer: "M3 12h18v8H3zM5 12l2-7h10l2 7M10 16h4",
    hold: "M8 5v14M16 5v14",
    receipt: "M5 3h14v18l-3-2l-2 2l-2-2l-2 2l-2-2l-3 2zM9 8h6M9 12h6M9 16h3",
    truck: "M2 6h12v10H2zM14 10h4l3 3v3h-7M6 16v.01M17 16v.01",
    store: "M3 9l2-5h14l2 5M3 9h18M4 9v11h16V9M9 20v-6h6v6",
    box: "M3 7l9-4l9 4v10l-9 4l-9-4zM3 7l9 4l9-4M12 11v10",
    clock: "M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18zM12 7v5l3 2",
    "return": "M9 14l-5-5l5-5M4 9h11a5 5 0 0 1 0 10h-3",
    mail: "M3 5h18v14H3zM3 6l9 7l9-7",
    phone: "M7 2h10v20H7zM11 18h2",
    star: "M12 3l2.8 5.8l6.2.9l-4.5 4.4l1.1 6.2L12 17.4l-5.6 2.9l1.1-6.2L3 9.7l6.2-.9z",
    display: "M3 4h18v12H3zM8 20h8M12 16v4",
    keyboard: "M2 6h20v12H2zM6 10h.01M10 10h.01M14 10h.01M18 10h.01M7 14h10",
    globe: "M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18",
    sync: "M20 8A8 8 0 0 0 5 6L3 8M3 3v5h5M4 16a8 8 0 0 0 15 2l2-2M21 21v-5h-5",
    calc: "M5 2h14v20H5zM8 6h8v3H8zM8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01M16 17h.01",
    contactless: "M7 8a6 6 0 0 1 0 8M11 5a10 10 0 0 1 0 14M15 3a13 13 0 0 1 0 18",
    age: "M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18zM8 10h1v5M13 10a1.5 1.5 0 1 1 3 0a1.5 1.5 0 1 1-3 0M13 13.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 1 1-3 0"
  };
  function Icon(p) {
    var s = p.size || 24;
    return h("svg", { className: cx("ep-icon", p.className), width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": p.label ? null : true, role: p.label ? "img" : null, "aria-label": p.label || null },
      h("path", { d: P[p.name] || P.info }));
  }
  Icon.names = Object.keys(P);
  Icon.paths = P;

  function Button(p) {
    var v = p.variant || "secondary", sz = p.size || "md";
    return h("button", { type: p.type || "button", className: cx("ep-btn", "ep-btn--" + v, sz !== "md" && "ep-btn--" + sz, p.block && "ep-btn--block", p.className), disabled: p.disabled, onClick: p.onClick, "aria-label": p.ariaLabel },
      p.icon ? h(Icon, { name: p.icon, size: sz === "xl" ? 28 : 24 }) : null,
      p.children,
      p.requiresManager ? h("span", { className: "ep-btn-lock", title: "Manager approval" }, h(Icon, { name: "lock", size: 18, label: "needs manager" })) : null);
  }

  function Badge(p) {
    var tone = p.tone || "neutral";
    return h("span", { className: cx("ep-badge", "ep-badge--" + tone) }, p.icon ? h(Icon, { name: p.icon, size: 16 }) : null, p.children);
  }

  function Keypad(p) {
    var st = useState(p.value != null ? String(p.value) : ""), val = st[0], setVal = st[1];
    function press(k) {
      var n = val;
      if (k === "C") n = ""; else if (k === "del") n = val.slice(0, -1); else n = (val + k).slice(0, 9);
      setVal(n); if (p.onChange) p.onChange(n);
    }
    var keys = ["7", "8", "9", "4", "5", "6", "1", "2", "3", p.decimal ? "." : "00", "0", "del"];
    return h("div", { className: "ep ep-keypad", role: "group", "aria-label": p.label || "Keypad" },
      p.showDisplay === false ? null : h("div", { className: "ep-keypad-display" }, h("span", { className: "lbl" }, p.label || "Amount"), h("span", { className: "val", "aria-live": "polite" }, p.mask ? val.replace(/./g, "•") : (val || "0"))),
      keys.map(function (k) {
        return h("button", { key: k, className: cx("ep-key", k === "del" && "ep-key--fn"), onClick: function () { press(k); }, "aria-label": k === "del" ? "Delete digit" : k },
          k === "del" ? h(Icon, { name: "del", size: 28 }) : k);
      }),
      p.onEnter === null ? null : h("button", { className: "ep-key ep-key--enter", onClick: function () { if (p.onEnter) p.onEnter(val); } }, p.enterLabel || "Enter"));
  }

  function ScanField(p) {
    var state = p.state || "ready";
    var label = { ready: "Scanner ready", idle: "Tap to type", notfound: "Not found" }[state];
    return h("label", { className: cx("ep ep-scan", "ep-scan--" + state) },
      h(Icon, { name: state === "notfound" ? "alert" : "scan", size: 28 }),
      h("input", { defaultValue: p.value, placeholder: p.placeholder || "Scan barcode or search product / PLU", "aria-label": "Scan or search", "aria-invalid": state === "notfound" }),
      h("span", { className: "ep-scan-state" }, state === "ready" ? h(Icon, { name: "check", size: 18 }) : null, label));
  }

  function ProductTile(p) {
    var out = p.stock === "out";
    return h("button", { className: cx("ep ep-tile", p.selected && "ep-tile--selected", out && "ep-tile--out"), disabled: out, onClick: p.onClick, "aria-pressed": p.selected ? true : null },
      h("span", null, p.category ? h("span", { className: "ep-tile-cat" }, p.category) : null, h("span", { className: "ep-tile-name", style: { display: "block" } }, p.name), p.variants ? h("span", { className: "ep-tile-var" }, p.variants) : null),
      h("span", { className: "ep-tile-foot" },
        h("span", { className: "ep-tile-price" }, money(p.price, p.currency)),
        out ? h(Badge, null, "Sold out") : p.stock === "low" ? h(Badge, { tone: "warning" }, "Low") : p.ageCheck ? h(Badge, { tone: "warning", icon: "age" }, "ID") : null));
  }

  function CartLine(p) {
    var total = p.total != null ? p.total : (p.qty || 1) * p.price - (p.discount || 0);
    return h("div", { className: cx("ep ep-line", p.selected && "ep-line--selected", p.voided && "ep-line--voided"), "aria-selected": p.selected || null },
      p.voided ? h(Badge, { tone: "danger", icon: "x" }, "Void") : !p.selected ? h("button", { className: "ep-qty", onClick: p.onQty, "aria-label": "Quantity " + (p.qty || 1) }, (p.qty || 1) + "\u00D7") : h("div", { className: "ep-stepper" },
        h("button", { onClick: p.onDec, "aria-label": "Decrease quantity" }, h(Icon, { name: "minus" })),
        h("span", { className: "q" }, p.qty || 1),
        h("button", { onClick: p.onInc, "aria-label": "Increase quantity" }, h(Icon, { name: "plus" }))),
      h("div", null,
        h("div", { className: "ep-line-name" }, p.name),
        p.meta ? h("div", { className: "ep-line-meta" }, p.meta) : null,
        p.fulfilment === "ship" ? h(Badge, { tone: "info", icon: "truck" }, "Ship to customer") : p.fulfilment === "pickup" ? h(Badge, { tone: "info", icon: "box" }, "Pickup " + (p.pickupAt || "")) : null,
        p.discount ? h("div", { className: "ep-line-disc" }, h(Icon, { name: "tag", size: 16 }), (p.discountLabel || "Discount") + " " + money(-p.discount, p.currency)) : null),
      h("div", { className: "ep-line-total" }, money(total, p.currency)));
  }

  function Totals(p) {
    function row(k, v, cls) { return h("div", { className: cx("ep-trow", cls) }, h("span", { className: "k" }, k), h("span", { className: "v" }, v)); }
    return h("div", { className: "ep ep-totals", "aria-live": "polite" },
      row("Subtotal" + (p.items != null ? " · " + p.items + " items" : ""), money(p.subtotal, p.currency)),
      p.discount ? row("Discounts", money(-p.discount, p.currency)) : null,
      row(p.taxLabel || "VAT", money(p.tax, p.currency)),
      row("Total", money(p.total, p.currency), "ep-trow--total"));
  }

  var TENDERS = [{ id: "cash", label: "Cash", icon: "cash", hint: "F1" }, { id: "card", label: "Card", icon: "card", hint: "F2" }, { id: "wallet", label: "Mobile wallet", icon: "wallet", hint: "F3" }, { id: "split", label: "Split", icon: "split", hint: "F4" }];
  function TenderOptions(p) {
    var st = useState(p.value || null), v = st[0], set = st[1];
    var opts = p.options || TENDERS;
    return h("div", { className: "ep ep-tenders", role: "radiogroup", "aria-label": "Payment method" },
      opts.map(function (o) {
        return h("button", { key: o.id, role: "radio", "aria-checked": v === o.id, className: cx("ep-tender", v === o.id && "ep-tender--selected"), onClick: function () { set(o.id); if (p.onChange) p.onChange(o.id); } },
          h(Icon, { name: o.icon, size: 28 }), o.label, p.showHints === false ? null : h("span", { className: "hint" }, o.hint));
      }));
  }

  function QuickCash(p) {
    var due = p.due || 0, notes = p.notes || [100, 200, 500, 1000];
    var list = [due];
    notes.forEach(function (n) { var r = Math.ceil(due / n) * n; if (r > due && list.indexOf(r) < 0) list.push(r); });
    list = [due].concat(list.slice(1).sort(function (a, b) { return a - b; })).slice(0, p.count || 4);
    return h("div", { className: "ep ep-quickcash" },
      list.map(function (a, i) {
        return h("button", { key: i, className: cx("ep-qc", i === 0 && "ep-qc--exact"), onClick: function () { if (p.onPick) p.onPick(a); } },
          i === 0 ? h("small", null, "Exact") : null, h("span", null, money(a, p.currency).replace(".00", "")));
      }));
  }

  function ChangeDue(p) {
    return h("div", { className: "ep ep-change", "aria-live": "assertive" },
      h("div", null, h("div", { className: "k" }, "Cash received"), h("div", { className: "v ep-num" }, money(p.tendered, p.currency))),
      h("div", { className: "due" }, h("div", { className: "k" }, "Change due"), h("div", { className: "v ep-num" }, money(p.change != null ? p.change : p.tendered - p.total, p.currency))));
  }

  var BANNER_ICON = { info: "info", success: "check", warning: "alert", danger: "alert", training: "alert" };
  function StatusBanner(p) {
    var tone = p.tone || "info";
    var inner = [h(Icon, { key: "i", name: p.icon || BANNER_ICON[tone], size: 28 }),
      h("div", { key: "t", className: "ep-banner-text" }, p.title ? h("b", null, p.title) : null, p.children),
      p.action || null];
    return h("div", { className: cx("ep ep-banner", "ep-banner--" + tone), role: tone === "danger" ? "alert" : "status" },
      tone === "training" ? h("div", { className: "ep-banner-inner" }, inner) : inner);
  }

  function ManagerApproval(p) {
    var st = useState(""), pin = st[0], setPin = st[1], len = p.pinLength || 4;
    return h("div", { className: "ep ep-dialog", role: "dialog", "aria-modal": true, "aria-label": "Manager approval" },
      h("div", { className: "ep-dialog-head" }, h(Icon, { name: "lock", size: 28 }), h("h2", null, "Manager approval")),
      h("div", { className: "ep-dialog-body" },
        h("div", null, h("div", { style: { fontSize: 20, lineHeight: "26px", fontWeight: 700 } }, p.action || "Void line"), h("div", { className: "ep-line-meta" }, p.detail)),
        h("div", { className: "ep-pin", "aria-label": pin.length + " of " + len + " digits entered" }, Array.apply(null, Array(len)).map(function (_, i) { return h("i", { key: i, className: i < pin.length ? "on" : "" }); })),
        h(Keypad, { showDisplay: false, onEnter: null, label: "Manager PIN", onChange: function (v) { setPin(v.slice(0, len)); } }),
        h("div", { className: "ep-dialog-actions" },
          h(Button, { variant: "secondary", size: "lg", onClick: p.onCancel }, "Cancel"),
          h(Button, { variant: "manager", size: "lg", disabled: pin.length < len, onClick: p.onApprove }, "Approve")),
        h("div", { className: "ep-audit" }, p.audit || "Logged with cashier, manager, time and amount.")));
  }

  window.EnveriaPOS = Object.assign(window.EnveriaPOS || {}, { Icon: Icon, Button: Button, Badge: Badge, Keypad: Keypad, ScanField: ScanField, ProductTile: ProductTile, CartLine: CartLine, Totals: Totals, TenderOptions: TenderOptions, QuickCash: QuickCash, ChangeDue: ChangeDue, StatusBanner: StatusBanner, ManagerApproval: ManagerApproval, money: money, cx: cx });
})();
/* Part 2 — omnichannel retail, returns, payments, end of day */
(function () {
  var React = window.React, h = React.createElement, useState = React.useState, NS = window.EnveriaPOS;
  var Icon = NS.Icon, Button = NS.Button, Badge = NS.Badge, money = NS.money, cx = NS.cx;
  function row(k, v, cls) { return h("div", { className: cx("ep-trow", cls) }, h("span", { className: "k" }, k), h("span", { className: "v" }, v)); }

  /* Variant matrix: colour then size, with stock per variant here and online */
  function VariantPicker(p) {
    var colors = p.colors || [], sizes = p.sizes || [], stock = p.stock || {}, online = p.online || {};
    var cs = useState(p.color || (colors[0] && colors[0].id)), color = cs[0], setColor = cs[1];
    var ss = useState(p.size || null), size = ss[0], setSize = ss[1];
    var cur = colors.filter(function (c) { return c.id === color; })[0] || {};
    return h("div", { className: "ep ep-variant" },
      h("div", { className: "ep-variant-head" },
        h("div", null, h("div", { className: "ep-variant-name" }, p.name), h("div", { className: "ep-line-meta" }, "Style " + (p.style || "") + " · " + cur.label + (size ? " · " + size : ""))),
        h("div", { className: "ep-line-total" }, money(p.price, p.currency))),
      h("div", { className: "ep-variant-label" }, "Colour"),
      h("div", { className: "ep-swatches", role: "radiogroup", "aria-label": "Colour" }, colors.map(function (c) {
        return h("button", { key: c.id, role: "radio", "aria-checked": color === c.id, className: cx("ep-swatch", color === c.id && "is-on"), onClick: function () { setColor(c.id); setSize(null); } },
          h("span", { className: "dot", style: { background: c.swatch } }), c.label);
      })),
      h("div", { className: "ep-variant-label" }, "Size · stock here / online"),
      h("div", { className: "ep-sizes", role: "radiogroup", "aria-label": "Size" }, sizes.map(function (s) {
        var k = color + "-" + s, here = stock[k] || 0, web = online[k] || 0;
        return h("button", { key: s, role: "radio", "aria-checked": size === s, className: cx("ep-size", size === s && "is-on", here === 0 && "is-none"), onClick: function () { setSize(s); if (p.onPick) p.onPick({ color: color, size: s, here: here }); } },
          h("span", { className: "sz" }, s),
          h("span", { className: "st" }, here === 0 ? "0 here" : here + " here"),
          h("span", { className: "st" }, web + " online"));
      })),
      h("div", { className: "ep-variant-actions" },
        h(Button, { size: "lg", icon: "store", onClick: p.onFind, disabled: !size }, "Find in other stores"),
        size && (stock[color + "-" + size] || 0) === 0
          ? h(Button, { size: "lg", variant: "primary", icon: "truck", onClick: p.onShip }, "Order for delivery")
          : h(Button, { size: "lg", variant: "primary", icon: "plus", disabled: !size, onClick: p.onAdd }, "Add to sale")));
  }

  /* Endless aisle: stock across locations with fulfilment actions */
  var LOC_ICON = { here: "store", store: "store", warehouse: "box", online: "globe" };
  function StockLocator(p) {
    var rows = p.rows || [];
    return h("div", { className: "ep ep-stock" },
      h("div", { className: "ep-stock-head" }, h("div", null, h("div", { className: "ep-variant-name" }, p.name), h("div", { className: "ep-line-meta" }, p.sku)), p.updated ? h("span", { className: "ep-line-meta" }, h(Icon, { name: "sync", size: 16 }), " " + p.updated) : null),
      h("div", { role: "table", "aria-label": "Stock by location" }, rows.map(function (r, i) {
        var none = r.qty === 0;
        return h("div", { key: i, role: "row", className: cx("ep-stock-row", r.type === "here" && "is-here") },
          h(Icon, { name: LOC_ICON[r.type] || "store", size: 24 }),
          h("div", { role: "cell" }, h("div", { className: "ep-line-name" }, r.location), h("div", { className: "ep-line-meta" }, [r.distance, r.eta].filter(Boolean).join(" · "))),
          h("div", { role: "cell", className: cx("ep-stock-qty", none && "is-none") }, none ? "0" : r.qty, h("small", null, none ? "none" : "in stock")),
          h("div", { role: "cell", className: "ep-stock-act" },
            none ? null : r.type === "here" ? h(Button, { onClick: r.onAct }, "Add") :
              r.type === "store" ? h(Button, { icon: "box", onClick: r.onAct }, "Reserve") : h(Button, { icon: "truck", onClick: r.onAct }, "Ship")));
      })));
  }

  /* Customer attached to the sale: loyalty, credit, masked contact */
  function CustomerCard(p) {
    return h("div", { className: cx("ep ep-cust", p.compact && "ep-cust--compact") },
      h("div", { className: "ep-cust-avatar", "aria-hidden": true }, (p.name || "?").split(" ").map(function (w) { return w[0]; }).join("").slice(0, 2)),
      h("div", { className: "ep-cust-main" },
        h("div", { className: "ep-cust-name" }, p.name, p.tier ? h(Badge, { tone: "manager", icon: "star" }, p.tier) : null),
        h("div", { className: "ep-line-meta" }, [p.phone, p.email].filter(Boolean).join(" · ")),
        p.compact ? null : h("div", { className: "ep-cust-stats" },
          h("div", null, h("span", null, "Points"), h("b", { className: "ep-num" }, (p.points || 0).toLocaleString("en"))),
          h("div", null, h("span", null, "Store credit"), h("b", { className: "ep-num" }, money(p.credit || 0, p.currency))),
          h("div", null, h("span", null, "Orders"), h("b", { className: "ep-num" }, p.orders || 0))),
        !p.compact && p.note ? h("div", { className: "ep-cust-note" }, h(Icon, { name: "info", size: 18 }), p.note) : null),
      p.onDetach ? h(Button, { variant: "ghost", onClick: p.onDetach, ariaLabel: "Remove customer from sale" }, h(Icon, { name: "x" })) : null);
  }

  /* Online order queue: pickup, ship-from-store, curbside with SLA */
  var CH = { pickup: ["box", "Pickup"], ship: ["truck", "Ship from store"], curbside: ["store", "Curbside"] };
  var OST = { "new": ["info", "New"], picking: ["neutral", "Picking"], ready: ["success", "Ready"], late: ["danger", "Late"] };
  function OrderQueue(p) {
    var orders = p.orders || [];
    return h("div", { className: "ep ep-orders", role: "list" }, orders.map(function (o) {
      var ch = CH[o.channel] || CH.pickup, st = OST[o.status] || OST["new"];
      return h("div", { key: o.id, role: "listitem", className: cx("ep-order", o.status === "late" && "is-late") },
        h("div", { className: "ep-order-ch" }, h(Icon, { name: ch[0], size: 28 }), h("span", null, ch[1])),
        h("div", { className: "ep-order-main" },
          h("div", { className: "ep-line-name" }, "#" + o.id + " · " + o.customer),
          h("div", { className: "ep-line-meta" }, o.items + " items · " + money(o.total, p.currency) + (o.paid ? " · paid online" : " · pay at pickup"))),
        h("div", { className: "ep-order-sla" }, h(Icon, { name: "clock", size: 18 }), h("span", { className: "ep-num" }, o.due)),
        o.status === "picking" ? h("div", { className: "ep-order-prog", "aria-label": o.picked + " of " + o.items + " picked" }, h("div", { className: "bar" }, h("i", { style: { width: (100 * o.picked / o.items) + "%" } })), h("span", { className: "ep-num" }, o.picked + "/" + o.items)) : h(Badge, { tone: st[0], icon: o.status === "late" ? "alert" : o.status === "ready" ? "check" : null }, st[1]),
        h(Button, { size: "lg", variant: o.status === "ready" ? "primary" : "secondary", onClick: o.onOpen }, o.status === "ready" ? "Hand over" : o.status === "picking" ? "Continue" : "Start picking"));
    }));
  }

  /* Return line: from original receipt, with reason and condition */
  var REASONS = ["Wrong size", "Changed mind", "Damaged", "Not as described"];
  function ReturnLine(p) {
    var rs = useState(p.reason || null), reason = rs[0], setReason = rs[1];
    var cs = useState(p.condition || "resell"), cond = cs[0], setCond = cs[1];
    var qs = useState(p.returnQty != null ? p.returnQty : 1), q = qs[0], setQ = qs[1];
    var blocked = p.blocked;
    return h("div", { className: cx("ep ep-return", blocked && "is-blocked") },
      h("div", { className: "ep-return-top" },
        h("div", null, h("div", { className: "ep-line-name" }, p.name), h("div", { className: "ep-line-meta" }, p.meta + " · sold " + p.soldQty + " × " + money(p.price, p.currency))),
        blocked ? h(Badge, { tone: "warning", icon: "alert" }, blocked) : h("div", { className: "ep-stepper" },
          h("button", { onClick: function () { setQ(Math.max(0, q - 1)); }, "aria-label": "Return fewer" }, h(Icon, { name: "minus" })),
          h("span", { className: "q" }, q),
          h("button", { onClick: function () { setQ(Math.min(p.soldQty, q + 1)); }, "aria-label": "Return more" }, h(Icon, { name: "plus" }))),
        h("div", { className: "ep-line-total" }, blocked ? "—" : money(-q * p.price, p.currency))),
      blocked || q === 0 ? null : h(React.Fragment, null,
        h("div", { className: "ep-seg", role: "radiogroup", "aria-label": "Reason" }, (p.reasons || REASONS).map(function (r) {
          return h("button", { key: r, role: "radio", "aria-checked": reason === r, className: cx(reason === r && "is-on"), onClick: function () { setReason(r); } }, r);
        })),
        h("div", { className: "ep-seg ep-seg--sm", role: "radiogroup", "aria-label": "Condition" },
          h("button", { role: "radio", "aria-checked": cond === "resell", className: cx(cond === "resell" && "is-on"), onClick: function () { setCond("resell"); } }, "Back to stock"),
          h("button", { role: "radio", "aria-checked": cond === "damaged", className: cx(cond === "damaged" && "is-on"), onClick: function () { setCond("damaged"); } }, "Damaged — write off"))));
  }

  /* Refund summary: back to original tenders */
  function RefundSummary(p) {
    return h("div", { className: "ep ep-refund" },
      h("div", { className: "ep-refund-src" }, h(Icon, { name: "receipt" }), h("div", null, h("div", { className: "ep-line-name" }, "Receipt " + p.receipt), h("div", { className: "ep-line-meta" }, p.soldAt + " · " + p.channel))),
      h("div", { className: "ep-totals" },
        row("Items returned · " + p.items, money(-p.subtotal, p.currency)),
        row("VAT", money(-p.tax, p.currency)),
        (p.tenders || []).map(function (t, i) { return h("div", { key: i, className: "ep-refund-tender" }, h(Icon, { name: t.icon || "card" }), h("span", null, t.label), h("span", { className: "v ep-num" }, money(t.amount, p.currency))); }),
        row("Refund total", money(p.total, p.currency), "ep-trow--total")),
      h(Button, { variant: "primary", size: "xl", block: true, icon: "return", requiresManager: p.requiresManager }, "Refund " + money(p.total, p.currency)));
  }

  /* Card terminal state, mirrored from the PIN pad */
  var TERM = {
    waiting: ["contactless", "Tap, insert or swipe", "Customer uses the card reader.", "info"],
    pin: ["lock", "Customer entering PIN", "PIN stays on the reader. Never ask for it.", "info"],
    processing: ["sync", "Authorising…", "Keep the card in the reader.", "info"],
    approved: ["check", "Approved", "", "success"],
    declined: ["alert", "Declined", "Ask for another card or method.", "danger"],
    offline: ["offline", "Reader not connected", "Check the cable or Bluetooth, then retry.", "warning"]
  };
  function PaymentTerminal(p) {
    var t = TERM[p.state] || TERM.waiting;
    return h("div", { className: cx("ep ep-term", "ep-term--" + t[3]), role: "status", "aria-live": "assertive" },
      h("div", { className: "ep-term-icon" }, h(Icon, { name: t[0], size: 40 })),
      h("div", { className: "ep-term-main" },
        h("div", { className: "ep-term-title" }, t[1]),
        h("div", { className: "ep-term-sub" }, p.state === "approved" ? (p.brand || "Card") + " •••• " + (p.last4 || "") + " · auth " + (p.auth || "") : t[2])),
      h("div", { className: "ep-term-amt ep-num" }, money(p.amount, p.currency)),
      p.state === "declined" || p.state === "offline" ? h("div", { className: "ep-term-act" }, h(Button, { size: "lg", onClick: p.onRetry }, "Retry"), h(Button, { size: "lg", onClick: p.onOther }, "Other method")) :
        p.state === "waiting" ? h("div", { className: "ep-term-act" }, h(Button, { size: "lg", variant: "ghost", onClick: p.onCancel }, "Cancel")) : null);
  }

  /* Split tender: applied payments and balance remaining */
  function SplitTender(p) {
    var paid = (p.payments || []).reduce(function (a, x) { return a + x.amount; }, 0), left = Math.round((p.total - paid) * 100) / 100;
    return h("div", { className: "ep ep-split" },
      row("Sale total", money(p.total, p.currency)),
      (p.payments || []).map(function (x, i) {
        return h("div", { key: i, className: "ep-refund-tender" }, h(Icon, { name: x.icon || "card" }), h("span", null, x.label), h("span", { className: "v ep-num" }, money(-x.amount, p.currency)), p.onRemove ? h(Button, { variant: "ghost", ariaLabel: "Remove payment", onClick: function () { p.onRemove(i); } }, h(Icon, { name: "x" })) : null);
      }),
      h("div", { className: cx("ep-split-left", left <= 0 && "is-done") }, h("span", null, left <= 0 ? "Fully paid" : "Remaining"), h("b", { className: "ep-num" }, money(Math.max(left, 0), p.currency))));
  }

  /* Receipt choice at the end of every sale */
  function ReceiptOptions(p) {
    var gs = useState(!!p.gift), gift = gs[0], setGift = gs[1];
    function opt(icon, label, sub, primary) { return h("button", { className: cx("ep-rcpt", primary && "is-primary"), onClick: function () { if (p.onPick) p.onPick(label); } }, h(Icon, { name: icon, size: 28 }), h("span", null, h("b", null, label), sub ? h("small", null, sub) : null)); }
    return h("div", { className: "ep ep-rcpts" },
      opt("mail", "Email", p.email || "Add email", !!p.email),
      opt("phone", "SMS", p.phone || "Add number"),
      opt("printer", "Print", gift ? "With gift receipt" : "Paper"),
      opt("x", "No receipt", "Saved to order history"),
      h("label", { className: "ep-toggle" }, h("input", { type: "checkbox", checked: gift, onChange: function () { setGift(!gift); } }), h("span", { className: "track" }), "Add gift receipt (hides prices)"));
  }

  /* Customer-facing display: second screen or turned tablet */
  function CustomerDisplay(p) {
    var lines = p.lines || [];
    return h("div", { className: "ep ep-cfd", style: { height: p.height || 480 } },
      h("div", { className: "ep-cfd-list" },
        h("div", { className: "ep-cfd-hello" }, p.customer ? "Hi " + p.customer.split(" ")[0] : "Welcome"),
        lines.map(function (l, i) { return h("div", { key: i, className: "ep-cfd-line" }, h("span", null, l.qty + " × " + l.name, l.fulfilment === "ship" ? h("small", null, "Delivered to your address") : null), h("span", { className: "ep-num" }, money(l.qty * l.price - (l.discount || 0), p.currency))); })),
      h("div", { className: "ep-cfd-side" },
        h("div", { className: "ep-totals" },
          row("Subtotal", money(p.subtotal, p.currency)),
          p.savings ? row("You saved", money(-p.savings, p.currency)) : null,
          row("VAT", money(p.tax, p.currency)),
          row("Total", money(p.total, p.currency), "ep-trow--total")),
        p.points ? h("div", { className: "ep-cfd-points" }, h(Icon, { name: "star" }), "You earn " + p.points + " points") : null,
        h("div", { className: "ep-cfd-state" }, p.state === "pay" ? [h(Icon, { key: "i", name: "contactless", size: 40 }), h("span", { key: "t" }, "Tap, insert or swipe your card")] : p.state === "thanks" ? [h(Icon, { key: "i", name: "check", size: 40 }), h("span", { key: "t" }, "Thank you. Receipt sent to your email.")] : [h(Icon, { key: "i", name: "scan", size: 40 }), h("span", { key: "t" }, "Please check your items")])));
  }

  /* Cash count by denomination for close-out, float and cash drops */
  function CashCount(p) {
    var den = p.denominations || [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
    var st = useState(p.counts || {}), counts = st[0], setCounts = st[1];
    var counted = den.reduce(function (a, d) { return a + d * (counts[d] || 0); }, 0);
    var variance = counted - (p.expected || 0);
    function set(d, n) { var c = Object.assign({}, counts); c[d] = Math.max(0, n); setCounts(c); }
    return h("div", { className: "ep ep-count" },
      h("div", { className: "ep-count-grid" }, den.map(function (d) {
        var n = counts[d] || 0;
        return h("div", { key: d, className: "ep-count-row" },
          h("span", { className: "den ep-num" }, money(d, p.currency).replace(".00", "")),
          h("div", { className: "ep-stepper" }, h("button", { onClick: function () { set(d, n - 1); }, "aria-label": "One fewer " + d }, h(Icon, { name: "minus" })), h("span", { className: "q" }, n), h("button", { onClick: function () { set(d, n + 1); }, "aria-label": "One more " + d }, h(Icon, { name: "plus" }))),
          h("span", { className: "sub ep-num" }, money(d * n, p.currency)));
      })),
      h("div", { className: "ep-totals" },
        row("Counted", money(counted, p.currency)),
        p.blind ? row("Expected", "Shown after submit") : row("Expected", money(p.expected, p.currency)),
        p.blind ? null : h("div", { className: cx("ep-variance", Math.abs(variance) < 0.005 ? "is-ok" : Math.abs(variance) <= (p.tolerance || 50) ? "is-warn" : "is-bad") },
          h(Icon, { name: Math.abs(variance) < 0.005 ? "check" : "alert" }),
          h("span", null, Math.abs(variance) < 0.005 ? "Balanced" : variance > 0 ? "Over" : "Short"),
          h("b", { className: "ep-num" }, money(variance, p.currency)))));
  }

  /* End-of-day (Z) summary */
  function ShiftSummary(p) {
    var s = p.data || {};
    return h("div", { className: "ep ep-shift" },
      h("div", { className: "ep-shift-col" }, h("div", { className: "ep-variant-label" }, "Sales"),
        h("div", { className: "ep-totals" }, row("Gross sales", money(s.gross, p.currency)), row("Returns · " + s.returnsCount, money(-s.returns, p.currency)), row("Discounts", money(-s.discounts, p.currency)), row("VAT", money(s.tax, p.currency)), row("Net sales", money(s.net, p.currency), "ep-trow--total"))),
      h("div", { className: "ep-shift-col" }, h("div", { className: "ep-variant-label" }, "By tender"),
        h("div", { className: "ep-totals" }, (s.tenders || []).map(function (t, i) { return h("div", { key: i, className: "ep-trow" }, h("span", { className: "k" }, t.label + " · " + t.count), h("span", { className: "v" }, money(t.amount, p.currency))); }))),
      h("div", { className: "ep-shift-col" }, h("div", { className: "ep-variant-label" }, "Exceptions"),
        h("div", { className: "ep-shift-ex" },
          [["Transactions", s.transactions], ["Voided lines", s.voids], ["No-sale drawer opens", s.noSales], ["Manager overrides", s.overrides], ["Offline sales synced", s.offlineSynced]].map(function (x) { return h("div", { key: x[0] }, h("span", null, x[0]), h("b", { className: "ep-num" }, x[1])); }))));
  }

  /* Keyboard map for proficient cashiers; F-keys follow retail convention */
  var KEYS = [["F1", "Cash"], ["F2", "Card"], ["F3", "Mobile wallet"], ["F4", "Split tender"], ["F5", "Find customer"], ["F6", "Hold sale"], ["F7", "Recall sale"], ["F8", "Discount"], ["F9", "Return"], ["F10", "Online orders"], ["F12", "Pay"], ["/", "Search products"], ["+ / −", "Quantity"], ["Del", "Void line"], ["Esc", "Close dialog"], ["Enter", "Confirm"]];
  function ShortcutSheet(p) {
    return h("div", { className: "ep ep-keys", role: "table", "aria-label": "Keyboard shortcuts" }, (p.keys || KEYS).map(function (k) {
      return h("div", { key: k[0], role: "row", className: "ep-keys-row" }, h("kbd", { role: "cell" }, k[0]), h("span", { role: "cell" }, k[1]));
    }));
  }

  /* The retail sale screen */
  var PRODUCTS = [
    { name: "Oxford shirt", category: "Tops", price: 2490, variants: "4 colours · 6 sizes" },
    { name: "Linen overshirt", category: "Tops", price: 3290, variants: "3 colours · 5 sizes", stock: "low" },
    { name: "Chino trousers", category: "Bottoms", price: 2890, variants: "Waist 28–38" },
    { name: "Denim jacket", category: "Tops", price: 5490, stock: "out", variants: "Online only" },
    { name: "Canvas sneakers", category: "Shoes", price: 3990, variants: "EU 38–46" },
    { name: "Wireless earbuds", category: "Tech", price: 6490, ageCheck: false, variants: "Serial required" },
    { name: "Leather belt", category: "Accessories", price: 1290 },
    { name: "Gift card", category: "Gift cards", price: 1000, variants: "Any amount" }];
  function Register(p) {
    var init = p.lines || [
      { id: 1, name: "Oxford shirt", meta: "Navy · M · 20114-NV-M", qty: 2, price: 2490, discount: 498, discountLabel: "Buy 2 save 10%" },
      { id: 2, name: "Chino trousers", meta: "Khaki · W32 L32", qty: 1, price: 2890, fulfilment: "ship" },
      { id: 3, name: "Wireless earbuds", meta: "Serial 8XK2-40017", qty: 1, price: 6490 }];
    var st = useState(init), lines = st[0], setLines = st[1];
    var sel = useState(p.selected != null ? p.selected : 0), selected = sel[0], setSelected = sel[1];
    var cat = useState("All"), c = cat[0], setC = cat[1];
    var md = useState("Sale"), mode = md[0], setMode = md[1];
    function add(prod) {
      setLines(function (ls) {
        var hit = ls.filter(function (l) { return l.name === prod.name && !l.meta; })[0];
        if (hit) { setSelected(hit.id); return ls.map(function (l) { return l === hit ? Object.assign({}, l, { qty: l.qty + 1 }) : l; }); }
        var id = Date.now(); setSelected(id); return ls.concat([{ id: id, name: prod.name, qty: 1, price: prod.price }]);
      });
    }
    function step(id, d) { setLines(function (ls) { return ls.map(function (l) { return l.id === id ? Object.assign({}, l, { qty: Math.max(1, l.qty + d) }) : l; }); }); }
    var sub = 0, disc = 0, items = 0;
    lines.forEach(function (l) { sub += l.qty * l.price; disc += l.discount || 0; items += l.qty; });
    var tax = Math.round((sub - disc) * 0.075 * 100) / 100, total = sub - disc + tax;
    var cats = ["All", "Tops", "Bottoms", "Shoes", "Tech", "Accessories", "Gift cards"];
    var prods = PRODUCTS.filter(function (x) { return c === "All" || x.category === c; });
    return h("div", { className: cx("ep ep-register", p.hand === "left" && "ep-register--left"), style: { height: p.height || 820 } },
      h("div", { className: "ep-topbar" },
        h("div", { className: "ep-modes", role: "tablist" }, [["Sale", "cash"], ["Returns", "return"], ["Orders", "box"]].map(function (m) {
          return h("button", { key: m[0], role: "tab", "aria-selected": mode === m[0], className: "ep-mode", onClick: function () { setMode(m[0]); } }, h(Icon, { name: m[1] }), m[0], m[0] === "Orders" ? h("span", { className: "ep-count-pill" }, p.orders != null ? p.orders : 3) : null);
        })),
        p.training ? h("div", { style: { flex: 1 } }, h(NS.StatusBanner, { tone: "training", title: "Training mode" }, "Sales are not recorded")) :
          h("div", { style: { flex: 1, minWidth: 0 } }, h(NS.ScanField, { state: "ready", placeholder: "Scan or search products" })),
        h("div", { className: "who" }, h(Badge, { tone: p.offline ? "warning" : "success", icon: p.offline ? "offline" : "sync" }, p.offline ? "Offline" : "Synced"), h(Icon, { name: "user" }), p.cashier || "Nadia · Till 2")),
      h("div", { className: "ep-panel" },
        h("div", { className: "ep-cats", role: "toolbar", "aria-label": "Categories" }, cats.map(function (k) {
          return h("button", { key: k, className: "ep-cat", "aria-pressed": c === k, onClick: function () { setC(k); } }, k);
        })),
        h("div", { className: "ep-tiles" }, prods.map(function (x) { return h(NS.ProductTile, Object.assign({ key: x.name, onClick: function () { add(x); } }, x)); }))),
      h("div", { className: "ep-rail" },
        h("div", { className: "ep-panel", style: { flex: 1 } },
          h(CustomerCard, { compact: true, name: p.customer || "Farhana Akter", tier: "Gold", phone: "••• 4821", onDetach: function () {} }),
          h("div", { className: "ep-cart" }, lines.map(function (l) {
            return h("div", { key: l.id, onClick: function () { setSelected(l.id); } }, h(NS.CartLine, Object.assign({}, l, { selected: selected === l.id, onInc: function () { step(l.id, 1); }, onDec: function () { step(l.id, -1); } })));
          })),
          h(NS.Totals, { subtotal: sub, discount: disc, tax: tax, total: total, items: items })),
        h("div", { className: "ep-rail-actions" },
          h(Button, { icon: "hold", size: "lg" }, "Hold"),
          h(Button, { icon: "tag", size: "lg", requiresManager: true }, "Discount"),
          h(Button, { icon: "trash", size: "lg", variant: "danger", requiresManager: true }, "Void")),
        h(Button, { variant: "primary", size: "xl", block: true, icon: "cash" }, "Pay " + money(total, p.currency))));
  }

  Object.assign(NS, { VariantPicker: VariantPicker, StockLocator: StockLocator, CustomerCard: CustomerCard, OrderQueue: OrderQueue, ReturnLine: ReturnLine, RefundSummary: RefundSummary, PaymentTerminal: PaymentTerminal, SplitTender: SplitTender, ReceiptOptions: ReceiptOptions, CustomerDisplay: CustomerDisplay, CashCount: CashCount, ShiftSummary: ShiftSummary, ShortcutSheet: ShortcutSheet, Register: Register });
})();
