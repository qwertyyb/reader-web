// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import VueScroller from 'vue-scroller'
import  { LoadingPlugin } from 'vux'
import router from './router'
import Views from './App'

require('offline-plugin/runtime').install()

Vue.config.productionTip = false

Vue.use(VueScroller)
Vue.use(LoadingPlugin)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  components: { Views }
})

const urlBase64ToUint8Array = base64String => {
  var padding = '='.repeat((4 - base64String.length % 4) % 4);
  var base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');
  var rawData = window.atob(base64);
  var outputArray = new Uint8Array(rawData.length);
  for (var i = 0, max = rawData.length; i < max; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

const subscriptionUser = (swRegistration) => {
  const applicationServerPublicKey = "BCNjV1hghSO5e2hfbXmYs9f-36kgnqQNj-vvUFGD6UBRQwD2i3RrCHmejzRsJRolQY6CSdPjglE3hHlFmkdGNZQ";
  const applicationServerKey = urlBase64ToUint8Array(applicationServerPublicKey);
  swRegistration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: applicationServerKey
  })
  // 用户同意
  .then(function(subscription) {
      console.log('User is subscribed:', JSON.stringify(subscription));
  })
  // 用户不同意或者生成失败
  .catch(function(err) {
      console.log('Failed to subscribe the user: ', err);
  });
}

if ('serviceWorker' in navigator) {
  console.log('register serviceWorker')
  navigator.serviceWorker.register('./static/sw.js')
    .then(swReg => {
      console.log('service worker register successful')
      console.log(swReg)
      if (window.PushManager) {
        console.log('getSubscription')
        swReg.pushManager.getSubscription()
        .then(subscription => {
          if (subscription) {
            console.log('already subscription')
          } else {
            console.log('user didn\'t subscription, start subscription now')
            subscriptionUser(swReg)
          }

        })
      }
    })
    .catch(err => {
      console.log('service worker register error', err)
    })
}
