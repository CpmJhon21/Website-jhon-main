function cekKoneksi() {
            if (navigator.onLine) {
                window.location.href = "/";
            } else {
                alert("Masih offline. Periksa koneksi Anda.");
            }
}
