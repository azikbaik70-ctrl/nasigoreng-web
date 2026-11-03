let indeksSekarang = 0;
let waktuSisa = 30;
let hitungmundu;

// Fungsi Mengatur Timer Hitung Mundur
function jalankanTimer() {
    clearInterval(hitungmundu); 
    waktuSisa = 30; 
    const timer10detik = document.getElementById("Timer");
    timer10detik.textContent = `Time: ${waktuSisa} Second`;
    timer10detik.style.color = ""; 
    
    hitungmundu = setInterval(function(){
        waktuSisa--;
        timer10detik.textContent = `Time ${waktuSisa} Second`;
        
        if (waktuSisa <= 10) {
            timer10detik.style.color = "red";
        }
        
        if (waktuSisa <= 0) {
            clearInterval(hitungmundu);
            timer10detik.textContent = "habis!";
            alert("Waktu anda sudah habis");
            
            const opsiTombol = document.getElementById("opsiJawaban").getElementsByTagName("button");
            for (let i = 0; i < opsiTombol.length; i++) {
                opsiTombol[i].disabled = true;
            }
            document.getElementById("Tombol-lanjut").style.display = "block";
        }
    }, 1000);
}

// Fungsi Menampilkan Soal di Web
function tampilkanKuis() {
    document.getElementById("Tombol-lanjut").style.display = "none";
    const kuis = daftarkuis[indeksSekarang]; // Mengambil array dari username.js
    document.getElementById("textPertanyaan").innerText = kuis.pertanyaan;
    document.getElementById("infohalaman").innerText = `quest ${indeksSekarang + 1} or ${daftarkuis.length}`;
    
    const inputJawaban = document.getElementById("todoInput");
    inputJawaban.value = "";
    inputJawaban.style.color = "black";
    
    const opsiJawabanContainer = document.getElementById("opsiJawaban");
    opsiJawabanContainer.innerHTML = "";
    kuis.opsi.forEach(opsi => {
        opsiJawabanContainer.innerHTML += `<button class="btn-opsi animasi-tombol" onclick="Pilihjawaban('${opsi}')">${opsi}</button>`;
    });
    
    if (indeksSekarang === 0) {
        document.getElementById("btnPrev").style.display = "none";
    } else {
        document.getElementById("btnPrev").style.display = "block";
    }
    jalankanTimer();
}

// Fungsi Ketika Jawaban Diklik
function Pilihjawaban(pilihan) {
    const kuisAktif = daftarkuis[indeksSekarang];
    clearInterval(hitungmundu);
    
    const opsiTombol = document.getElementById("opsiJawaban").getElementsByTagName("button");
    for (let i = 0; i < opsiTombol.length; i++) {
        opsiTombol[i].disabled = true;
    }
    
    const inputJawaban = document.getElementById("todoInput");
    const kotakpenjelasan = document.getElementById("kotakpenjelasan");

    if (pilihan.toLowerCase() === kuisAktif.jawaban.toLowerCase()) {
        inputJawaban.value = "Jawaban benar";
        inputJawaban.style.color = "green";
    } else {
        inputJawaban.value = "Jawaban salaah!!";
        inputJawaban.style.color = "red";
        
        kotakpenjelasan.innerText = "Penjelasan " + kuisAktif.Penjelasan;
        kotakpenjelasan.style.display = "block";
    }
    document.getElementById("Tombol-lanjut").style.display = "block";
}

// Navigasi Tombol Soal
function keHalamanSelanjutnya() {
    if (indeksSekarang < daftarkuis.length - 1) {
        indeksSekarang++;
        document.getElementById("kotakpenjelasan").style.display = "none";
        tampilkanKuis(); 
    } else {
        clearInterval(hitungmundu);
        alert("Selamat quiz telah selesai!!");
    }
}

function keHalamanSebelumnya() {
    if (indeksSekarang > 0) {
        indeksSekarang--;
        tampilkanKuis();
    }
}