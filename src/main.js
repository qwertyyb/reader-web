// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import router from './router'
import Views from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueScroller from 'vue-scroller'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueScroller)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  components: { Views }
})
