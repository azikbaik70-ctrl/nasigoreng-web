function prosesLogin() {
    const inputUSER = document.getElementById("usernameInput").value;
    const inputPASS = document.getElementById("passwordInput").value;
    const pesanEROR = document.getElementById("pesanEror");

    // Mengambil data variabel valid yang ada di dalam file username.js
    if (inputUSER === dataUsernameVALID && inputPASS === dataPasswordValid) {
        // Sembunyikan form login total
        document.getElementById("loginContainer").style.display = "none";
        
        // Tampilkan kuis dengan layout grid yang rapi
        document.getElementById("quizContainer").style.display = "grid";
        
        // Jalankan kuis pertama kali (fungsi ini ada di script.js)
        tampilkanKuis();
    } else {
        // Tampilkan pesan error jika salah
        pesanEROR.innerText = "Username Atau Password Salah! silahkan coba lagi";
        pesanEROR.style.display = "block";
    }
}