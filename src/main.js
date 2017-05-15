// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//require('@/assets/material.blue-light_blue.min.css')
//require('@/mdl/material.min.js')

import Vue from 'vue'
import router from './router'
import Views from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Views }
})
