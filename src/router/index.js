import Vue from 'vue'
import Router from 'vue-router'
const StoryListFrame = resolve => require(['@/components/StoryListFrame'], resolve)
const StoryList = resolve => require(['@/components/StoryList'], resolve)
const StoryDetail = resolve => require(['@/components/StoryDetail'], resolve)

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
    component: StoryDetail
  }]
})
