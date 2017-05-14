import Vue from 'vue'
import Router from 'vue-router'
import Pages from '@/components/Pages'
import Storydetail from '@/components/story_detail'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Pages',
    component: Pages
  }, {
    path: '/story_detail/:id',
    name: 'Story_detail',
    component: Storydetail
  }]
})
