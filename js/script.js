// Mendapatkan elemen formulir
const form = document.getElementById('dataForm');

// Menangani pengiriman formulir
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman formulir secara default

    // Mengambil nilai dari formulir
    const nama = document.getElementById('nama').value;
    const jenisKelamin = document.querySelector('input[name="jenis_kelamin"]:checked').value;
    const tanggalRilis = document.getElementById('tanggalRilis').value;
    const alamat = document.getElementById('alamat').value;

    // Menampilkan hasil ke dalam elemen output
    document.getElementById('outputNama').innerText = nama;
    document.getElementById('outputJenisKelamin').innerText = jenisKelamin;
    document.getElementById('outputTanggalRilis').innerText = tanggalRilis;
    document.getElementById('outputAlamat').innerText = alamat;

    // Menampilkan div output
    document.getElementById('output').style.display = 'block';
});

document.addEventListener("DOMContentLoaded", function() {
    // Array sumber gambar dengan jalur ke folder assets
    var sumberGambar = ["assets/tulus2.jpg", "assets/tulus1.jpg", ];

    // Ambil kontainer gambar
    var kontainerGambar = document.getElementById("gambar-container");

    // Buat elemen gambar dan tambahkan ke kontainer
    sumberGambar.forEach(function(sumber) {
        var gambar = document.createElement("img");
        gambar.src = sumber;
        gambar.alt = "tulus"; // Menambahkan deskripsi alternatif
        kontainerGambar.appendChild(gambar);
    });
});

