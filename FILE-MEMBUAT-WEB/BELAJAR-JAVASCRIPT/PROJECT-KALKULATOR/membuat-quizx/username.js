// Data akun valid untuk login
const dataUsernameVALID = "admin";
const dataPasswordValid = "12345";

// Daftar pertanyaan kuis
const daftarkuis = [
    { 
        pertanyaan: "Apa pelajaran yang membahas tentang teknologi", 
        opsi: ["A.Matematika","B.Informatika","C.ilmu pengetahuan Alam","D.Ilmu pengetahuan Sosial"], 
        jawaban: "B.Informatika", 
        Penjelasan: "Jawaban salah di karena kan , pelajaran yang membahas teknologi adalah informatika, Berbeda dengan, mata pelajaran yang lain seperti Matmetika yang mempelajari tentang rumus , lalu ilmu pengetahun alam mempelajari tentang lingkungan kehidupan seperti bilogi ekologi ,dan yang terakhir adalah ips / ilmu pengetahun sosial yang mempelajari tentang kehidupan sosial, seperti cara kita berdistraksi dengan orang lain" 
    }, 
    { 
        pertanyaan: "Berapa hasil dari 10 pangkat 2", 
        opsi: ["A.10","B.20","C.100","D.1000"], 
        jawaban: "C.100", 
        Penjelasan: "Jawaban salah di karena kan, hasil dari 10 pangkat 2 adalah 100," 
    }, 
    { 
        pertanyaan: "Apa nama Tokoh yang Pernah membocorkan data USA", 
        opsi: ["A. Ada Lovelace","B.Edward Snowden","C.Nikola Tesla","D.al-khwarizmi"], 
        jawaban: "B.Edward Snowden", 
        Penjelasan: "Jawaban salah di karenekan ,Tokoh yang membocorkan data adalah Edward Snowden, dia yang berhasil membocorkan data dokumentasi tentang negara USA, sedangkan Ada lovelace adalah progammer pertama di dunia, lalu Nikola tesla dia menciptakan sistem Arus listrik Bolak balik, Yang terarkhir adalah al-khawarizmi adalah tokoh dari arab yang menjelaska tentang matematika" 
    }, 
    { 
        pertanyaan: "Apa Negara yang banyak mayoritas nya itu main bola", 
        opsi: ["A. Brazil", "B. Indonesia", "C. Amerika", " D. Uzbezkistan"], 
        jawaban: "A. Brazil", 
        Penjelasan: "Jawaban salah yang benar adalah , A. Brazil di karenakan Brazil di kenal oleh sepak bolanya" 
    }, 
    { 
        pertanyaan: "Apa Bahasa pemograman yang sangat mendekati bahasa mesin", 
        opsi: ["A. Dart", "B. python", "C. Golang", "D. Assembly"], 
        jawaban: "D. Assembly", 
        Penjelasan: "Jawaban salah yang benar adala D. Assembly , karena bahasa pemograman yang mendekati bahasa mesin adalah Assembly , Sedangkan python , GO , Dart, adalah bahasa pemograman backend yang mudah di baca oleh manusia dia tidak mendekati bahsa mesin melainkan bahsa pemograman yang di rancang untuk mudah di baca oleh manusia," 
    }, 
    { 
        pertanyaan: "Tools apa yang di gunakan untuk mencari kata sandi acak , lalu tools ini biasanya berjalan offline", 
        opsi: ["A.Hashcat", "B.Netcat", "C.Hydra", "D.Nmap"], 
        jawaban: "A.Hashcat", 
        Penjelasan: "Jawaban salah yang benar adalah , A.Hashcat di karenakan tools untuk mencari kata sandi secara acak dan offline adalah hashcat berbeda dengan hydra ,hydra adalah mencari kata sandi secara online, Sedangkan Netcat adalah alat komunikasi , dan yang terakhir adalah Nmap yang berfungsi untuk mengets apakah alamat ip tersebut ada atau tidak" 
    }, 
    { 
        pertanyaan: "Dari pernyataan ini manakah elemen python , A.echo code, B.print code , B.include <iostream> int main() { std:: cout << hello world return 0 , D.printf code", 
        opsi: ["A", "B", "C", "D"], 
        jawaban: "B", 
        Penjelasan: "Jawaban salah yang benar adalah, B di sebabkan syntax python adalah echo" 
    }, 
    { 
        pertanyaan: "Urutan Tingkatan takson Hewan", 
        opsi: ["A.Kingdom,Phylum,classis,Ordo,Familia,Genus,Spacies", "B.Kindom, Phylum, Divisio, Ordo , Familia, Genus, Species " , " C.mutualisme, komensalisme, paratisme" , "D.produsen , konsumen"], 
        jawaban: "A", 
        Penjelasan: "Jawaban nya salah yang benar adalah A, di karenakan jawbaan b itu urutan tingkatan takson untuk Tumbuhan , Jawaban yang c utnuk simbiosis, Sedangan untuk yang terakhir yaitu D menjelaskan tentang komponen biotik" 
    }
];