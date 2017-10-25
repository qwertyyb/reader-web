import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/layout'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'layout',
    component: Layout
  }]
})
