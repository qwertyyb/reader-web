self.addEventListener('push', e => {
  console.log('[Service Worker] Push event: ', e)
  console.log('[Service Worker] Push data: ', e.data.text())

  const { title, options } = e.data.json()
  const notification = self.registration.showNotification(title, { ...options })

  console.log(e.waitUntil(notification))

})

self.addEventListener('notificationclick', function(event) {
  console.log('[Service Worker] Notification click Received.', event);
  const notification = event.notification
  console.log(notification)
  const { data: { detailUrl, indexUrl } = {} } = notification
  const url = event.action === 'showDetail' ? detailUrl : indexUrl
  if (url) {
    event.waitUntil(
      clients.openWindow(url)
    )
  } else {
    event.notification.close();
  }
});