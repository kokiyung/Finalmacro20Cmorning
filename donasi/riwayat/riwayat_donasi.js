var dataDonasi = [
    { tanggal: "2023-10-01", nama: "John Doe", jumlah: 1000000 },
    { tanggal: "2023-10-05", nama: "Ana", jumlah: 500000 },
    { tanggal: "2023-10-10", nama: "Johnson", jumlah: 50000 },
    { tanggal: "2023-10-01", nama: "Doe", jumlah: 16000000 },
    { tanggal: "2023-10-05", nama: "Khoirul", jumlah: 550000 },
    { tanggal: "2023-10-01", nama: "Erika", jumlah: 500000 },
    { tanggal: "2023-10-05", nama: "Agnes", jumlah: 900000 },
    { tanggal: "2023-10-10", nama: "Nenden", jumlah: 54000 },
    { tanggal: "2023-10-01", nama: "Mauliza", jumlah: 100000 },
    { tanggal: "2023-10-05", nama: "Astrie", jumlah: 100000 },
    { tanggal: "2023-10-10", nama: "Alucard", jumlah: 20000 },
    { tanggal: "2023-10-01", nama: "Naruto", jumlah: 10000000 },
    { tanggal: "2023-10-05", nama: "Sasuke", jumlah: 550000 },
    { tanggal: "2023-10-10", nama: "Kakashi", jumlah: 40000 },
    { tanggal: "2023-10-10", nama: "Alnando", jumlah: 15000 },
    { tanggal: "2023-04-04", nama: "Ferdinan Samosir", jumlah: 10000000 },
    // Tambahkan data donasi sesuai kebutuhan
];

// Fungsi untuk memasukkan data donasi ke dalam tabel
function isiTabelDonasi() {
    var tbody = document.querySelector("#riwayat-donasi tbody");

    for (var i = 0; i < dataDonasi.length; i++) {
        var row = tbody.insertRow();
        var cellTanggal = row.insertCell(0);
        var cellNama = row.insertCell(1);
        var cellJumlah = row.insertCell(2);

        cellTanggal.innerHTML = dataDonasi[i].tanggal;
        cellNama.innerHTML = dataDonasi[i].nama;
        cellJumlah.innerHTML = "Rp " + dataDonasi[i].jumlah.toLocaleString();
    }
}

isiTabelDonasi();