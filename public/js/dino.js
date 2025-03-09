document.addEventListener("DOMContentLoaded", function () {
    let dino = document.querySelector(".dino-container");
    let triggerPoint = 300; // Dino muncul saat scroll lebih dari 300px

    // Pastikan dino awalnya tidak terlihat
    dino.style.display = "none";

    // Fungsi untuk mengecek scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > triggerPoint) {
            dino.style.display = "block"; // Munculkan Dino
        } else {
            dino.style.display = "none"; // Sembunyikan jika kembali ke atas
        }
    });
});
