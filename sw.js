// Service Worker Avanzado para Marea Grande
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Escuchar mensajes desde la app para forzar notificaciones
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'DISPARAR_ALERTA') {
    self.registration.showNotification(event.data.title, {
      body: event.data.body,
      icon: 'https://cdn-icons-png.flaticon.com/512/857/857686.png',
      badge: 'https://cdn-icons-png.flaticon.com/512/857/857686.png',
      vibrate: [200, 100, 200]
    });
  }
});
