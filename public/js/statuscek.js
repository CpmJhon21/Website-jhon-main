// Fungsi untuk memperbarui status koneksi
function updateConnectionStatus() {
    const statusText = document.getElementById('status-text');

    if (navigator.onLine) {
        statusText.textContent = "Online ✅";
        statusText.style.color = "green";
        closePopup();

        // Jika sebelumnya dialihkan ke game dinosaurus, kembali ke halaman utama
        if (localStorage.getItem('redirectedToDino')) {
            localStorage.removeItem('https://elgoog.im/dinosaur-game/'); // Hapus status redirect
            window.location.href = localStorage.getItem('lastPage') || "https://cpm-jhon.my.id"; // Kembali ke halaman utama
        }
    } else {
        statusText.textContent = "Offline ❌";
        statusText.style.color = "red";
        showOfflinePopup();
    }
}

// Fungsi untuk menampilkan pop-up saat offline
function showOfflinePopup() {
    document.getElementById("offline-popup").style.display = "block";
    
    // Simpan halaman terakhir sebelum dialihkan
    localStorage.setItem('lastPage', window.location.href);

    // Setelah 5 detik, alihkan ke game dinosaurus
    setTimeout(() => {
        localStorage.setItem('redirectedToDino', true); // Tandai bahwa dialihkan
        window.location.href = "https://elgoog.im/dinosaur-game/";
    }, 5000);
}

// Fungsi untuk menutup pop-up
function closePopup() {
    document.getElementById("offline-popup").style.display = "none";
}

// Event listener untuk perubahan status koneksi
window.addEventListener('online', updateConnectionStatus);
window.addEventListener('offline', updateConnectionStatus);

// Cek status saat halaman pertama kali dimuat
updateConnectionStatus();
