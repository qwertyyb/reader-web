import Vue from 'vue'
import Router from 'vue-router'
import StoryListFrame from '@/components/StoryListFrame'
import StoryList from '@/components/StoryList'
import Storydetail from '@/components/StoryDetail'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'StoryListFrame',
    component: StoryListFrame,
    redirect: '/story/xc',
    children: [{
      path: '/story/:type',
      name: 'StoryList',
      component: StoryList
    }]
  }, {
    path: '/story_detail/:id',
    name: 'StoryDetail',
    component: Storydetail
  }]
})
