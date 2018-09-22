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
