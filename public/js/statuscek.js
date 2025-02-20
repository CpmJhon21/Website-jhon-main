window.addEventListener("online", () => {
    alert("Kamu kembali online ✅");
localStorage.setItem("lastPage", window.location.href);
    setTimeout(() => {
        localStorage.setItem("cpm-jhon.my.id", true);
        window.location.href = "https://cpm-jhon.my.id";
    }, 5000);
    }
});

window.addEventListener("offline", () => {
    alert("Kamu sedang offline ❌");
    localStorage.setItem("lastPage", window.location.href);
    setTimeout(() => {
        localStorage.setItem("redirectedToDino", true);
        window.location.href = "https://elgoog.im/dinosaur-game/";
    }, 5000);
});
