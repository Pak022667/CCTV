self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('cctv-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/favicon-32x32.png',
        '/favicon-16x16.png',
        '/apple-touch-icon.png',
        '/manifest.json',
        '/service-worker.js'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
