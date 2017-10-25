import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: Index
  },{
    path: '/:id',
    name: 'detail',
    component: Detail,
    props: true
  }]
})
