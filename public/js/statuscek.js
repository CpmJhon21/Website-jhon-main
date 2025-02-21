// Fungsi untuk mengecek status koneksi
function cekStatusKoneksi() {
    if (navigator.onLine) {
        alert("Kamu kembali online!"); 
        window.location.href = "/"; // Kembali ke halaman utama
    } else {
        alert("Kamu sedang offline!"); 
        window.location.href = "offline.html"; // Pindah ke halaman offline
    }
}

// Event listener perubahan status jaringan
window.addEventListener("online", cekStatusKoneksi);
window.addEventListener("offline", cekStatusKoneksi);

// Cek status saat pertama kali masuk ke website
document.addEventListener("DOMContentLoaded", cekStatusKoneksi);
