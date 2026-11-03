const status = document.getElementById("status");
const imagePreview = document.getElementById("imagePreview");
const  predictions = document.getElementById("predictions");
const imageCanvas = document.getElementById("imageCanvas");
const gambarpemuat = document.getElementById("gambarpemuat");
let classifier;




function initApplication() {
    status.innerText = "Sedang menghubungkan ke otak Ai (MobilNet)....";
    if (typeof ml5 === 'undefined') {
        status.innerText = "Eror: Pustaka Ai gagal di muat. periksa internet kembali";
        status.style.color = "#e74c3c";
        return;
    }
    classifier = ml5.imageClassifier('MobileNet', function() {
        status.innerText = "Sistem siap! silhkan unduk dan masukan gambar";
        status.style.color = "#2ecc71";
        gambarpemuat.disabled = false;
    });
}

gambarpemuat.addEventListener('change', function(event){
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
    status.innerText = "Sedang di proses untuk mendekteski gambar";
    status.style.color = "#3498db";
    predictions.innerHTML = "<li>Sedang Berpikir </li>";

    classifier.classify(imagePreview, function(error, results){
        if(error) {
            status.innerText = "AI Gagal menganaliss gambar tersebut.";
            status.style.color = "#e74c3c";
            console.error(error);
            return;
        }
        predictions.innerHTML = "";

        results.forEach(result => {
            const li = document.createElement('li');
            const akurasi = (result.confidence * 100).toFixed(2);

            li.innerHTML = `<strong>Objek Terdekteksi:</strong> ${result.label} (Akurasi: ${akurasi}%)`;
            predictions.appendChild(li);
        });
        
        status.innerText = "Hasil Deteksi Telah selsai";
        status.style.color =  "#2ecc71";
    });

}
window.onload = initApplication;
