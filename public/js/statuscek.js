// Fungsi untuk mengecek status online dengan fetch ke file kecil
const checkOnlineStatus = async () => {
    try {
        const online = await fetch("/1pixel.png", { method: "HEAD", cache: "no-store" });
        return online.status >= 200 && online.status < 300; // true jika online
    } catch (err) {
        return false; // false jika offline
    }
};

// Fungsi untuk memperbarui status koneksi
const updateConnectionStatus = async () => {
    const statusDisplay = document.getElementById("status");
    const online = await checkOnlineStatus();

    if (online) {
        statusDisplay.textContent = "Online ✅";
        statusDisplay.style.color = "green";
        closePopup();

        // Jika sebelumnya dialihkan ke game dinosaurus, kembali ke halaman utama
        if (localStorage.getItem("redirectedToDino")) {
            localStorage.removeItem("redirectedToDino");
            window.location.href = localStorage.getItem("lastPage") || "/";
        }
    } else {
        statusDisplay.textContent = "Offline ❌";
        statusDisplay.style.color = "red";
        showOfflinePopup();
    }
};

// Fungsi untuk menampilkan pop-up saat offline
function showOfflinePopup() {
    document.getElementById("offline-popup").style.display = "block";

    // Simpan halaman terakhir sebelum dialihkan ke game dinosaurus
    localStorage.setItem("lastPage", window.location.href);
    localStorage.setItem("redirectedToDino", true);

    // Arahkan ke game dinosaurus setelah 5 detik
    setTimeout(() => {
        window.location.href = "https://elgoog.im/dinosaur-game/";
    }, 5000);
}

// Fungsi untuk menutup pop-up
function closePopup() {
    document.getElementById("offline-popup").style.display = "none";
}

// Mengecek status koneksi setiap 3 detik
setInterval(updateConnectionStatus, 3000);

// Mengecek status saat halaman pertama kali dimuat
document.addEventListener("DOMContentLoaded", updateConnectionStatus);

// Event listener untuk perubahan status koneksi
window.addEventListener("online", updateConnectionStatus);
window.addEventListener("offline", updateConnectionStatus);

// Contoh fungsi yang membutuhkan koneksi internet sebelum mengambil data
const yourDataRequestFunction = async () => {
    const online = await checkOnlineStatus();
    if (online) {
        console.log("Mengambil data dari server...");
        // Lakukan permintaan data di sini
    } else {
        console.log("Tidak dapat mengambil data, perangkat offline.");
    }
};
