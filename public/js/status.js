function cekKoneksi() {
            if (navigator.onLine) {
                window.location.href = "/"; // Jika online, kembali ke halaman utama
            } else {
                alert("Masih offline. Periksa koneksi Anda.");
            }
        }

        // Jika kembali online, otomatis redirect ke halaman utama
        window.addEventListener("online", () => {
            alert("Koneksi kembali! Kembali ke website...");
            window.location.href = "/";
        });
