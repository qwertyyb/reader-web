<template>
	<div class="posts">
	    <div v-for="post in posts" :class="{'mdl-cell--2-col-phone': viewType==='view_array', 'mdl-cell--12-col-phone': viewType==='view_list'}" class="mdl-cell mdl-cell--2-col mdl-card mdl-shadow--2dp">
	      <div class="mdl-card__title post-title" v-bind:style="{ backgroundImage: 'url('+post.thumbs[0].medium.url+')'}">
	        <h2 class="mdl-card__title-text">{{ post.column }}</h2>
	      </div>
	      <div class="mdl-card__supporting-text">
	        {{ post.title }}
	      </div>
	      <div class="mdl-card__actions mdl-card--border">
	        <router-link :to="{path: '/moment_detail/' + post.id}" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">阅读</router-link>
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
export default {
	data () {
		return {
			posts: [],
			viewType: 'view_array'
		}
	},
	watch: {
		'$route'(to, from) {
		  if(to.query) {
		    this.viewType = to.query.viewType
		  }
		}
	},
	created () {
		this.getPosts()
	},
	methods: {
		getPosts (column) {
			var xmlHttp = new XMLHttpRequest
			var _this = this
			xmlHttp.onreadystatechange = function(){
				if(xmlHttp.readyState === 4 && xmlHttp.status === 200) {
					var res = JSON.parse(xmlHttp.responseText)
					_this.posts = res.posts
				}
			}
			xmlHttp.open('GET', 'https://bird.ioliu.cn/v1?url=https://moment.douban.com/api/column/26/posts')
			xmlHttp.send()
		}
	}
}
</script>
<style lang="styl">
.post-title.mdl-card__title
	color #fff
	padding-top 45%
	background-size 100%
	background-position 50%
</style>