let url = null
self.addEventListener('push', e => {
  console.log('[Service Worker] Push event: ', e)
  console.log('[Service Worker] Push data: ', e.data.text())

  const { title, options, url: receivedUrl } = e.data.json()
  url = receivedUrl
  const notification = self.registration.showNotification(title, { ...options, url })

  console.log(e.waitUntil(notification))

})

self.addEventListener('notificationclick', function(event) {
  console.log('[Service Worker] Notification click Received.', event);

  event.notification.close();

  event.waitUntil(
    clients.openWindow(url)
  );
});