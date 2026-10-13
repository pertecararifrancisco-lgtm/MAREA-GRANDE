// Service Worker para Marea Grande
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Listener para mostrar notificaciones
self.addEventListener('push', (event) => {
  const data = event.data ? event.data.json() : {};
  const title = data.title || 'Marea Grande';
  const options = {
    body: data.body || '¡Tenés una actividad programada!',
    icon: 'https://cdn-icons-png.flaticon.com/512/857/857686.png',
    badge: 'https://cdn-icons-png.flaticon.com/512/857/857686.png'
  };

  event.waitUntil(self.registration.showNotification(title, options));
});
