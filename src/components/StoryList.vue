<template>
  <div class="stories">
    <HomeHeader v-if="type === 'latest'" :stories="top_stories"></HomeHeader>
    <div v-for="story in stories" :class="{'mdl-cell--2-col-phone': viewType==='view_array', 'mdl-cell--12-col-phone': viewType==='view_list'}" class="mdl-cell mdl-cell--2-col mdl-card mdl-shadow--2dp">
      <div class="mdl-card__title" v-bind:style="{ backgroundImage: 'url('+story.images[0]+')'}">
        <h2 class="mdl-card__title-text">{{ story.display_date }}</h2>
      </div>
      <div class="mdl-card__supporting-text">
        {{ story.title }}
      </div>
      <div class="mdl-card__actions mdl-card--border">
        <router-link :to="{path: '/story_detail/' + story.id}" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">阅读</router-link>
      </div>
      <div class="mdl-card__menu">
        <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
          <i class="material-icons">share</i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import HomeHeader from './HomeHeader.vue'

export default {
  name: 'app',
  data() {
    return {
      top_stories: ['hello'],
      stories: [],
      urls: {
        latest: 'http://news-at.zhihu.com/api/4/news/latest',
        xc: 'http://news-at.zhihu.com/api/3/section/2'
      },
      type: 'xc',
      viewType: 'view_array'
    }
  },
  props: ['colCount'],
  watch: {
    '$route'(to, from) {
      if(to.name === 'StoryList'){
        this.type = to.params.type
      }
      if(to.query) {
        this.viewType = to.query.viewType
      }
    },
    'type'(to, from) {
      this.getStoryList()
    }
  },
  components: { HomeHeader },
  created() {
    this.type = this.$route.params.type || 'xc'
    this.viewType = this.$route.query.viewType || 'view_array'
    this.getStoryList()
  },
  methods: {
    getStoryList () {
      var xmlHttp = new XMLHttpRequest()
      var _this = this
      xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
          var res = JSON.parse(xmlHttp.responseText)
          _this.stories = res.stories
          _this.top_stories = res.top_stories
        }
      }
      xmlHttp.open('GET', 'https://bird.ioliu.cn/v1?url=' + this.urls[this.type])
      xmlHttp.send()
    }
  }
}
</script>

<style>
.page-content .mdl-cell {
  display: inline-block;
}

.page-content .mdl-card__title {
  color: #fff;
  padding-top: 60%;
  background-image: url(https://pic2.zhimg.com/v2-0296877f8f0e3d3d1ffd1e51dc35d909.jpg);
  background-size: 100%;
  background-position: 50%;
}

.mdl-card a {
  text-decoration: none;
}

.mdl-card .mdl-card__menu {
  color: #fff;
}
.mdl-card__supporting-text {
  max-height: 32px;
  width: auto;
}
</style>
