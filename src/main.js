// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import router from './router'
import Views from './App'
import {Menu, MenuItem, Loading, Notification, Icon, tabs, tabPane} from 'element-ui'
require('offline-plugin/runtime').install()

Vue.config.productionTip = false
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Loading)
Vue.use(Icon)
Vue.use(tabs)
Vue.use(tabPane)

Vue.prototype.$notify = Notification
Vue.prototype.$loading = Loading.service
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  components: { Views }
})
