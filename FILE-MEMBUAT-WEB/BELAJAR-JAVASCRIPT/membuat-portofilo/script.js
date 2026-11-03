// Toggle menu navigasi di layar kecil
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
});

// Tutup menu saat salah satu link diklik (khusus mobile)
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Highlight menu aktif sesuai posisi scroll
const navAnchors = document.querySelectorAll('[data-nav]');
const trackedSections = ['tentang', 'skill', 'proyek', 'jasa', 'kontak']
    .map(id => document.getElementById(id))
    .filter(Boolean);

function updateActiveNav() {
    let currentId = trackedSections[0]?.id;
    const scrollPos = window.scrollY + 120;
    trackedSections.forEach(section => {
        if (section.offsetTop <= scrollPos) currentId = section.id;
    });
    navAnchors.forEach(a => {
        a.classList.toggle('active-link', a.getAttribute('href') === `#${currentId}`);
    });
}
window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();

// ---------- Efek mengetik otomatis (Typed.js) ----------
// Menggantikan efek ketik manual lama. Muncul otomatis begitu halaman dibuka.
if (window.Typed) {
    new Typed('#typedLine', {
        strings: ['whoami --skill=frontend,backend,database'],
        typeSpeed: 55,
        startDelay: 300,
        showCursor: true,
        cursorChar: '▍',
        loop: false
    });
}

// Tahun otomatis di footer
document.getElementById('year').textContent = new Date().getFullYear();

// ---------- AOS: efek muncul halus saat discroll ----------
if (window.AOS) {
    AOS.init({
        duration: 700,
        easing: 'ease-out-cubic',
        once: true,
        offset: 60
    });
}

// Tracking mata robot mengikuti kursor (dipakai jika ada elemen .bot-eye, mis. fallback SVG)
const eye_elements = document.querySelectorAll(".bot-eye");

window.addEventListener("mousemove", (event) => {
    for (let i = 0; i < eye_elements.length; i++) {
        const eye = eye_elements[i];
        const rect = eye.getBoundingClientRect();
        const eye_center_x = rect.left + rect.width / 2;
        const eye_center_y = rect.top + rect.height / 2;
        const delta_x = event.clientX - eye_center_x;
        const delta_y = event.clientY - eye_center_y;
        const angle = Math.atan2(delta_y, delta_x);
        const max_distance = 1.8;
        const move_x = Math.cos(angle) * max_distance;
        const move_y = Math.sin(angle) * max_distance;
        eye.style.transform = `translate(${move_x}px, ${move_y}px)`;
    }
});

// ---------- Filter proyek ----------
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const emptyHint = document.getElementById('emptyHint');
const projectStatus = document.getElementById('projectStatus');
const skillFilterLinks = document.querySelectorAll('[data-skill-filter]');
const filterLabels = {
    all: 'semua proyek',
    frontend: 'proyek Front End',
    backend: 'proyek Back End',
};

function applyProjectFilter(filter) {
    let visibleCount = 0;

    filterButtons.forEach(button => {
        const isActive = button.dataset.filter === filter;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
    });

    projectCards.forEach(card => {
        const match = filter === 'all' || card.dataset.cat === filter;
        card.hidden = !match;
        if (match) visibleCount++;
    });

    emptyHint.hidden = visibleCount !== 0;
    projectStatus.textContent = `Menampilkan ${filterLabels[filter]} (${visibleCount})`;
}

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => applyProjectFilter(btn.dataset.filter));
});

skillFilterLinks.forEach(link => {
    link.addEventListener('click', () => applyProjectFilter(link.dataset.skillFilter));
});

applyProjectFilter('all');

// ---------- Tombol kembali ke atas ----------
const toTop = document.getElementById('toTop');
window.addEventListener('scroll', () => {
    toTop.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });
toTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
fetch('./models/humanoid_robot_ai.glb')
    .then(response => {
        if (!response.ok) throw new Error(`HTTP Status: ${response.status}`);
        return response.arrayBuffer();
    })
    .then(buffer => {
        const loader = new GLTFLoader();
        loader.parse(buffer, '', (gltf) => {
            robotMesh = gltf.scene;
            // ... persiapkan scene & scale ...
            scene.add(robotMesh);
        }, (err) => console.error('Parsing error:', err));
    })
    .catch(err => console.error('Fetch error:', err));