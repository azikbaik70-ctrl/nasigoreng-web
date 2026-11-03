function tambahangka (karakter) {
    let kotak = document.getElementById("tema");

    kotak.value = kotak.value + karakter;
}
function hitunghasil() {
    let kotak = document.getElementById("tema");
    try {
        kotak.value = eval(kotak.value);
    }catch (e) {
        alert("Rumus EROR!");
    }
}
function hapuslayar() {
    document.getElementById("tema").value = "";
}
