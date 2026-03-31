// Basic Service Worker to satisfy PWA requirements
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    // Required to be recognized as a PWA, even if empty.
    return;
});
