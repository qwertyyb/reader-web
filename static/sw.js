self.addEventListener('push', e => {
  console.log('[Service Worker] Push event: ', e)
  console.log('[Service Worker] Push data: ', e.data.text())

  const { title, options } = e.data.json()
  const notification = self.registration.showNotification(title, { ...options })
})

self.addEventListener('notificationclick', function(event) {
  console.log('[Service Worker] Notification click Received.', event);
  const notification = event.notification
  console.log(notification)
  const { data: { url } = {} } = notification
  url && event.waitUntil(
    clients.openWindow(url)
  )
    
  event.notification.close();
});