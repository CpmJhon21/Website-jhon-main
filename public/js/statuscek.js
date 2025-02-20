window.addEventListener("online", () => {
    alert("Kamu kembali online ✅");
    if (localStorage.getItem("redirectedToDino")) {
        localStorage.removeItem("redirectedToDino");
        window.location.href = localStorage.getItem("lastPage") || "/";
        localStorage.setItem("lastPage", window.location.href);
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
