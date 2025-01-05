const backgroundMusic = document.getElementById("background-music");

// Play music when the page is loaded
window.addEventListener("load", () => {
    backgroundMusic.play().catch((error) => {
        console.log("Autoplay was prevented by the browser. Music requires user interaction.");
    });