if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("js/sw.js")
        .then(() => console.log("Service Worker berhasil terdaftar"))
        .catch((err) => console.error("Service Worker gagal:", err));
}

function cekStatusKoneksi() {
    if (!navigator.onLine) {
        alert("Kamu sedang offline!");
        window.location.href = "offline.html";
    }
}

window.addEventListener("offline", cekStatusKoneksi);
window.addEventListener("online", () => {
    alert("Koneksi kembali! Memuat ulang halaman...");
    window.location.href = "/";
});

document.addEventListener("DOMContentLoaded", cekStatusKoneksi);
