self.addEventListener('push', e => {
  console.log('[Service Worker] Push event: ', e)
  console.log('[Service Worker] Push data: ', e.data.text())

  const { title, options: extraOptions } = e.data.json()
  const { url, ...options } = extraOptions
  const notification = self.registration.showNotification(title, { ...options })
  notification.onclick = () => {
    url && event.waitUntil(
      clients.openWindow(url)
    )
  }

})
