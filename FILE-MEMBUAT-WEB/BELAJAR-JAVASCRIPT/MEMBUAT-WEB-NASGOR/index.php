<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Aziq — Kang Nasgor</title>
  <meta name="description" content="Website nasi goreng kang Abdurraziq Hanan (Aziq) - restoran elite. Memiliki berbagai menu dan makanan yang enak">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="navbar">
    <div class="nav-inner">
      <a href="#top" class="logo">nasigoreng<span class="dot">.</span>aziq</a>
      <button class="nav-toggle" id="navToggle" aria-label="Buka menu">☰</button>
      <nav class="nav-links" id="navLinks">
        <a href="#Paketmurah" data-nav>Menu</a>
        <a href="#Paketmurah" data-nav>Paket-Murah</a>
        <a href="#Paketdiskon" data-nav>Paket-Diskon</a>
        <a href="#Paketspesial" data-nav>Paket-Spesial</a>
        <a href="#Paketmedium" data-nav>Paket-Medium</a>
        <a href="#Paketmewah" data-nav>Paket-Mewah</a>
        <a href="#Jajanan" data-nav>Jajanan / makanan ringan</a>
        <a href="#Menutambahan" data-nav>Menu Tambahan</a>
        <a href="#minuman" data-nav>Minuman</a>
        <a href="#Pembayaran" class="nav-cta" data-nav>Pembayaran</a>
      </nav>
    </div>
  </header>

  <main id="top">
    <section class="hero">
      <p class="eyebrow">Selamat datang di website</p>
      <h1>Nasigoreng Mamang Aziq</h1>
      <p class="role">Nasi goreng terkenal se Indonesia — menjadi nasi goreng favorit di kalangan remaja.</p>
      <p class="hero-desc">
        Nasi goreng buatan Mamang Aziq sangat spesial dan mempunyai banyak varian menu yang jarang ditemukan di restoran mana pun.
        Nasi goreng Mamang Aziq dibuat menggunakan bumbu rahasia yang membuat Anda ketagihan dan terasa seperti menikmati makanan dari surga.
        Silakan jelajahi menu kami dan temukan kelezatan terbaik yang ramah di kantong Anda. 💳✨
      </p>
      <div class="den-buttons">
        <a href="#Paketmurah" class="btn btn-primary">Lihat Menu</a>
        <a href="#Pembayaran" class="btn btn-inline">Metode Pembayaran</a>
      </div>
    </section>

    <section class="section" id="Paketmurah">
      <div class="section-head">
        <p class="eyebrow">Menu</p>
        <h2>Paket Murah</h2>
      </div>
      <div class="paket">
        <div class="pilihanpaket">
          <span class="click-hint">Lihat detail →</span>
          <h3>Nasi Goreng Biasa</h3>
          <div class="tags">
            <div class="tag-item">
              <img src="img/images.nasigoreng.jpg" class="skill-icon" alt="Nasi Goreng Biasa">
              <span>Nasi Goreng Biasa</span>
            </div>
          </div>
          <p class="harga">Rp13.000</p>
          <button class="btn-cart" data-nama="Nasi Goreng Biasa" data-harga="13000">Tambah ke Keranjang</button>
        </div>
      </div>
    </section>

    <section class="section" id="Paketdiskon">
      <div class="section-head">
        <p class="eyebrow">Menu</p>
        <h2>Paket Diskon</h2>
      </div>
      <div class="paket">
        <div class="pilihanpaket">
          <span class="click-hint">Lihat detail →</span>
          <h3>Nasi Goreng satu paket</h3>
          <div class="tags">
            <div class="tag-item">
              <img src="img/images.paketnasgormurah.jpg" class="skill-icon" alt="Nasi Goreng sepaket">
              <span>Nasi goreng sepaket</span>
            </div>
          </div>
          <p class="harga">Rp20.000</p>
          <button class="btn-cart" data-nama="Nasi Goreng sepaket" data-harga="20000">Tambah ke Keranjang</button>
        </div>

        <div class="pilihanpaket">
          <span class="click-hint">Lihat detail →</span>
          <h3>Nasi Goreng Telur</h3>
          <div class="tags">
            <div class="tag-item">
              <img src="img/images.nasgortelor.jpg" class="skill-icon" alt="Nasi Goreng Telur">
              <span>Nasi goreng Telur</span>
            </div>
          </div>
          <p class="harga">Rp15.000</p>
          <button class="btn-cart" data-nama="Nasi Goreng Telur" data-harga="15000">Tambah ke Keranjang</button>
        </div>

        <div class="pilihanpaket">
          <span class="click-hint">Lihat detail →</span>
          <h3>Nasi Goreng Bakso</h3>
          <div class="tags">
            <div class="tag-item">
              <img src="img/images.nasgorbakso.jpg" class="skill-icon" alt="Nasi goreng bakso">
              <span>Nasi goreng bakso</span>
            </div>
          </div>
          <p class="harga">Rp14.000</p>
          <button class="btn-cart" data-nama="Nasi Goreng bakso" data-harga="14000">Tambah ke Keranjang</button>
        </div>

        <div class="pilihanpaket">
          <span class="click-hint">Lihat detail →</span>
          <h3>Nasi Goreng Ayam</h3>
          <div class="tags">
            <div class="tag-item">
              <img src="img/images.nasgorayam.jpg" class="skill-icon" alt="Nasi goreng ayam">
              <span>Nasi goreng ayam</span>
            </div>
          </div>
          <p class="harga">Rp14.000</p>
          <button class="btn-cart" data-nama="Nasi goreng ayam" data-harga="14000">Tambah ke Keranjang</button>
        </div>
      </div>
    </section>

    <section class="section" id="Paketmedium">
      <div class="section-head">
        <p class="eyebrow">Menu</p>
        <h2>Paket Medium</h2>
      </div>
      <div class="paket">
        <div class="pilihanpaket">
          <span class="click-hint">Lihat detail →</span>
          <h3>Nasi Goreng Lobster</h3>
          <div class="tags">
            <div class="tag-item">
              <img src="img/images.nasgorlobster.jpg" class="skill-icon" alt="Nasi Goreng Lobster">
              <span>Nasi Goreng Lobster</span>
            </div>
          </div>
          <p class="harga">Rp45.000</p>
          <button class="btn-cart" data-nama="Nasi Goreng Lobster" data-harga="45000">Tambah ke Keranjang</button>
        </div>

        <div class="pilihanpaket">
          <span class="click-hint">Lihat detail →</span>
          <h3>Nasi Goreng Udang</h3>
          <div class="tags">
            <div class="tag-item">
              <img src="img/images.nasgorudang.jpg" class="skill-icon" alt="Nasi Goreng Udang">
              <span>Nasi Goreng udang</span>
            </div>
          </div>
          <p class="harga">Rp17.000</p>
          <button class="btn-cart" data-nama="Nasi Goreng udang" data-harga="17000">Tambah ke Keranjang</button>
        </div>

        <div class="pilihanpaket">
          <span class="click-hint">Lihat detail →</span>
          <h3>Nasi Goreng Komplit</h3>
          <div class="tags">
            <div class="tag-item">
              <img src="img/images.nasgorkomplit.jpg" class="skill-icon" alt="Nasi goreng komplit">
              <span>Nasi Goreng Komplit</span>
            </div>
          </div>
          <p class="harga">Rp18.000</p>
          <button class="btn-cart" data-nama="Nasi Goreng Komplit" data-harga="18000">Tambah ke Keranjang</button>
        </div>
      </div>
    </section>

    <section class="section" id="Paketspesial">
      <div class="section-head">
        <p class="eyebrow">Menu</p>
        <h2>Paket Spesial</h2>
      </div>
      <div class="paket">
        <div class="pilihanpaket">
          <span class="click-hint">Lihat detail →</span>
          <h3>Paket Spesial</h3>
          <div class="tags">
            <div class="tag-item">
              <img src="img/images.paketnasigoreng.jpg" class="skill-icon" alt="Paket Spesial">
              <span>Paket Spesial</span>
            </div>
          </div>
          <p class="harga">Rp107.000</p>
          <button class="btn-cart" data-nama="Paket Spesial" data-harga="107000">Tambah ke Keranjang</button>
        </div>
      </div>
    </section>

    <section class="section" id="Paketmewah">
      <div class="section-head">
        <p class="eyebrow">Menu</p>
        <h2>Paket Premium</h2>
      </div>
      <div class="paket">
        <div class="pilihanpaket">
          <span class="click-hint">Lihat detail →</span>
          <h3>Nasi Goreng Caviar</h3>
          <div class="tags">
            <div class="tag-item">
              <img src="img/images.nasigorengcaviar.jpg" class="skill-icon" alt="Nasi goreng caviar">
              <span>Nasi goreng caviar</span>
            </div>
          </div>
          <p class="harga">Rp45.000</p>
          <button class="btn-cart" data-nama="Nasi goreng caviar" data-harga="45000">Tambah ke Keranjang</button>
        </div>

        <div class="pilihanpaket">
          <span class="click-hint">Lihat detail →</span>
          <h3>Lobster</h3>
          <div class="tags">
            <div class="tag-item">
              <img src="img/images.lobster.jpg" class="skill-icon" alt="lobster">
              <span>Lobster</span>
            </div>
          </div>
          <p class="harga">Rp110.000</p>
          <button class="btn-cart" data-nama="lobster" data-harga="110000">Tambah ke Keranjang</button>
        </div>

        <div class="pilihanpaket">
          <span class="click-hint">Lihat detail →</span>
          <h3>Burger Wagyubeef</h3>
          <div class="tags">
            <div class="tag-item">
              <img src="img/images.burgerwagyu.jpg" class="skill-icon" alt="burger wagyubeef">
              <span>Burger wagyu beef</span>
            </div>
          </div>
          <p class="harga">Rp98.000</p>
          <button class="btn-cart" data-nama="Burger wagyubeef" data-harga="98000">Tambah ke Keranjang</button>
        </div>

        <div class="pilihanpaket">
          <span class="click-hint">Lihat detail →</span>
          <h3>Oyster</h3>
          <div class="tags">
            <div class="tag-item">
              <img src="img/images.oyster.jpg" class="skill-icon" alt="Oyster">
              <span>Oyster</span>
            </div>
          </div>
          <p class="harga">Rp55.000</p>
          <button class="btn-cart" data-nama="Oyster" data-harga="55000">Tambah ke Keranjang</button>
        </div>

        <div class="pilihanpaket">
          <span class="click-hint">Lihat detail →</span>
          <h3>Wagyu Beef</h3>
          <div class="tags">
            <div class="tag-item">
              <img src="img/images.wagyubeef.jpg" class="skill-icon" alt="Wagyu beef">
              <span>Wagyu beef</span>
            </div>
          </div>
          <p class="harga">Rp120.000</p>
          <button class="btn-cart" data-nama="Wagyu beef" data-harga="120000">Tambah ke Keranjang</button>
        </div>
      </div>
    </section>

    <section class="section" id="Jajanan">
      <div class="section-head">
        <p class="eyebrow">Menu</p>
        <h2>Menu Makanan Ringan</h2>
      </div>
      <div class="paket">
        <div class="pilihanpaket">
          <span class="click-hint">Lihat detail →</span>
          <h3>Soto Ayam Bogor</h3>
          <div class="tags">
            <div class="tag-item">
              <img src="img/images.sotoayam.jpg" class="skill-icon" alt="Soto ayam Bogor">
              <span>Soto ayam</span>
            </div>
          </div>
          <p class="harga">Rp12.000</p>
          <button class="btn-cart" data-nama="Soto ayam" data-harga="12000">Tambah ke Keranjang</button>
        </div>

        <div class="pilihanpaket">
          <span class="click-hint">Lihat detail →</span>
          <h3>Kentang</h3>
          <div class="tags">
            <div class="tag-item">
              <img src="img/images.kentang.jpg" class="skill-icon" alt="Kentang">
              <span>Kentang</span>
            </div>
          </div>
          <p class="harga">Rp8.000</p>
          <button class="btn-cart" data-nama="Kentang" data-harga="8000">Tambah ke Keranjang</button>
        </div>

        <div class="pilihanpaket">
          <span class="click-hint">Lihat detail →</span>
          <h3>Ayam Karage</h3>
          <div class="tags">
            <div class="tag-item">
              <img src="img/images.ayamkarage.jpg" class="skill-icon" alt="Ayam Karage">
              <span>Ayam karage</span>
            </div>
          </div>
          <p class="harga">Rp12.000</p>
          <button class="btn-cart" data-nama="Ayam Karage" data-harga="12000">Tambah ke Keranjang</button>
        </div>

        <div class="pilihanpaket">
          <span class="click-hint">Lihat detail →</span>
          <h3>Ayam Katsu</h3>
          <div class="tags">
            <div class="tag-item">
              <img src="img/images.ayamkatsu.jpg" class="skill-icon" alt="Ayam katsu">
              <span>Ayam katsu</span>
            </div>
          </div>
          <p class="harga">Rp12.000</p>
          <button class="btn-cart" data-nama="Ayam katsu" data-harga="12000">Tambah ke Keranjang</button>
        </div>

        <div class="pilihanpaket">
          <span class="click-hint">Lihat detail →</span>
          <h3>Ayam Teriyaki</h3>
          <div class="tags">
            <div class="tag-item">
              <img src="img/images.ayamteriyaki.jpg" class="skill-icon" alt="Ayam teriyaki">
              <span>Ayam teriyaki</span>
            </div>
          </div>
          <p class="harga">Rp12.000</p>
          <button class="btn-cart" data-nama="Ayam teriyaki" data-harga="12000">Tambah ke Keranjang</button>
        </div>
      </div>
    </section>

    <section class="section" id="Menutambahan">
      <div class="section-head">
        <p class="eyebrow">Menu</p>
        <h2>Menu Tambahan</h2>
      </div>
      <div class="paket">
        <div class="pilihanpaket">
          <span class="click-hint">Lihat detail →</span>
          <h3>Nasi</h3>
          <div class="tags">
            <div class="tag-item">
              <img src="img/images.nasi.jpg" class="skill-icon" alt="Nasi">
              <span>Nasi</span>
            </div>
          </div>
          <p class="harga">Rp4.000</p>
          <button class="btn-cart" data-nama="Nasi" data-harga="4000">Tambah ke Keranjang</button>
        </div>
      </div>
    </section>

    <section class="section" id="minuman">
      <div class="section-head">
        <p class="eyebrow">Menu</p>
        <h2>Minuman</h2>
      </div>
      <div class="paket">
        <div class="pilihanpaket">
          <span class="click-hint">Lihat detail →</span>
          <h3>Matcha</h3>
          <div class="tags">
            <div class="tag-item">
              <img src="img/images.matcha.jpg" class="skill-icon" alt="Matcha">
              <span>Matcha</span>
            </div>
          </div>
          <p class="harga">Rp15.000</p>
          <button class="btn-cart" data-nama="Matcha" data-harga="15000">Tambah ke Keranjang</button>
        </div>

        <div class="pilihanpaket">
          <span class="click-hint">Lihat detail →</span>
          <h3>Thaitea</h3>
          <div class="tags">
            <div class="tag-item">
              <img src="img/images.thaitea.jpg" class="skill-icon" alt="Thaitea">
              <span>Thaitea</span>
            </div>
          </div>
          <p class="harga">Rp8.000</p>
          <button class="btn-cart" data-nama="thaitea" data-harga="8000">Tambah ke Keranjang</button>
        </div>

        <div class="pilihanpaket">
          <span class="click-hint">Lihat detail →</span>
          <h3>Es Teh Manis</h3>
          <div class="tags">
            <div class="tag-item">
              <img src="img/images.estehmanis.jpg" class="skill-icon" alt="Es teh manis">
              <span>Es Teh Manis</span>
            </div>
          </div>
          <p class="harga">Rp5.000</p>
          <button class="btn-cart" data-nama="Es Teh Manis" data-harga="5000">Tambah ke Keranjang</button>
        </div>

        <div class="pilihanpaket">
          <span class="click-hint">Lihat detail →</span>
          <h3>Greentea</h3>
          <div class="tags">
            <div class="tag-item">
              <img src="img/images.greentea.jpg" class="skill-icon" alt="greentea">
              <span>Greentea</span>
            </div>
          </div>
          <p class="harga">Rp7.500</p>
          <button class="btn-cart" data-nama="greentea" data-harga="7500">Tambah ke Keranjang</button>
        </div>

        <div class="pilihanpaket">
          <span class="click-hint">Lihat detail →</span>
          <h3>Es Milo</h3>
          <div class="tags">
            <div class="tag-item">
              <img src="img/images.esmilo.jpg" class="skill-icon" alt="Es Milo">
              <span>Es Milo</span>
            </div>
          </div>
          <p class="harga">Rp8.000</p>
          <button class="btn-cart" data-nama="Milo" data-harga="8000">Tambah ke Keranjang</button>
        </div>

        <div class="pilihanpaket">
          <span class="click-hint">Lihat detail →</span>
          <h3>Es Jeruk</h3>
          <div class="tags">
            <div class="tag-item">
              <img src="img/images.esjeruk.jpg" class="skill-icon" alt="Es Jeruk">
              <span>Es Jeruk</span>
            </div>
          </div>
          <p class="harga">Rp6.000</p>
          <button class="btn-cart" data-nama="Es jeruk" data-harga="6000">Tambah ke Keranjang</button>
        </div>
      </div>
    </section>

    <section class="section" id="Pembayaran">
      <div class="section-head">
        <p class="eyebrow">Checkout</p>
        <h2>Metode Pembayaran</h2>
      </div>
      <div class="bayar-grid">
        <div class="bayar-card">
          <div class="ic">💵</div>
          <h4>Cash / Bayar di Tempat</h4>
          <p>Bayar langsung saat pesanan diambil atau diantar.</p>
        </div>
        <div class="bayar-card">
          <div class="ic">🏦</div>
          <h4>Transfer Bank</h4>
          <p>Transfer ke rekening yang akan dikonfirmasi kasir.</p>
        </div>
        <div class="bayar-card">
          <div class="ic">📱</div>
          <h4>QRIS</h4>
          <p>Scan QRIS di kasir, bisa pakai e-wallet apa saja.</p>
        </div>
      </div>
    </section>
  </main>

  <!-- ===== Tampilan detail 1 menu (muncul saat kartu diklik) ===== -->
  <div class="detail-view" id="detailView" hidden></div>

  <!-- ===== Cart bar nempel di bawah ===== -->
  <div class="cart-bar" id="cartBar" hidden>
    <div class="cart-bar-inner">
      <div class="cart-bar-info">
        <span class="cart-bar-count" id="cartBarCount">0 item di keranjang</span>
        <span class="cart-bar-total" id="cartBarTotal">Rp0</span>
      </div>
      <button class="cart-bar-btn" id="cartBarBtn" type="button">🛒 Lihat Keranjang</button>
    </div>
  </div>

  <!-- ===== Modal keranjang ===== -->
  <div class="cart-modal" id="cartModal" hidden>
    <div class="cart-modal-panel">
      <div class="cart-modal-head">
        <h3>Keranjang Kamu</h3>
        <button class="cart-close" id="cartClose" type="button" aria-label="Tutup keranjang">✕</button>
      </div>
      <div class="cart-modal-body" id="cartModalBody"></div>
      <div class="cart-modal-foot">
        <div class="cart-total-row">
          <span>Total</span>
          <span id="cartModalTotal">Rp0</span>
        </div>
        <button class="btn-checkout" id="cartCheckout" type="button">Lanjut ke Pembayaran</button>
      </div>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>