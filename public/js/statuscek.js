function updateNetworkStatus() {
    const networkText = document.getElementById("network-text");
    if (navigator.onLine) {
        networkText.textContent = "Online";
        networkText.className = "online";
        checkServerStatus(); // Cek server saat online
    } else {
        networkText.textContent = "Offline";
        networkText.className = "offline";
    }
}

function checkServerStatus() {
    fetch('/server/status')
        .then(response => {
            if (!response.ok) {
                throw new Error('Tidak bisa mendapat respons dari server');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("server-text").textContent = data.status;
            document.getElementById("server-text").className = data.status === "Online" ? "online" : "offline";
            document.getElementById("uptime-text").textContent = data.uptime;
        })
        .catch(error => {
            document.getElementById("server-text").textContent = "Gagal terhubung";
            document.getElementById("server-text").className = "offline";
            document.getElementById("uptime-text").textContent = "-";
        });
}

// Event listener untuk perubahan status jaringan
window.addEventListener("online", updateNetworkStatus);
window.addEventListener("offline", updateNetworkStatus);

// Cek status awal saat halaman dimuat
updateNetworkStatus();
checkServerStatus();

// Cek status server secara berkala (misalnya setiap 30 detik)
setInterval(checkServerStatus, 30000);
