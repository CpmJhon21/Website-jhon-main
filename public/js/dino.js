document.addEventListener("DOMContentLoaded", function () {
    let dinoContainer = document.querySelector(".dino-container");

    function checkScroll() {
        let dinoPosition = dinoContainer.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (dinoPosition < windowHeight - 100) {
            dinoContainer.classList.add("active"); // Mulai animasi
            window.removeEventListener("scroll", checkScroll); // Hentikan event agar tidak terus dipanggil
        }
    }

    window.addEventListener("scroll", checkScroll);
});
