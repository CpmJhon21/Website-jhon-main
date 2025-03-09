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
                dinoContainer.classList.remove("move-left");
                dinoContainer.classList.add("move-right");
            } else {
                dinoContainer.classList.remove("move-right");
                dinoContainer.classList.add("move-left");
            }
        } else {
            dinoContainer.classList.remove("show");
        }

        lastScrollY = currentScrollY;
    }

    window.addEventListener("scroll", () => requestAnimationFrame(checkScroll));
});
