// Simple client-side "login" simulator (for learning only)
// IMPORTANT: this is not secure for real auth. Real login harus pakai server (PHP, database)

const form = document.getElementById('loginForm');
const msg = document.getElementById('message');

// contoh akun latihan (di JS hanya untuk demo)
const demoUsers = [
  {user: 'azik', pass: 'rahasia123', name: 'Azik'},
  {user: 'guest', pass: '1234', name: 'Tamu'}
];

form.addEventListener('submit', e => {
  e.preventDefault();
  msg.textContent = '';
  const u = document.getElementById('username').value.trim();
  const p = document.getElementById('password').value;

  if(!u || !p){
    msg.style.color = '#ffb4b4';
    msg.textContent = 'Isi username dan password dulu ya.';
    return;
  }

  // cari user di demoUsers
  const found = demoUsers.find(x => x.user === u && x.pass === p);
  if(found){
    // sukses -> animasi / pindah halaman simulasi
    msg.style.color = '#bbf7d0';
    msg.textContent = `Selamat datang, ${found.name}! Memasuki Pintu Planet...`;
    // contoh efek: delay lalu redirect ke halaman "dashboard" (simulasi)
    setTimeout(() => {
      document.body.innerHTML = `<div style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:linear-gradient(180deg,#021024,#04203a);color:#e6fff9"><h2>Dashboard Planet — Halo ${found.name} 👋</h2></div>`;
    }, 900);
  } else {
    msg.style.color = '#ffd1d1';
    msg.textContent = 'Username atau password salah. Coba lagi.';
  }
});