// === Oasis Radio Service Worker ===
// Enables PWA installation + background capabilities

const CACHE_NAME = 'oasis-radio-v1';
const STATIC_ASSETS = [
  '/oasis/',
  '/oasis/index.html',
  '/oasis/app.js',
  '/oasis/styles.css',
  '/oasis/extra-styles.css',
  '/oasis/performance.css',
  '/oasis/percyquasar.jpg',
  '/oasis/manifest.json'
];

// Install: pre-cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch(() => {
        // If some assets fail, still install
        return Promise.resolve();
      });
    })
  );
  self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter(name => name !== CACHE_NAME).map(name => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

// Fetch: serve from cache, fall back to network
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests and external audio streams
  if (event.request.method !== 'GET') return;
  if (event.request.url.includes('archive.org')) return;
  if (event.request.url.includes('api.open-meteo.com')) return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;
      return fetch(event.request).then((response) => {
        // Cache successful responses for static assets
        if (response && response.status === 200 && response.type === 'basic') {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
        }
        return response;
      }).catch(() => {
        // Offline fallback: return cached index.html
        return caches.match('/oasis/index.html');
      });
    })
  );
});

// Push Notification support (for future use)
self.addEventListener('push', (event) => {
  const data = event.data ? event.data.json() : {};
  const title = data.title || '⏰ Oasis Radio - Alarma';
  const options = {
    body: data.body || '¡Hora de despertar!',
    icon: '/oasis/percyquasar.jpg',
    badge: '/oasis/percyquasar.jpg',
    tag: 'oasis-alarm',
    requireInteraction: true,
    vibrate: [500, 250, 500, 250, 500, 250, 500]
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

// Notification click: open app
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url.includes('/oasis') && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow('/oasis/');
      }
    })
  );
});
