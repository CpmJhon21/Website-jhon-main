// Redirect ke index2.html setelah splash screen selesai
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        window.location.href = "index20.html";
    }, 10000); // 10 detik setelah loading selesai
});

// Inisialisasi Particles.js
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 50
        },
        "size": {
            "value": 3
        },
        "move": {
            "speed": 2
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.5,
            "width": 1
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            }
        }
    }
});
