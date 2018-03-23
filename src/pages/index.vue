<template>
  <div>
    <Error v-if="error" :action="refresh"></Error>
    <el-tabs class="tab-header" v-model="activatedTab" @tab-click="tabClicked">
      <el-tab-pane label="瞎扯" name="xc">
        <List :list="xcList" :get-more="getMore" @click="routeToDetail" class="list-com"></List>
      </el-tab-pane>
      <el-tab-pane label="大误" name="dw">
        <List :list="dwList" :get-more="getMore" @click="routeToDetail" class="list-com"></List>        
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import List from '@/components/List'
import Error from '@/components/Error'
import axios from 'axios'
import MtaH5 from 'mta-h5-analysis'
import {getList} from '@/utils/api'

const section = {
  XC: 2,
  DW: 29
}
export default {
  components: {
    List,
    Error
  },
  data () {
    return {
      xcList: [],
      xcTimestamp: 0,
      error: false,
      activatedTab: 'xc',
      dwList: [],
      dwTimestamp: 0
    }
  },
  computed: {
    sectionType () {
      return section[this.activatedTab.toUpperCase()]
    }
  },
  methods: {
    tabClicked(tab) {
      if(this[tab.name + 'List'].length) {
        return
      }
      this.getStoryList(this.sectionType)
    },
    refresh () {
      this.getStoryList()
    },
    async getStoryList(sectionType){
      sectionType = sectionType || section.XC
      let list = this[this.activatedTab + 'List']
      return new Promise(async (resolve, reject) => {
        this.error = false
        let loading = list.length > 0 ? {} : this.$loading({ target: '.main-content', body: false, fullscreen: false, lock: true, text: '拼命加载中', customClass: 'loading' })
        try {
          let res = await getList(this[this.activatedTab + 'Timestamp'], sectionType)
          let stories = res.stories
          let visited = JSON.parse(localStorage.visited || "[]")
          stories.forEach((story) => {
            story.visited = visited.indexOf(story.id) !== -1
          })
          list = list.concat(stories)
          this[this.activatedTab + 'List'] = list
          this[this.activatedTab + 'Timestamp'] = res.timestamp
          loading.close && loading.close()
          resolve(true)
        } catch(err) {
          this.error = list.length <= 0
          loading.close && loading.close()
          reject(err)
        }
      })
    },
    async getMore (done) {
      try {
        await this.getStoryList(this.sectionType)
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
  created () {
    // 初始化
    MtaH5.init({
      "sid":'500575360', //必填，统计用的appid
      "autoReport": 0,//是否开启自动上报(1:init完成则上报一次,0:使用pgv方法才上报)
      "senseHash": 1, //hash锚点是否进入url统计
      "senseQuery": 1, //url参数是否进入url统计
      // "performanceMonitor": 1 //是否开启性能监控
    })
    MtaH5.pgv()
  },
  mounted () {
    this.getStoryList()
  }
}
</script>

<style>
.loading {
  height: 60vh;
}
.tab-header {
  margin: 0 15px;
}
</style>
