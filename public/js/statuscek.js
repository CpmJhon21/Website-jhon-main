// Mengecek apakah pengguna sebelumnya dialihkan ke game dinosaurus
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("redirectedToDino") && navigator.onLine) {
        localStorage.removeItem("redirectedToDino"); // Hapus status redirect
        window.location.href = localStorage.getItem("lastPage") || "/"; // Kembali ke halaman utama
    }
});

// Saat offline, tampilkan alert dan arahkan ke game dinosaurus setelah 5 detik
window.addEventListener("offline", () => {
    alert("Kamu sedang offline ❌");

    // Simpan halaman terakhir sebelum dialihkan ke game dinosaurus
    localStorage.setItem("lastPage", window.location.href);
    
    // Tandai bahwa pengguna sedang dialihkan ke game dinosaurus
    localStorage.setItem("redirectedToDino", true);

    // Arahkan ke game dinosaurus setelah 5 detik
    setTimeout(() => {
        window.location.href = "https://elgoog.im/dinosaur-game/";
    }, 5000);
});

// Saat online kembali di halaman kita, langsung kembali ke halaman sebelumnya
window.addEventListener("online", () => {
    alert("Kamu kembali online ✅");

    if (localStorage.getItem("redirectedToDino")) {
        localStorage.removeItem("redirectedToDino"); // Hapus status redirect
        window.location.href = localStorage.getItem("lastPage") || "/"; // Kembali ke halaman utama
    }
});
