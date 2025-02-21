// Fungsi untuk mengecek status server
async function cekStatusServer() {
    try {
        const response = await fetch('/server/status');
        if (!response.ok) throw new Error('Gagal mendapatkan respons dari server.');

        const data = await response.json();
        document.getElementById('status-server').innerHTML = `<span class="online-mode">Status Server: ${data.status}</span>`;
        document.getElementById('uptime').innerText = `Uptime: ${data.uptime}`;
    } catch (error) {
        document.getElementById('status-server').innerHTML = '<span class="offline-mode">Server tidak merespons.</span>';
        document.getElementById('uptime').innerText = 'Uptime: -';
    }
}

// Fungsi untuk mengecek status koneksi
function cekStatusKoneksi() {
    if (navigator.onLine) {
        document.getElementById('status-koneksi').innerHTML = '<span class="online-mode">Koneksi Online</span>';
        cekStatusServer();
    } else {
        document.getElementById('status-koneksi').innerHTML = '<span class="offline-mode">Koneksi Offline</span>';
        document.getElementById('status-server').innerHTML = '<span class="offline-mode">Tidak dapat terhubung ke server.</span>';
        document.getElementById('uptime').innerText = 'Uptime: -';
    }
}

// Event Listener untuk perubahan status koneksi
window.addEventListener('online', () => {
    alert('Kamu kembali online!');
    cekStatusKoneksi();
    location.reload(); // Restart ke awal
});

window.addEventListener('offline', () => {
    alert('Kamu sedang offline!');
    cekStatusKoneksi();
});

// Cek status saat pertama kali halaman dimuat
document.addEventListener('DOMContentLoaded', cekStatusKoneksi);
