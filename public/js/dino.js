document.addEventListener("DOMContentLoaded", function () {
    let dino = document.querySelector(".dino-container");
    let bird = document.querySelector(".bird-container");

    function checkScroll() {
        let dinoPosition = dino.getBoundingClientRect().top;
        let birdPosition = bird.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (dinoPosition < windowHeight) {
            dino.classList.add("active");
        }
        if (birdPosition < windowHeight) {
            bird.classList.add("active");
        }
    }

    window.addEventListener("scroll", checkScroll);
});
