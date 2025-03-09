document.addEventListener("DOMContentLoaded", function () {
    let dinoContainer = document.querySelector(".dino-container");

    window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY; // Posisi scroll
        let moveDistance = scrollTop * 0.5; // Sesuaikan kecepatan gerak Dino

        dinoContainer.style.transform = `translateX(${moveDistance}px)`;
    });
});
