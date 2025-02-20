window.addEventListener("online", () => {
    alert("Kamu kembali online ✅");
    if (localStorage.getItem("https://cpm-jhon.my.id")) {
        localStorage.removeItem("https://elgoog.im/dinosaur-game/");
        window.location.href = localStorage.getItem("lastPage") || "/";
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
