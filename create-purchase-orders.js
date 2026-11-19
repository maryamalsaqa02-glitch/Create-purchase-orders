const $ = (s) => document.querySelector(s);
const translations = {
  en: {
    operations: "OPERATIONS",
    planning: "PLANNING",
    dashboard: "Dashboard",
    alerts: "Alerts",
    inventory: "Inventory",
    products: "Products",
    forecast: "AI forecast",
    orders: "Purchase orders",
    suppliers: "Suppliers",
    reports: "Reports",
    mainNavigation: "Main navigation",
    language: "Language",
    accountName: "Warehouse Manager",
    initials: "WM",
    manager: "Manager",
    popupRole: "Admin",
    usersTitle: "Active users",
    usersSubtitle: "Signed in to the website",
    connected: "online",
    employee: "Employee",
    trader: "Merchant",
    active: "Active now",
    lastSeen: "Active",
    minutes: "min ago",
    title: "Create purchase orders",
    subtitle: "Review the AI suggestions before creating orders",
    search: "Search products, SKUs...",
    cancel: "Cancel",
    suggested: "Suggested reorders",
    product: "PRODUCT",
    supplier: "SUPPLIER",
    runsOut: "RUNS OUT IN",
    reorderQty: "REORDER QTY",
    unitCost: "UNIT COST (EGP)",
    total: "TOTAL (EGP)",
    create: "Create purchase orders",
    footer: "© 2027 Smart Warehouse. All rights reserved.",
    created: (n) => `${n} purchase order${n === 1 ? "" : "s"} created.`,
    selectProducts: "Select at least one product to create orders.",
    confirmTitle: (n) => `Create ${n} purchase order${n === 1 ? "" : "s"}?`,
    confirmSummary: (n, total) =>
      `One order per selected item: Company name (${n} items). Total EGP ${format(total)}. They will be created as Pending approval.`,
    confirmCancel: "Cancel",
    confirmCreate: (n) => `Create ${n} orders`,
    success: (n) =>
      `${n} purchase order${n === 1 ? "" : "s"} created · Pending approval`,
    viewOrders: "View orders",
    productNames: [
      "Product 1",
      "Product 2",
      "Product 3",
      "Product 4",
      "Product 5",
    ],
    days: (n) => `${n} days`,
    outNow: "Out now",
    supplierName: "Company name",
    recommended: "Recommended",
    onTime: "On-time",
    lastOrder: "Last order",
    supplierDates: ["12 Oct", "28 Sep"],
    supplierPerformance: [98, 88],
  },
  ar: {
    operations: "العمليات",
    planning: "التخطيط",
    dashboard: "لوحة التحكم",
    alerts: "التنبيهات",
    inventory: "المخزون",
    products: "المنتجات",
    forecast: "توقعات الذكاء الاصطناعي",
    orders: "أوامر الشراء",
    suppliers: "الموردون",
    reports: "التقارير",
    mainNavigation: "التنقل الرئيسي",
    language: "اللغة",
    accountName: "مدير المخزن",
    initials: "م أ",
    manager: "مدير",
    popupRole: "مدير",
    usersTitle: "المستخدمون النشطون",
    usersSubtitle: "سجلوا الدخول إلى الموقع",
    connected: "متصلون",
    employee: "موظف",
    trader: "تاجر",
    active: "نشط الآن",
    lastSeen: "نشط قبل",
    minutes: "دقائق",
    title: "إنشاء أوامر الشراء",
    subtitle: "راجع اقتراحات الذكاء الاصطناعي قبل إنشاء الطلبات",
    search: "ابحث عن المنتجات أو SKU...",
    cancel: "إلغاء",
    suggested: "اقتراحات إعادة الطلب",
    product: "المنتج",
    supplier: "المورد",
    runsOut: "ينفد خلال",
    reorderQty: "كمية إعادة الطلب",
    unitCost: "سعر الوحدة (جنيه)",
    total: "الإجمالي (جنيه)",
    create: "إنشاء أوامر الشراء",
    footer: "© ٢٠٢٧ Smart Warehouse. جميع الحقوق محفوظة.",
    created: (n) => `تم إنشاء ${digits(n)} من أوامر الشراء.`,
    selectProducts: "اختاري منتجًا واحدًا على الأقل لإنشاء الأوامر.",
    confirmTitle: (n) => `إنشاء ${digits(n)} من أوامر الشراء؟`,
    confirmSummary: (n, total) =>
      `طلب لكل منتج محدد: اسم الشركة (${digits(n)} منتجات). الإجمالي ${format(total)} جنيه. ستُنشأ الطلبات بحالة بانتظار الموافقة.`,
    confirmCancel: "إلغاء",
    confirmCreate: (n) => `إنشاء ${digits(n)} طلبات`,
    success: (n) => `تم إنشاء ${digits(n)} من أوامر الشراء · بانتظار الموافقة`,
    viewOrders: "عرض الطلبات",
    productNames: ["المنتج ١", "المنتج ٢", "المنتج ٣", "المنتج ٤", "المنتج ٥"],
    days: (n) => `${n} أيام`,
    outNow: "ينفد الآن",
    supplierName: "اسم الشركة",
    recommended: "موصى به",
    onTime: "الالتزام بالموعد",
    lastOrder: "آخر طلب",
    supplierDates: ["١٢ أكتوبر", "٢٨ سبتمبر"],
    supplierPerformance: [98, 88],
  },
};
const recommendations = [
  {
    sku: "SKU-2210",
    days: 3,
    quantity: 400,
    cost: 12.5,
    product: 0,
    supplier: 0,
  },
  {
    sku: "SKU-1042",
    days: 5,
    quantity: 300,
    cost: 38,
    product: 1,
    supplier: 0,
  },
  {
    sku: "SKU-3087",
    days: 9,
    quantity: 250,
    cost: 9.75,
    product: 2,
    supplier: 0,
  },
  {
    sku: "SKU-1195",
    days: 2,
    quantity: 200,
    cost: 7.2,
    product: 3,
    supplier: 0,
  },
  {
    sku: "SKU-1195",
    days: 0,
    quantity: 500,
    cost: 21,
    product: 4,
    supplier: 0,
  },
];
const users = [
  {
    en: "Ahmed Hassan",
    ar: "أحمد حسن",
    email: "ahmed@smartwh.com",
    enInitials: "AH",
    arInitials: "أح",
    role: "employee",
  },
  {
    en: "Sara Mostafa",
    ar: "سارة مصطفى",
    email: "sara@smartwh.com",
    enInitials: "SM",
    arInitials: "س م",
    role: "employee",
  },
  {
    en: "Karim Adel",
    ar: "كريم عادل",
    email: "karim@supplier.com",
    enInitials: "KA",
    arInitials: "ك ع",
    role: "trader",
  },
  {
    en: "Nour Youssef",
    ar: "نور يوسف",
    email: "nour@smartwh.com",
    enInitials: "NY",
    arInitials: "ن ي",
    role: "employee",
  },
  {
    en: "Mona Tarek",
    ar: "منى طارق",
    email: "mona@smartwh.com",
    enInitials: "MT",
    arInitials: "م ط",
    role: "trader",
  },
];
let language = "en";
const selectedItems = recommendations.map(() => true);
function digits(value) {
  const latin = String(value).replace(/[٠-٩]/g, (d) =>
    String("٠١٢٣٤٥٦٧٨٩".indexOf(d)),
  );
  return language === "ar"
    ? latin.replace(/[0-9]/g, (d) => "٠١٢٣٤٥٦٧٨٩"[Number(d)])
    : latin;
}
function ascii(value) {
  return String(value).replace(/[٠-٩]/g, (d) =>
    String("٠١٢٣٤٥٦٧٨٩".indexOf(d)),
  );
}
function format(value, decimals = 0) {
  return digits(
    new Intl.NumberFormat("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(value),
  );
}
function t() {
  return translations[language];
}
function renderUsers() {
  const d = t();
  $("#usersList").innerHTML = users
    .map(
      (u, i) =>
        `<li class="user-row"><span class="user-avatar user-tone-${i + 1}">${language === "ar" ? u.arInitials : u.enInitials}<i class="presence is-online" aria-hidden="true"></i></span><span class="user-details"><strong>${language === "ar" ? u.ar : u.en}</strong><span class="user-detail" dir="ltr">${u.email}</span></span><span class="user-role ${u.role}">${d[u.role]}</span></li>`,
    )
    .join("");
  $(".online-count").textContent = digits(5);
  $(".users-count").textContent = digits(5);
  $(".users").setAttribute(
    "aria-label",
    language === "ar" ? "٥ مستخدمين" : "5 users",
  );
  $("#usersList").setAttribute("aria-label", d.usersTitle);
}
function renderRows() {
  const d = t(),
    query = ascii($("#orderSearch").value).trim().toLowerCase();
  $("#suggestionsBody").innerHTML = recommendations
    .map((item, index) => {
      const name = d.productNames[item.product];
      const sku = digits(item.sku);
      const searchText = `${name} ${item.sku}`.toLowerCase();
      const selected = selectedItems[index];
      const supplierIndex = Number(item.supplier) || 0;
      const quantity =
        Number(
          ascii(
            document.querySelector(`[data-quantity="${index}"]`)?.value ??
              item.quantity,
          ),
        ) || 0;
      return {
        item,
        index,
        name,
        sku,
        selected,
        supplierIndex,
        quantity,
        searchText,
      };
    })
    .filter(
      (row) => !query || ascii(row.searchText).toLowerCase().includes(query),
    )
    .map((row) => {
      const { item, index, name, sku, selected, supplierIndex, quantity } = row;
      const menuId = `supplier-menu-${index}`;
      const supplierOptions = [0, 1]
        .map(
          (option) =>
            `<button class="supplier-option${supplierIndex === option ? " selected" : ""}" type="button" role="option" data-supplier-option="${option}" data-row="${index}" aria-selected="${supplierIndex === option}"><span class="supplier-option-copy"><strong>${d.supplierName}</strong><span>${d.onTime} ${digits(d.supplierPerformance[option])}% · ${d.lastOrder} ${digits(d.supplierDates[option])}</span></span>${option === 0 ? `<span class="supplier-recommended">${d.recommended}</span>` : ""}<span class="supplier-option-check" aria-hidden="true">✓</span></button>`,
        )
        .join("");
      return `<tr><td><div class="suggestion-product"><button class="suggestion-check" type="button" data-selected="${index}" aria-pressed="${selected}" aria-label="${language === "ar" ? (selected ? "محدد" : "غير محدد") : selected ? "Selected" : "Not selected"}"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="m3 8 3.1 3.1L13 4.5"/></svg></button><div class="product-copy"><strong>${name}</strong><span><bdi dir="ltr">${sku}</bdi></span></div></div></td><td><div class="supplier-picker"><button class="supplier-select" type="button" data-supplier-toggle="${index}" aria-haspopup="listbox" aria-expanded="false" aria-controls="${menuId}" aria-label="${d.supplierName} ${name}"><span>${d.supplierName}</span><svg class="supplier-select-chevron" viewBox="0 0 14 14" aria-hidden="true"><path d="m3.5 5.25 3.5 3.5 3.5-3.5"/></svg></button><div class="supplier-menu" id="${menuId}" role="listbox" hidden>${supplierOptions}</div></div></td><td>${item.days ? d.days(digits(item.days)) : d.outNow}</td><td><input class="reorder-qty" type="text" inputmode="numeric" value="${digits(quantity)}" data-quantity="${index}" aria-label="${d.reorderQty} ${name}"></td><td class="cost-cell"><bdi dir="ltr">${format(item.cost, 2)}</bdi></td><td class="total-cell"><bdi dir="ltr">${format(Math.round(quantity * item.cost))}</bdi></td></tr>`;
    })
    .join("");
}
function applyLanguage(next) {
  language = next === "ar" ? "ar" : "en";
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  const d = t();
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (d[key] !== undefined) el.textContent = d[key];
  });
  $("#orderSearch").placeholder = d.search;
  $("#orderSearch").setAttribute("aria-label", d.search);
  $("nav").setAttribute("aria-label", d.mainNavigation);
  $(".language").setAttribute("aria-label", d.language);
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === language);
    button.setAttribute(
      "aria-pressed",
      String(button.dataset.lang === language),
    );
  });
  document
    .querySelectorAll(".badge")
    .forEach((el) => (el.textContent = digits(ascii(el.textContent))));
  renderUsers();
  renderRows();
  try {
    localStorage.setItem("supplier-search-lang", language);
  } catch {}
}
document
  .querySelectorAll("[data-lang]")
  .forEach((button) =>
    button.addEventListener("click", () => applyLanguage(button.dataset.lang)),
  );
$("#orderSearch").addEventListener("input", renderRows);
$("#suggestionsBody").addEventListener("click", (event) => {
  const toggle = event.target.closest("[data-supplier-toggle]");
  if (toggle) {
    const menu = toggle.closest(".supplier-picker").querySelector(".supplier-menu"),
      open = menu.hidden;
    closeSupplierMenus();
    if (open) {
      menu.hidden = false;
      menu.classList.add("supplier-menu-floating");
      toggle.setAttribute("aria-expanded", "true");
      positionSupplierMenu(menu, toggle);
    }
    return;
  }
  const option = event.target.closest("[data-supplier-option]");
  if (option) {
    recommendations[Number(option.dataset.row)].supplier = Number(
      option.dataset.supplierOption,
    );
    renderRows();
    document
      .querySelector(`[data-supplier-toggle="${option.dataset.row}"]`)
      ?.focus();
  }
});
function closeSupplierMenus() {
  document.querySelectorAll(".supplier-menu:not([hidden])").forEach((menu) => {
    menu.hidden = true;
    menu.classList.remove("supplier-menu-floating");
    menu.style.removeProperty("left");
    menu.style.removeProperty("top");
    menu.closest(".supplier-picker").querySelector("[data-supplier-toggle]")
      .setAttribute("aria-expanded", "false");
  });
}
function positionSupplierMenu(menu, toggle) {
  const anchor = toggle.getBoundingClientRect();
  const bounds = menu.getBoundingClientRect();
  const rtl = document.documentElement.dir === "rtl";
  const left = Math.max(8, Math.min(
    rtl ? anchor.right - bounds.width : anchor.left,
    window.innerWidth - bounds.width - 8,
  ));
  let top = anchor.bottom + 4;
  if (top + bounds.height > window.innerHeight - 8) {
    top = Math.max(8, anchor.top - bounds.height - 4);
  }
  menu.style.left = `${left}px`;
  menu.style.top = `${top}px`;
}
document.addEventListener("click", (event) => {
  if (event.target.closest(".supplier-picker")) return;
  closeSupplierMenus();
});
document.addEventListener("scroll", closeSupplierMenus, true);
window.addEventListener("resize", closeSupplierMenus);
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  const openMenu = document.querySelector(".supplier-menu:not([hidden])");
  if (openMenu) {
    const toggle = openMenu
      .closest(".supplier-picker")
      .querySelector("[data-supplier-toggle]");
    closeSupplierMenus();
    toggle.focus();
  }
});
$("#suggestionsBody").addEventListener("click", (event) => {
  const checkbox = event.target.closest("[data-selected]");
  if (!checkbox) return;
  const index = Number(checkbox.dataset.selected);
  selectedItems[index] = !selectedItems[index];
  renderRows();
});
$("#suggestionsBody").addEventListener("change", (event) => {
  const input = event.target.closest("[data-quantity]");
  if (!input) return;
  const index = Number(input.dataset.quantity);
  recommendations[index].quantity = Math.max(
    0,
    Number(ascii(input.value)) || 0,
  );
  renderRows();
});
$("#suggestionsBody").addEventListener("input", (event) => {
  const input = event.target.closest("[data-quantity]");
  if (!input) return;
  const index = Number(input.dataset.quantity),
    value = Math.max(0, Number(ascii(input.value)) || 0);
  const totalCell = input.closest("tr").querySelector(".total-cell bdi");
  totalCell.textContent = format(
    Math.round(value * recommendations[index].cost),
  );
});
const confirmDialog = $("#confirmOrders");
let pendingOrderCount = 0;
function selectedTotal() {
  return recommendations.reduce((sum, item, index) => {
    if (!selectedItems[index]) return sum;
    const quantity =
      Number(
        ascii(
          document.querySelector(`[data-quantity="${index}"]`)?.value ??
            item.quantity,
        ),
      ) || 0;
    return sum + quantity * item.cost;
  }, 0);
}
function openOrderConfirmation() {
  pendingOrderCount = selectedItems.filter(Boolean).length;
  if (!pendingOrderCount) {
    $("#createFeedback").textContent = t().selectProducts;
    $("#createFeedback").hidden = false;
    return;
  }
  $("#createFeedback").hidden = true;
  $("#confirmTitle").textContent = t().confirmTitle(pendingOrderCount);
  $("#confirmSummary").textContent = t().confirmSummary(
    pendingOrderCount,
    Math.round(selectedTotal()),
  );
  $("#cancelConfirm").textContent = t().confirmCancel;
  $("#submitConfirm").textContent = t().confirmCreate(pendingOrderCount);
  confirmDialog.showModal();
}
$("#createOrders").addEventListener("click", openOrderConfirmation);
$("#cancelConfirm").addEventListener("click", () => confirmDialog.close());
$("#submitConfirm").addEventListener("click", (event) => {
  event.stopPropagation();
  confirmDialog.close();
  $("#orderSuccessText").textContent = t().success(pendingOrderCount);
  $("#viewOrders").textContent = t().viewOrders;
  $("#orderSuccess").hidden = false;
});
$("#viewOrders").addEventListener("click", () => {
  window.location.href = "../purchase%20orders/index.html";
});
document.addEventListener("click", () => {
  if (!$("#orderSuccess").hidden) $("#orderSuccess").hidden = true;
});
$("#cancelOrders").addEventListener("click", () => history.back());
const usersToggle = $("#usersToggle"),
  usersPanel = $("#usersPanel");
function closeUsers(returnFocus = false) {
  usersPanel.hidden = true;
  usersToggle.setAttribute("aria-expanded", "false");
  if (returnFocus) usersToggle.focus();
}
usersToggle.addEventListener("click", (event) => {
  event.stopPropagation();
  const open = usersPanel.hidden;
  usersPanel.hidden = !open;
  usersToggle.setAttribute("aria-expanded", String(open));
});
document.addEventListener("click", (event) => {
  if (
    !usersPanel.hidden &&
    !event.target.closest("#usersPanel") &&
    !event.target.closest("#usersToggle")
  )
    closeUsers();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !usersPanel.hidden) closeUsers(true);
});
let initial = "en";
try {
  initial = localStorage.getItem("supplier-search-lang") === "ar" ? "ar" : "en";
} catch {}
applyLanguage(initial);
