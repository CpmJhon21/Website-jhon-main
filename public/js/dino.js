window.addEventListener("scroll", function() {
    let dino = document.querySelector(".dino-container");
    let scrollPosition = window.scrollY;

    if (scrollPosition > 100) { // Muncul setelah scroll ke bawah
        dino.style.bottom = "50px";
    } else {
        dino.style.bottom = "-100px";
    }
});
