document.addEventListener("DOMContentLoaded", function () {
    let dinoContainer = document.querySelector(".dino-container");

    function checkScroll() {
        let dinoPosition = dinoContainer.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (dinoPosition < windowHeight - 100) {
            dinoContainer.classList.add("show"); // Aktifkan animasi
        }
    }

    window.addEventListener("scroll", checkScroll);
});
