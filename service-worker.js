const CACHE_NAME = 'mi-app-cache';
const urlsToCache = [
  '/',
  '/index.html'
  // Puedes agregar aquí otros archivos (como CSS, JS, imágenes) que uses.
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
