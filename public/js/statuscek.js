// Fungsi untuk memperbarui status koneksi
function updateConnectionStatus() {
    const statusText = document.getElementById('status-text');
    
    if (navigator.onLine) {
        statusText.textContent = "Online ✅";
        statusText.style.color = "green";
        closePopup();
    } else {
        statusText.textContent = "Offline ❌";
        statusText.style.color = "red";
        showOfflinePopup();
    }
}

// Fungsi untuk menampilkan pop-up saat offline
function showOfflinePopup() {
    document.getElementById("offline-popup").style.display = "block";
    setTimeout(() => {
        window.location.href = "https://elgoog.im/dinosaur-game/";
    }, 5000); // Arahkan ke game dinosaurus setelah 5 detik
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
