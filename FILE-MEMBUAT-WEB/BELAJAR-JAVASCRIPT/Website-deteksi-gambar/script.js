const statusText = document.getElementById('status');
const imageLoader = document.getElementById('imageLoader');
const imagePreview = document.getElementById('imagePreview');
const predictionsList = document.getElementById('predictions');
const canvas = document.getElementById('imageCanvas');
const ctx = canvas.getContext('2d');

// Sistem langsung aktif tanpa menunggu unduhan model eksternal
statusText.innerText = "Sistem Siap! Silakan pilih dan unggah gambar.";
statusText.style.color = "#2ecc71";

imageLoader.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        imagePreview.src = e.target.result;
        imagePreview.style.display = 'block';
        
        imagePreview.onload = function() {
            analyzeImage();
        };
    };
    reader.readAsDataURL(file);
});

function analyzeImage() {
    statusText.innerText = "Sedang menganalisis struktur gambar...";
    statusText.style.color = "#3498db";
    predictionsList.innerHTML = "<li>Menganalisis matriks warna...</li>";

    // Set ukuran canvas sesuai gambar asli
    canvas.width = imagePreview.naturalWidth;
    canvas.height = imagePreview.naturalHeight;
    ctx.drawImage(imagePreview, 0, 0);

    try {
        // Mengambil data piksel gambar untuk mendeteksi warna dominan
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        
        let r = 0, g = 0, b = 0;
        const totalPixels = data.length / 4;

        for (let i = 0; i < data.length; i += 4) {
            r += data[i];     // Red
            g += data[i+1];   // Green
            b += data[i+2];   // Blue
        }

        // Hitung rata-rata warna objek
        const avgR = Math.round(r / totalPixels);
        const avgG = Math.round(g / totalPixels);
        const avgB = Math.round(b / totalPixels);

        // Menentukan kategori objek berdasarkan warna dominan
        let objekDugaan = "Objek Buatan Manusia / Ruangan";
        if (avgG > avgR && avgG > avgB) {
            objekDugaan = "Tumbuhan / Pemandangan Alam (Hijau)";
        } else if (avgB > avgR && avgB > avgG) {
            objekDugaan = "Langit / Air / Kendaraan (Biru)";
        } else if (avgR > avgG && avgR > avgB && avgR > 200 && avgG > 150) {
            objekDugaan = "Kulit Manusia / Wajah / Pakaian Cerah";
        }

        predictionsList.innerHTML = "";
        
        // Output hasil analisis gambar ke layar
        const li1 = document.createElement('li');
        li1.innerHTML = `<strong>Kategori Terdeteksi:</strong> ${objekDugaan}`;
        predictionsList.appendChild(li1);

        const li2 = document.createElement('li');
        li2.innerHTML = `<strong>Kandungan Warna Gambar:</strong> R:${avgR}, G:${avgG}, B:${avgB}`;
        predictionsList.appendChild(li2);

        const li3 = document.createElement('li');
        li3.innerHTML = `<strong>Dimensi Gambar:</strong> ${canvas.width} x ${canvas.height} Piksel`;
        predictionsList.appendChild(li3);

        statusText.innerText = "Analisis Gambar Selesai!";
        statusText.style.color = "#2ecc71";

    } catch (error) {
        statusText.innerText = "Gagal menganalisis piksel gambar.";
        statusText.style.color = "#e74c3c";
        console.error(error);
    }
}
