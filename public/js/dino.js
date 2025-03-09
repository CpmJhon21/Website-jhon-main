document.addEventListener("DOMContentLoaded", function () {
    let dinoContainer = document.querySelector(".dino-container");
    let lastScrollY = window.scrollY;

    function checkScroll() {
        let dinoPosition = dinoContainer.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;
        let currentScrollY = window.scrollY;

        if (dinoPosition < windowHeight - 100) {
            dinoContainer.classList.add("show");

            if (currentScrollY > lastScrollY) {
                // Scroll ke bawah → Dino jalan ke kanan
                dinoContainer.classList.remove("move-left");
                dinoContainer.classList.add("move-right");
            } else {
                // Scroll ke atas → Dino balik dan jalan ke kiri
                dinoContainer.classList.remove("move-right");
                dinoContainer.classList.add("move-left");
            }
        } else {
            dinoContainer.classList.remove("show");
        }

        lastScrollY = currentScrollY;
    }

    window.addEventListener("scroll", checkScroll);
});
