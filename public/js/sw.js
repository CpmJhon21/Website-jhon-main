const CACHE_NAME = "offline-cache-v1";
const OFFLINE_URL = "offline.html";

// Instalasi Service Worker
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll([OFFLINE_URL, "css/offline.css", "js/status.js"]);
        })
    );
    self.skipWaiting();
});

// Ambil permintaan dan arahkan ke cache jika offline
self.addEventListener("fetch", (event) => {
    event.respondWith(
        fetch(event.request).catch(() => caches.match(OFFLINE_URL))
    );
});
