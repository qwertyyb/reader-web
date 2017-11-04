<template>
  <Error v-if="error" :action="refresh"></Error>
  <List v-else :list="xcList" :get-more="getMore" @click="routeToDetail" class="list-com"></List>
</template>

<script>
import List from '@/components/List'
import Error from '@/components/Error'
import axios from 'axios'

export default {
  components: {
    List,
    Error
  },
  data () {
    return {
      xcList: [],
      xcTimestamp: 0,
      error: false
    }
  },
  watch: {
  },
  methods: {
    refresh () {
      this.getStoryList()
    },
    async getStoryList(){
      return new Promise(async (resolve, reject) => {
        this.error = false
        let loading = this.xcList.length > 0 ? {} : this.$loading({ target: '.main-content', body: false, fullscreen: false, lock: true, text: '拼命加载中' })
        try {
          let res = await axios.get('https://bird.ioliu.cn/v1/?url=http://news-at.zhihu.com/api/3/section/2/before/' + this.xcTimestamp)
          let stories = res.data.stories
          let visited = JSON.parse(localStorage.visited || "[]")
          stories.forEach((story) => {
            story.visited = visited.indexOf(story.id) !== -1
          })
          this.xcList = this.xcList.concat(stories)
          this.xcTimestamp = res.data.timestamp
          loading.close && loading.close()
          resolve(true)
        } catch(err) {
          this.error = this.xcList.length <= 0
          loading.close && loading.close()
          reject(err)
        }
      })
    },
    async getMore (done) {
      try {
        await this.getStoryList()
        done && done('success')
      } catch (err) {
        this.$notify.error({
          title: '错误',
          message: '获取信息错误'
        })
        done && done('fail')
      }
    },
    routeToDetail (item) {
      item.visited = true
      let visited = JSON.parse(localStorage.visited || "[]")
      if (!~visited.indexOf(item.id)) {
        visited.push(item.id)
        localStorage.visited = JSON.stringify(visited)
      }
      sessionStorage.scroll = Number(window.scrollY)
      sessionStorage.height = Number(document.body.offsetHeight)
      this.$router.push({ path: '/' + item.id })
    }
  },
  activated () {
    // 滚动到之前存储的位置
    let height = Number(sessionStorage.height || 0), scrollTop = Number(sessionStorage.scroll || 0)
    let times = 0
    let interval = setInterval(() => {
      if (window.scrollY === scrollTop || times > 10) {
        clearInterval(interval)
        return
      }
      times++
      if (document.body.offsetHeight === height) {
        window.scrollTo(0, scrollTop)
      }
    }, 500)
  },
  mounted () {
    this.getStoryList()
  }
}
</script>

<style>
</style>
