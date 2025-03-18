const CACHE_NAME = "v1.0.0";
const CACHE_ASSETS = [
    "/index.html",
    "/reset.css",
    "/styles.css",
    "/App.js",
    "/assets/",
    "/assets/icon-192x192.png",
    "/assets/icon-512x512.png"  
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(CACHE_ASSETS);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
