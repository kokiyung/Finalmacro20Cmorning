// Fungsi untuk menginisialisasi nilai bar donasi
function inisialisasiBarDonasi() {
    var donasiTerkumpul = 50000000; // Ganti dengan jumlah donasi terkumpul
    var targetDonasi = 100000000;  // Ganti dengan target donasi

    var progress = (donasiTerkumpul / targetDonasi) * 100;
    document.getElementById("progress-bar").style.width = progress + "%";
}

inisialisasiBarDonasi();