document.addEventListener("DOMContentLoaded", function() {
    let dino = document.querySelector(".dino");
    let cactus = document.querySelector(".cactus");
    let scoreDisplay = document.getElementById("score");
    let score = 0;
    let isJumping = false;

    function jump() {
        if (!isJumping) {
            isJumping = true;
            dino.classList.add("jump");
            setTimeout(() => {
                dino.classList.remove("jump");
                isJumping = false;
            }, 500);
        }
    }

    function moveCactus() {
        cactus.style.right = "-50px";
        cactus.style.animation = "cactusMove 2s linear infinite";
    }

    function checkCollision() {
        let dinoRect = dino.getBoundingClientRect();
        let cactusRect = cactus.getBoundingClientRect();

        if (
            dinoRect.right > cactusRect.left &&
            dinoRect.left < cactusRect.right &&
            dinoRect.bottom > cactusRect.top
        ) {
            alert("Game Over! Skor: " + score);
            location.reload();
        }
    }

    function updateScore() {
        score++;
        scoreDisplay.textContent = score;
    }

    document.addEventListener("keydown", function(event) {
        if (event.code === "Space") {
            jump();
        }
    });

    setInterval(checkCollision, 100);
    setInterval(updateScore, 1000);
    moveCactus();
});
