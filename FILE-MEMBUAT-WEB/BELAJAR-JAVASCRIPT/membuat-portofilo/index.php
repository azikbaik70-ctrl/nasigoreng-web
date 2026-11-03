<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aziq &mdash; Web Developer Portofolio</title>
    <meta name="description" content="Portofolio Abdurraziq Hanan (Aziq) — Junior Web Developer. Jasa pembuatan website Front End, Back End PHP, dan database.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

    <!-- AOS (Animate On Scroll) -->
    <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css">

    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header class="navbar">
        <div class="nav-inner">
            <a href="#top" class="logo">aziq<span class="dot">.</span>dev</a>
            <button class="nav-toggle" id="navToggle" aria-label="Buka menu">☰</button>
            <nav class="nav-links" id="navLinks">
                <a href="#tentang" data-nav>Tentang</a>
                <a href="#skill" data-nav>Skill</a>
                <a href="#proyek" data-nav>Proyek</a>
                <a href="#jasa" data-nav>Jasa</a>
                <a href="#kontak" class="nav-cta" data-nav>Kontak</a>
            </nav>
        </div>
    </header>

    <main id="top">
        <section class="hero" data-aos="fade-up">
            <div class="hero-text">
                <p class="eyebrow">Halo, Perkenalkan</p>
                <h1>Abdurraziq Hanan</h1>
                <p class="role">Junior Web Developer &mdash; Front End &amp; Back End</p>
                <p class="hero-desc">
                    Saya membuat website mulai dari landing page, dashboard interaktif,
                    sampai aplikasi sederhana dengan database. Terbuka untuk jasa pembuatan
                    website custom sesuai kebutuhan kamu.
                </p>
                <div class="hero-buttons">
                    <a href="#proyek" class="btn btn-primary">Lihat Proyek</a>
                    <a href="#kontak" class="btn btn-outline">Pesan Jasa</a>
                </div>
            </div>

            <div class="terminal" aria-hidden="true">
                <div class="terminal-bar">
                    <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
                    <span class="terminal-title">aziq@portofolio: ~</span>
                </div>

                <div class="terminal-body">
                    <p><span class="prompt">$</span> <span id="typedLine"></span></p>
                    <p class="dim">// front end · back end · database</p>
                </div>
            </div>
        </section>

        <section class="biodata" id="tentang" data-aos="fade-up">
            <div class="bio-grid">
                <div class="bio-info">
                    <span class="label">Nama Lengkap</span>
                    <p class="value">Abdurraziq Hanan</p>
                </div>
                <div class="bio-info">
                    <span class="label">Umur</span>
                    <p class="value">13</p>
                </div>
                <div class="bio-info">
                    <span class="label">Fokus</span>
                    <p class="value">Web Development</p>
                </div>
            </div>

            <!-- Kontainer Robot 3D -->
            <div class="avatar-bot" id="robot-container" aria-hidden="true"></div>
        </section>

        <section class="section" id="skill" data-aos="fade-up">
            <div class="section-head">
                <p class="eyebrow">Kemampuan</p>
                <h2>Skill yang Saya Kuasai</h2>
                <p class="section-sub">Klik tombol di bawah setiap kartu untuk langsung melihat proyek dari kategori skill tersebut.</p>
            </div>

            <div class="skill-grid">
                <div class="skill-card" data-aos="fade-up" data-aos-delay="0">
                    <h3>Front End</h3>
                    <div class="tags">
                        <div class="tag-item">
                            <img src="img/images.html.jpg" class="skill-icon" alt="HTML">
                            <span>HTML</span>
                        </div>
                        <div class="tag-item">
                            <img src="img/images.css1.jpg" class="skill-icon" alt="CSS">
                            <span>CSS</span>
                        </div>
                        <div class="tag-item">
                            <img src="img/images.js1.jpg" class="skill-icon" alt="JavaScript">
                            <span>JavaScript</span>
                        </div>
                    </div>
                    <p>
                        Sudah membuat berbagai proyek interaktif contohnya seperti Dashboard Cuaca,
                        Pomodoro Timer, Kalkulator, Deteksi Gambar, To-Do List, dan Quiz dengan Timer.
                    </p>
                    <div class="skill-card-footer">
                        <div class="skill-bar"><span style="width: 80%"></span></div>
                        <a href="#proyek" class="skill-link" data-skill-filter="frontend">Lihat proyek Front End</a>
                    </div>
                </div>

                <div class="skill-card" data-aos="fade-up" data-aos-delay="100">
                    <h3>Back End</h3>
                    <div class="tags">
                       <div class="tag-item">
                        <img src="img/images.php.jpg" class="skill-icon" alt="PHP">
                        <span>PHP</span>
                       </div>
                       <div class="tag-item">
                        <img src="img/images.mysq.jpg" class="skill-icon" alt="MySQL">
                        <span>MySQL</span>
                       </div>
                    </div>
                    <p>
                        Membuat sistem sederhana seperti form kontak yang tersimpan ke database,
                        membuat sistem login &amp; registrasi, CRUD data (Create, Read, Update, Delete),
                        dan buku tamu (guestbook) berbasis PHP.
                    </p>
                    <div class="skill-card-footer">
                        <div class="skill-bar"><span style="width: 60%"></span></div>
                        <a href="#proyek" class="skill-link" data-skill-filter="backend">Lihat proyek Back End</a>
                    </div>
                </div>

                <div class="skill-card" data-aos="fade-up" data-aos-delay="200">
                    <h3>DevOps &amp; CyberSecurity</h3>
                    <div class="tags">
                        <span>Web Hardening</span><span>Penetration Testing</span><span>Secure Hosting</span>
                    </div>
                    <p>
                        Memastikan Website aman dari serangan hacker dengan uji kerentanan (Nmap &amp; Metasploit),
                        pengamanan enkripsi database agar data tidak bocor, serta konfigurasi hosting dan SSL yang aman
                        untuk deployment website.
                    </p>
                    <div class="skill-card-footer">
                        <div class="skill-bar"><span style="width: 30%"></span></div>
                        <span class="skill-note">Masih terus dikembangkan</span>
                    </div>
                </div>
            </div>
        </section>

        <section class="section alt" id="proyek" data-aos="fade-up">
            <div class="section-head">
                <p class="eyebrow">Portofolio</p>
                <h2>Proyek yang Sudah Dibuat</h2>
            </div>

            <div class="project-toolbar">
                <div class="project-summary">
                    <span class="label">Project Explorer</span>
                    <h3>Pilih jenis proyek yang ingin dilihat</h3>
                    <p>Filter karya berdasarkan kategori Front End atau Back End.</p>
                </div>
                <p class="project-status" id="projectStatus" aria-live="polite">Menampilkan semua proyek (7)</p>
            </div>

            <div class="filter-bar" id="filterBar">
                <button class="filter-btn active" type="button" data-filter="all" aria-pressed="true">Semua Proyek</button>
                <button class="filter-btn" type="button" data-filter="frontend" aria-pressed="false">Front End</button>
                <button class="filter-btn" type="button" data-filter="backend" aria-pressed="false">Back End</button>
            </div>

            <div class="project-grid">
                <article class="project-card" data-cat="frontend">
                    <div class="project-meta">
                        <div class="project-thumb">🌤️</div>
                        <span class="project-type frontend">Front End</span>
                    </div>
                    <h3>Dashboard Cuaca</h3>
                    <p class="project-desc">Menampilkan informasi cuaca real-time menggunakan JavaScript dan API.</p>
                    <div class="project-links">
                        <a href="#">Demo</a><a href="#">Source Code</a>
                    </div>
                </article>

                <article class="project-card" data-cat="frontend">
                    <div class="project-meta">
                        <div class="project-thumb">⏱️</div>
                        <span class="project-type frontend">Front End</span>
                    </div>
                    <h3>Pomodoro Timer</h3>
                    <p class="project-desc">Aplikasi manajemen waktu dengan sesi fokus dan istirahat otomatis.</p>
                    <div class="project-links">
                        <a href="#">Demo</a><a href="#">Source Code</a>
                    </div>
                </article>

                <article class="project-card" data-cat="frontend">
                    <div class="project-meta">
                        <div class="project-thumb">🖼️</div>
                        <span class="project-type frontend">Front End</span>
                    </div>
                    <h3>Deteksi Gambar</h3>
                    <p class="project-desc">Proyek eksperimen deteksi objek dengan menggunakan JavaScript.</p>
                    <div class="project-links">
                        <a href="#">Demo</a><a href="#">Source Code</a>
                    </div>
                </article>

                <article class="project-card" data-cat="frontend">
                    <div class="project-meta">
                        <div class="project-thumb">✅</div>
                        <span class="project-type frontend">Front End</span>
                    </div>
                    <h3>To-Do List</h3>
                    <p class="project-desc">Aplikasi pencatat tugas dengan fitur tambah, edit, dan hapus data.</p>
                    <div class="project-links">
                        <a href="#">Demo</a><a href="#">Source Code</a>
                    </div>
                </article>

                <article class="project-card" data-cat="frontend">
                    <div class="project-meta">
                        <div class="project-thumb">🧠</div>
                        <span class="project-type frontend">Front End</span>
                    </div>
                    <h3>Quiz Dengan Timer</h3>
                    <p class="project-desc">Kuis interaktif dengan sistem waktu mundur dan skor otomatis.</p>
                    <div class="project-links">
                        <a href="#">Demo</a><a href="#">Source Code</a>
                    </div>
                </article>

                <article class="project-card" data-cat="backend">
                    <div class="project-meta">
                        <div class="project-thumb">🔒</div>
                        <span class="project-type backend">Back End</span>
                    </div>
                    <h3>Quiz dengan Halaman Login</h3>
                    <p class="project-desc">Kuis dengan sistem waktu mundur dan halaman login menggunakan PHP beserta password yang sudah di-hash.</p>
                    <div class="project-links">
                        <a href="#">Demo</a><a href="#">Source Code</a>
                    </div>
                </article>

                <article class="project-card" data-cat="frontend">
                    <div class="project-meta">
                        <div class="project-thumb">🧮</div>
                        <span class="project-type frontend">Front End</span>
                    </div>
                    <h3>Kalkulator</h3>
                    <p class="project-desc">Membuat project kalkulator dengan fitur tema gelap/terang ketika tombol diklik.</p>
                    <div class="project-links">
                        <a href="https://equadorhola-droid.github.io/kalkulator-bikinan-abdurraziq/" target="_blank" rel="noopener">Demo</a>
                    </div>
                </article>
            </div>
            <p class="hint" id="emptyHint" hidden>Belum ada proyek di kategori ini.</p>
        </section>

        <section class="section" id="jasa" data-aos="fade-up">
            <div class="section-head">
                <p class="eyebrow">Layanan</p>
                <h2>Jasa yang Saya Tawarkan</h2>
            </div>
            <div class="service-grid">
                <div class="service-card" data-aos="fade-up" data-aos-delay="0">
                    <h3>Landing Page</h3>
                    <p>Website satu halaman promosi produk, profil, atau acara.</p>
                </div>
                <div class="service-card" data-aos="fade-up" data-aos-delay="100">
                    <h3>Website Personal</h3>
                    <p>Website personal untuk menampilkan karya, CV, dan informasi kontak.</p>
                </div>
                <div class="service-card" data-aos="fade-up" data-aos-delay="200">
                    <h3>Aplikasi Web Sederhana</h3>
                    <p>Sistem dengan database seperti form pendaftaran, to-do-list, atau CRUD sederhana.</p>
                </div>
            </div>
        </section>

        <section class="section alt" id="kontak" data-aos="fade-up">
            <div class="section-head">
                <p class="eyebrow">Kontak</p>
                <h2>Tertarik Pakai Jasa Saya?</h2>
                <p class="contact-desc">Hubungi saya untuk diskusi tentang kebutuhan kamu.</p>
            </div>
            <div class="contact-buttons">
                <a href="https://wa.me/6285795337192" class="btn btn-primary" target="_blank" rel="noopener">WhatsApp</a>
                <a href="mailto:email@azikbaik70.com" class="btn btn-outline">Email</a>
            </div>
        </section>
    </main>

    <button class="to-top" id="toTop" aria-label="Kembali ke atas">↑</button>

    <footer class="footer">
        <p>&copy; <span id="year"></span> Abdurraziq Hanan. Dibuat dengan HTML, CSS &amp; JavaScript.</p>
    </footer>

    <!-- Typed.js -->
    <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>
    <!-- AOS -->
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
   <!-- Import Map dengan versi Three.js yang selaras (r160) -->
    <!-- Mengunci versi ke r146 agar mendukung format material robot lama -->
    <!-- 1. Muat AOS JS Lebih Dulu -->
    <script src="https://unpkg.com"></script>
    <script>
        // Jalankan AOS sesegera mungkin agar semua card muncul & beranimasi
        AOS.init({
            duration: 800,
            once: true
        });
    </script>

    <!-- 2. Muat Pustaka 3D Robot Paling Terakhir -->
    <script src="https://cloudflare.com"></script>
    <script src="https://jsdelivr.net"></script>
    
    <!-- 3. File JS utama Anda (yang berisi kode "Berhasil memuat model robot!") -->
    <script src="script.js"></script> 
</body>
</html>


<script type="importmap">
{
    "imports": {
        "three": "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js",
        "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/"
    }
}
</script>

<script type="module">
    import * as THREE from 'three';
    import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

    document.addEventListener('DOMContentLoaded', () => {
        const container = document.getElementById('robot-container');
        if (!container) return;

        let width = container.clientWidth || 300;
        let height = container.clientHeight || 300;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
        camera.position.set(0, 0, 4.8);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Mengunci ketajaman layar agar HD tapi tetap ringan

// Tambahkan 2 baris baru di bawah ini untuk mengaktifkan warna HD realistis
renderer.toneMapping = THREE.ACESFilmicToneMapping; // Membuat efek bayangan & pantulan cahaya lebih sinematik
renderer.outputColorSpace = THREE.SRGBColorSpace;   // Memaksa warna tekstur robot keluar dengan kualitas asli

container.appendChild(renderer.domElement)
        window.addEventListener('resize', () => {
            width = container.clientWidth;
            height = container.clientHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        });

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8); 
         scene.add(ambientLight);


        const directionalLight = new THREE.DirectionalLight(0xffffff, 3.5);
       directionalLight.position.set(5, 8, 5);
       scene.add(directionalLight);

        const backLight = new THREE.DirectionalLight(0xffffff, 2.0);
      backLight.position.set(-5, 3, -5);
      scene.add(backLight);


        // 1. Inisialisasi loader di sini
        const loader = new GLTFLoader();
        let robotMesh;

        // 2. Memuat model GLB
        loader.load(
            './models/humanoid_robot_ai.glb',
            function (gltf) {
                robotMesh = gltf.scene;

                const box = new THREE.Box3().setFromObject(robotMesh);
                const center = box.getCenter(new THREE.Vector3());
                robotMesh.position.x += (robotMesh.position.x - center.x);
                robotMesh.position.y += (robotMesh.position.y - center.y);
                robotMesh.position.z += (robotMesh.position.z - center.z);

               robotMesh.scale.set(2.1, 2.1, 2.1);

                scene.add(robotMesh);
                console.log("Berhasil memuat model robot!");
            },
            undefined,
            function (error) {
                console.error('Terjadi kesalahan muat model 3D:', error);
            }
        );

        let baseRotation = 0;
        let lastScrollY = window.scrollY;

        function animate() {
            requestAnimationFrame(animate);

            if (robotMesh) {
                baseRotation += 0.012;
                const scrollDelta = window.scrollY - lastScrollY;
                lastScrollY = window.scrollY;
                baseRotation += scrollDelta * 0.004;

                robotMesh.rotation.y = baseRotation;
                robotMesh.rotation.x = Math.sin(Date.now() * 0.0009) * 0.12;
            }

            renderer.render(scene, camera);
        }
        animate();
    });
</script>
</body>
</html>