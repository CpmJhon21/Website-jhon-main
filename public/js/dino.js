document.addEventListener("DOMContentLoaded", function() {
    let dino = document.querySelector(".dino-container");
    let position = 0; // Posisi awal Dino
    let direction = 1; // Arah gerakan (1 = kanan, -1 = kiri)

    function moveDino() {
        position += 5 * direction; // Tambah posisi ke kanan
        dino.style.left = position + "px"; // Ubah posisi Dino

        // Jika Dino sampai ke ujung kanan layar, balik arah
        if (position >= window.innerWidth - 100) {
            direction = -1;
            dino.style.transform = "scaleX(-1)"; // Balik Dino ke kiri
        }

        // Jika Dino sampai ke ujung kiri layar, balik arah
        if (position <= 0) {
            direction = 1;
            dino.style.transform = "scaleX(1)"; // Balik Dino ke kanan
        }
    }

    // Jalankan fungsi setiap 50 milidetik (0.05 detik)
    setInterval(moveDino, 50);
});
