<template>
  <List :list="xcList" :get-more="getMore" @click="getDetail" class="list-com"></List>
</template>

<script>
import List from '@/components/List'
import axios from 'axios'

export default {
  components: {
    List
  },
  data () {
    return {
      xcList: [],
      xcTimestamp: 0,
      curId: -1,
      showDetail: false
    }
  },
  watch: {
  },
  methods: {
    async getMore (done) {
      try {
        let res = await axios.get('https://bird.ioliu.cn/v1/?url=http://news-at.zhihu.com/api/3/section/2/before/' + this.xcTimestamp)
        let stories = res.data.stories
        let visited = JSON.parse(localStorage.visited || "[]")
        stories.forEach((story) => {
          story.visited = visited.indexOf(story.id) !== -1
        })
        this.xcList = this.xcList.concat(stories)
        this.xcTimestamp = res.data.timestamp
        done('success')
      } catch (err) {
        done('fail')
        this.$notify.error({
          title: '错误',
          message: '获取信息错误'
        })
      }
    },
    getDetail (item) {
      this.curId = item.id
      this.showDetail = true
      item.visited = true
      let visited = JSON.parse(localStorage.visited || "[]")
      if (!~visited.indexOf(item.id)) {
        visited.push(item.id)
        localStorage.visited = JSON.stringify(visited)
      }
      item.visited = true
      this.$router.push({ path: '/' + item.id })
    }
  },
  async created () {
    let loading = this.$loading({ target: '.list-com', body: true, lock: true })
    try {
      let res = await axios.get('https://bird.ioliu.cn/v1/?url=http://news-at.zhihu.com/api/3/section/2')
      let stories = res.data.stories
      let visited = JSON.parse(localStorage.visited || "[]")
      stories.forEach((story) => {
        story.visited = visited.indexOf(story.id) !== -1
      })
      this.xcList = stories
      this.xcTimestamp = res.data.timestamp
      loading.close()
    } catch(err) {
      loading.close()
      this.$notify.error({
        title: '错误',
        message: '获取信息错误'
      })
    }
  }
}
</script>

<style>
</style>
