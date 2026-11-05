/* =========================================================
   AZIQ — KANG NASGOR — app.js
   - Setiap .pilihanpaket diubah: tombol "Tambah ke Keranjang"
     diganti stepper +/-, dan klik area kartu (selain stepper)
     membuka tampilan detail 1 menu (full-page).
   - Beberapa menu utama punya "Menu Tambahan" (add-on) dengan
     stepper sendiri, contoh: tambah Nasi, Telur, dll.
   - Cart tersimpan di memori (state), ditampilkan di cart-bar
     bawah + modal keranjang.
   ========================================================= */

(function () {
  "use strict";

  /* ---------------- DATA TAMBAHAN PER MENU ---------------- */
  // pool add-on yang bisa dipakai berulang oleh beberapa menu
  const ADDON_POOL = {
    nasi:    { nama: "Tambah Nasi Putih", harga: 4000 },
    telur:   { nama: "Tambah Telur Ceplok", harga: 3000 },
    kerupuk: { nama: "Tambah Kerupuk", harga: 2000 },
    sambal:  { nama: "Sambal Extra", harga: 1000 },
    keju:    { nama: "Taburan Keju Parut", harga: 5000 },
    saus:    { nama: "Saus Tiram Extra", harga: 3000 },
  };

  // key harus sama persis dengan atribut data-nama pada tombol asli
  const DETAILS = {
    "Nasi Goreng Biasa": {
      desc: "Nasi goreng klasik ala gerobak Mamang Aziq — bumbu bawang & kecap yang digoreng di atas api besar sampai wangi.",
      komposisi: ["Nasi", "Bumbu bawang merah", "Kecap manis", "Bawang goreng"],
      addons: ["telur", "kerupuk", "sambal"],
    },
    "Nasi Goreng sepaket": {
      desc: "Satu paket lengkap nasi goreng dengan lauk pendamping, pas buat yang mau makan kenyang sekali duduk.",
      komposisi: ["Nasi goreng", "Lauk pendamping", "Acar", "Kerupuk"],
      addons: ["telur", "sambal"],
    },
    "Nasi Goreng Telur": {
      desc: "Nasi goreng bumbu andalan dengan telur ceplok setengah matang di atasnya, kuning telur meleleh ke tiap suapan.",
      komposisi: ["Nasi", "Telur ceplok", "Bumbu bawang", "Kecap manis"],
      addons: ["nasi", "kerupuk", "sambal"],
    },
    "Nasi Goreng bakso": {
      desc: "Nasi goreng dengan potongan bakso sapi kenyal yang digoreng bareng bumbu supaya rasanya nempel sampai dalam.",
      komposisi: ["Nasi", "Bakso sapi", "Bumbu bawang", "Daun bawang"],
      addons: ["telur", "kerupuk"],
    },
    "Nasi goreng ayam": {
      desc: "Nasi goreng dengan suwiran ayam kampung yang dimasak bumbu meresap, disiram bawang goreng renyah.",
      komposisi: ["Nasi", "Suwiran ayam", "Bumbu bawang", "Bawang goreng"],
      addons: ["telur", "sambal"],
    },
    "Nasi Goreng Lobster": {
      desc: "Nasi goreng premium dengan daging lobster segar yang ditumis singkat supaya teksturnya tetap manis dan kenyal.",
      komposisi: ["Nasi", "Daging lobster", "Mentega", "Bumbu bawang putih"],
      addons: ["nasi", "telur", "saus"],
    },
    "Nasi Goreng udang": {
      desc: "Nasi goreng dengan udang segar berukuran sedang, dimasak cepat biar udangnya tetap juicy dan tidak alot.",
      komposisi: ["Nasi", "Udang segar", "Bumbu bawang", "Daun bawang"],
      addons: ["telur", "kerupuk"],
    },
    "Nasi Goreng Komplit": {
      desc: "Semua ada di satu piring — telur, ayam, bakso, dan kerupuk. Pilihan pas buat yang susah milih satu topping saja.",
      komposisi: ["Nasi", "Telur", "Ayam", "Bakso", "Kerupuk"],
      addons: ["nasi", "sambal"],
    },
    "Paket Spesial": {
      desc: "Paket andalan Mamang Aziq — kombinasi nasi goreng dengan lauk pilihan dan minuman, dibuat khusus untuk yang mau makan lengkap dengan harga bersahabat.",
      komposisi: ["Nasi goreng spesial", "Lauk pilihan", "Minuman", "Kerupuk"],
      addons: ["nasi", "telur", "sambal"],
    },
    "Nasi goreng caviar": {
      desc: "Nasi goreng mewah bertabur caviar asin gurih di atasnya, sentuhan mewah untuk lidah yang mau sesuatu berbeda.",
      komposisi: ["Nasi", "Caviar", "Mentega", "Bawang bombay"],
      addons: ["telur", "keju"],
    },
    "lobster": {
      desc: "Lobster utuh dipanggang dengan mentega bawang putih, disajikan hangat — menu premium favorit yang datang khusus untuk momen spesial.",
      komposisi: ["Lobster utuh", "Mentega bawang putih", "Perasan lemon", "Peterseli"],
      addons: ["nasi", "saus", "keju"],
    },
    "Burger wagyubeef": {
      desc: "Burger dengan patty wagyu beef juicy, keju leleh, dan saus rahasia — dipanggang sesuai pesanan supaya matangnya pas.",
      komposisi: ["Patty wagyu", "Roti burger", "Keju cheddar", "Saus rahasia"],
      addons: ["keju", "saus"],
    },
    "Oyster": {
      desc: "Tiram segar disajikan dingin dengan perasan lemon, cocok jadi pembuka sebelum menu utama.",
      komposisi: ["Tiram segar", "Perasan lemon", "Mignonette sauce"],
      addons: ["saus"],
    },
    "Wagyu beef": {
      desc: "Potongan wagyu beef dipanggang medium supaya lemaknya meleleh sempurna, disajikan dengan saus lada hitam.",
      komposisi: ["Wagyu beef", "Saus lada hitam", "Mentega"],
      addons: ["nasi", "saus"],
    },
    "Soto ayam": {
      desc: "Soto ayam khas Bogor dengan kuah kuning gurih, suwiran ayam kampung, dan taburan bawang goreng.",
      komposisi: ["Kuah kuning", "Suwiran ayam", "Soun", "Bawang goreng"],
      addons: ["nasi", "sambal"],
    },
    "Kentang": {
      desc: "Kentang goreng renyah di luar, lembut di dalam — cocok jadi teman makan atau camilan santai.",
      komposisi: ["Kentang goreng", "Bumbu tabur"],
      addons: ["saus", "sambal"],
    },
    "Ayam Karage": {
      desc: "Ayam karage khas Jepang, digoreng garing dengan lapisan tepung tipis yang tetap juicy di dalam.",
      komposisi: ["Ayam fillet", "Tepung karage", "Bumbu shoyu"],
      addons: ["nasi", "sambal"],
    },
    "Ayam katsu": {
      desc: "Ayam katsu lapis tepung panko yang digoreng garing, disiram saus katsu manis gurih.",
      komposisi: ["Ayam fillet", "Tepung panko", "Saus katsu"],
      addons: ["nasi", "keju"],
    },
    "Ayam teriyaki": {
      desc: "Ayam panggang dengan saus teriyaki manis gurih yang meresap, cocok dipadukan dengan tambahan nasi hangat.",
      komposisi: ["Ayam fillet", "Saus teriyaki", "Wijen"],
      addons: ["nasi", "keju", "sambal"],
    },
    "Nasi": {
      desc: "Nasi putih hangat pulen, cocok jadi tambahan untuk menu-menu lauk yang porsinya kurang pas.",
      komposisi: ["Beras pilihan"],
      addons: [],
    },
    "Matcha": {
      desc: "Matcha dingin dengan rasa teh hijau Jepang yang creamy dan tidak terlalu manis.",
      komposisi: ["Bubuk matcha", "Susu", "Es"],
      addons: [],
    },
    "thaitea": {
      desc: "Thai tea creamy khas Thailand dengan campuran susu kental manis, disajikan dingin.",
      komposisi: ["Teh thai", "Susu", "Es"],
      addons: [],
    },
    "Es Teh Manis": {
      desc: "Es teh manis segar, pelepas dahaga klasik yang selalu cocok menemani nasi goreng panas.",
      komposisi: ["Teh", "Gula", "Es"],
      addons: [],
    },
    "greentea": {
      desc: "Green tea dingin dengan rasa teh hijau ringan, cocok buat yang suka minuman tidak terlalu manis.",
      komposisi: ["Teh hijau", "Susu", "Es"],
      addons: [],
    },
    "Milo": {
      desc: "Es Milo cokelat malt yang creamy dan legit, favorit segala umur.",
      komposisi: ["Milo bubuk", "Susu", "Es"],
      addons: [],
    },
    "Es jeruk": {
      desc: "Es jeruk peras asli, segar dan asam manis pas buat menemani makanan berbumbu kuat.",
      komposisi: ["Jeruk peras", "Gula", "Es"],
      addons: [],
    },
  };

  /* ---------------- STATE ---------------- */
  // cart: Map key -> { nama, harga, qty, tipe: 'menu' | 'addon', parent? }
  const cart = new Map();

  const rupiah = (n) =>
    "Rp" + n.toLocaleString("id-ID");

  /* ---------------- STEPPER BUILDER (dipakai di kartu & detail) ---------------- */
  function buildStepper(nama, harga, tipe, parentNama) {
    const key = tipe === "addon" ? `addon:${parentNama}:${nama}` : `menu:${nama}`;
    const wrap = document.createElement("div");
    wrap.className = "qty-stepper is-zero";
    wrap.dataset.key = key;

    const minus = document.createElement("button");
    minus.type = "button";
    minus.className = "qty-minus";
    minus.setAttribute("aria-label", `Kurangi ${nama}`);
    minus.textContent = "–";

    const value = document.createElement("span");
    value.className = "qty-value";
    value.textContent = "0";

    const add = document.createElement("button");
    add.type = "button";
    add.className = "qty-add";
    add.setAttribute("aria-label", `Tambah ${nama}`);
    add.textContent = "+";

    minus.addEventListener("click", (e) => {
      e.stopPropagation();
      changeQty(key, -1, { nama, harga, tipe, parentNama });
      syncStepperEls(key);
    });
    add.addEventListener("click", (e) => {
      e.stopPropagation();
      changeQty(key, +1, { nama, harga, tipe, parentNama });
      syncStepperEls(key);
    });

    wrap.append(minus, value, add);
    return wrap;
  }

  // simpan referensi semua stepper elemen dengan key yang sama (kartu + detail bisa tampilkan menu yg sama)
  const stepperRegistry = new Map(); // key -> Set of elements

  function registerStepper(el) {
    const key = el.dataset.key;
    if (!stepperRegistry.has(key)) stepperRegistry.set(key, new Set());
    stepperRegistry.get(key).add(el);
  }

  function syncStepperEls(key) {
    const qty = cart.has(key) ? cart.get(key).qty : 0;
    const els = stepperRegistry.get(key);
    if (els) {
      els.forEach((el) => {
        const valueEl = el.querySelector(".qty-value");
        if (valueEl) valueEl.textContent = String(qty);
        el.classList.toggle("is-zero", qty === 0);
      });
    }
    renderCartBar();
  }

  function changeQty(key, delta, meta) {
    const current = cart.get(key);
    const nextQty = (current ? current.qty : 0) + delta;
    if (nextQty <= 0) {
      cart.delete(key);
    } else {
      cart.set(key, { ...meta, qty: nextQty });
    }
  }

  /* ---------------- DETAIL VIEW ---------------- */
  const detailView = document.getElementById("detailView");

  function openDetail({ nama, harga, imgSrc }) {
    const info = DETAILS[nama] || { desc: "Menu favorit di warung Mamang Aziq.", komposisi: [], addons: [] };

    detailView.innerHTML = "";

    const top = document.createElement("div");
    top.className = "detail-top";
    const backBtn = document.createElement("button");
    backBtn.className = "detail-back";
    backBtn.innerHTML = "← Kembali ke Menu";
    backBtn.addEventListener("click", closeDetail);
    top.appendChild(backBtn);

    const body = document.createElement("div");
    body.className = "detail-body";

    const media = document.createElement("img");
    media.className = "detail-media";
    media.src = imgSrc || "";
    media.alt = nama;

    const eyebrow = document.createElement("p");
    eyebrow.className = "detail-eyebrow";
    eyebrow.textContent = "Detail Menu";

    const h1 = document.createElement("h1");
    h1.textContent = nama;

    const hargaEl = document.createElement("p");
    hargaEl.className = "detail-harga";
    hargaEl.textContent = rupiah(harga);

    const desc = document.createElement("p");
    desc.className = "detail-desc";
    desc.textContent = info.desc;

    body.append(media, eyebrow, h1, hargaEl, desc);

    // komposisi
    if (info.komposisi && info.komposisi.length) {
      const block = document.createElement("div");
      block.className = "detail-block";
      const h4 = document.createElement("h4");
      h4.textContent = "🧂 Komposisi";
      const ul = document.createElement("ul");
      ul.className = "komposisi-list";
      info.komposisi.forEach((k) => {
        const li = document.createElement("li");
        li.textContent = k;
        ul.appendChild(li);
      });
      block.append(h4, ul);
      body.appendChild(block);
    }

    // stepper menu utama
    const orderBlock = document.createElement("div");
    orderBlock.className = "detail-main-order";
    const label = document.createElement("span");
    label.className = "order-label";
    label.textContent = "Jumlah pesanan";
    const mainStepper = buildStepper(nama, harga, "menu");
    registerStepper(mainStepper);
    syncStepperFromCart(mainStepper);
    orderBlock.append(label, mainStepper);
    body.appendChild(orderBlock);

    // menu tambahan (add-on)
    if (info.addons && info.addons.length) {
      const block = document.createElement("div");
      block.className = "detail-block";
      const h4 = document.createElement("h4");
      h4.textContent = "➕ Menu Tambahan";
      block.appendChild(h4);
      info.addons.forEach((addonKey) => {
        const addon = ADDON_POOL[addonKey];
        if (!addon) return;
        const row = document.createElement("div");
        row.className = "addon-item";
        const infoDiv = document.createElement("div");
        infoDiv.className = "addon-info";
        const h5 = document.createElement("h5");
        h5.textContent = addon.nama;
        const span = document.createElement("span");
        span.textContent = rupiah(addon.harga);
        infoDiv.append(h5, span);
        const addonStepper = buildStepper(addon.nama, addon.harga, "addon", nama);
        registerStepper(addonStepper);
        syncStepperFromCart(addonStepper);
        row.append(infoDiv, addonStepper);
        block.appendChild(row);
      });
      body.appendChild(block);
    }

    detailView.append(top, body);
    detailView.hidden = false;
    document.body.style.overflow = "hidden";
    detailView.scrollTop = 0;
  }

  function syncStepperFromCart(el) {
    const key = el.dataset.key;
    const qty = cart.has(key) ? cart.get(key).qty : 0;
    el.querySelector(".qty-value").textContent = String(qty);
    el.classList.toggle("is-zero", qty === 0);
  }

  function closeDetail() {
    detailView.hidden = true;
    document.body.style.overflow = "";
    // bersihkan registry milik detail agar tidak menumpuk (kartu tetap terdaftar)
    stepperRegistry.forEach((set, key) => {
      set.forEach((el) => {
        if (!document.body.contains(el)) set.delete(el);
      });
    });
  }

  /* ---------------- CART BAR ---------------- */
  const cartBar = document.getElementById("cartBar");
  const cartBarCount = document.getElementById("cartBarCount");
  const cartBarTotal = document.getElementById("cartBarTotal");
  const cartBarBtn = document.getElementById("cartBarBtn");

  function renderCartBar() {
    let totalQty = 0;
    let totalHarga = 0;
    cart.forEach((item) => {
      totalQty += item.qty;
      totalHarga += item.qty * item.harga;
    });
    if (totalQty === 0) {
      cartBar.hidden = true;
      return;
    }
    cartBar.hidden = false;
    cartBarCount.textContent = `${totalQty} item di keranjang`;
    cartBarTotal.textContent = rupiah(totalHarga);
  }

  /* ---------------- CART MODAL ---------------- */
  const cartModal = document.getElementById("cartModal");
  const cartModalBody = document.getElementById("cartModalBody");
  const cartModalTotal = document.getElementById("cartModalTotal");

  function openCartModal() {
    renderCartModal();
    cartModal.hidden = false;
  }
  function closeCartModal() {
    cartModal.hidden = true;
  }

  function renderCartModal() {
    cartModalBody.innerHTML = "";
    if (cart.size === 0) {
      const p = document.createElement("p");
      p.className = "cart-empty";
      p.textContent = "Keranjang masih kosong. Yuk pilih menu dulu 🍚";
      cartModalBody.appendChild(p);
      cartModalTotal.textContent = rupiah(0);
      return;
    }
    let total = 0;
    cart.forEach((item, key) => {
      total += item.qty * item.harga;
      const line = document.createElement("div");
      line.className = "cart-line";

      const infoDiv = document.createElement("div");
      infoDiv.className = "cart-line-info";
      const h5 = document.createElement("h5");
      h5.textContent = item.tipe === "addon" ? `${item.nama} (${item.parentNama})` : item.nama;
      const span = document.createElement("span");
      span.textContent = `${item.qty} × ${rupiah(item.harga)}`;
      infoDiv.append(h5, span);

      const lineStepper = buildStepper(item.nama, item.harga, item.tipe, item.parentNama);
      registerStepper(lineStepper);
      lineStepper.querySelector(".qty-value").textContent = String(item.qty);
      lineStepper.classList.toggle("is-zero", item.qty === 0);
      // saat qty berubah di modal, render ulang modal juga
      lineStepper.addEventListener("click", () => {
        setTimeout(renderCartModal, 0);
      });

      line.append(infoDiv, lineStepper);
      cartModalBody.appendChild(line);
    });
    cartModalTotal.textContent = rupiah(total);
  }

  /* ---------------- NAV TOGGLE (mobile) ---------------- */
  function initNav() {
    const toggle = document.getElementById("navToggle");
    const links = document.getElementById("navLinks");
    if (!toggle || !links) return;
    toggle.addEventListener("click", () => links.classList.toggle("is-open"));
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => links.classList.remove("is-open"))
    );
  }

  /* ---------------- INIT ---------------- */
  function init() {
    initNav();

    // pasang stepper di semua kartu + registrasi
    document.querySelectorAll(".pilihanpaket").forEach((card) => {
      const btn = card.querySelector(".btn-cart");
      if (!btn) return;
      const nama = btn.dataset.nama;
      const harga = Number(btn.dataset.harga);
      const img = card.querySelector("img.skill-icon");
      const imgSrc = img ? img.getAttribute("src") : "";

      const stepper = buildStepper(nama, harga, "menu");
      registerStepper(stepper);
      btn.replaceWith(stepper);

      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "button");
      const openThis = () => openDetail({ nama, harga, imgSrc });
      card.addEventListener("click", (e) => {
        if (e.target.closest(".qty-stepper")) return;
        openThis();
      });
      card.addEventListener("keydown", (e) => {
        if ((e.key === "Enter" || e.key === " ") && !e.target.closest(".qty-stepper")) {
          e.preventDefault();
          openThis();
        }
      });
    });

    cartBarBtn.addEventListener("click", openCartModal);
    document.getElementById("cartClose").addEventListener("click", closeCartModal);
    cartModal.addEventListener("click", (e) => {
      if (e.target === cartModal) closeCartModal();
    });
    document.getElementById("cartCheckout").addEventListener("click", () => {
      closeCartModal();
      if (!detailView.hidden) closeDetail();
      const target = document.getElementById("Pembayaran");
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (!cartModal.hidden) closeCartModal();
        else if (!detailView.hidden) closeDetail();
      }
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();