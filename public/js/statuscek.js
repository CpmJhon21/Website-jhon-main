// Daftarkan Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('js/sw.js')
        .then(() => console.log("Service Worker terdaftar"))
        .catch((err) => console.error("Service Worker gagal:", err));
}

// Fungsi cek status koneksi
function cekStatusKoneksi() {
    if (navigator.onLine) {
        console.log("Koneksi Online");
        location.reload(); // Kembali ke website jika online
    } else {
        console.log("Koneksi Offline");
    }
}

// Event listener perubahan koneksi
window.addEventListener("online", cekStatusKoneksi);
window.addEventListener("offline", () => {
    window.location.href = "offline.html"; // Arahkan ke halaman offline saat kehilangan koneksi
});

// Cek status koneksi saat halaman dimuat
document.addEventListener("DOMContentLoaded", cekStatusKoneksi);
