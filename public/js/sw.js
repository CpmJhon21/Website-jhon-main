const CACHE_NAME = "offline-cache-v1";
const OFFLINE_URL = "offline.html";

// Instal Service Worker dan simpan halaman offline ke cache
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll([OFFLINE_URL]);
        })
    );
});

// Intercept request untuk menampilkan halaman offline jika tidak ada koneksi
self.addEventListener("fetch", (event) => {
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(OFFLINE_URL).then((response) => {
                return response || fetch(event.request);
            })
        );
    }
});
