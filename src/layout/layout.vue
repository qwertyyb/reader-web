<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="瞎扯吐槽" name="xc">
      <List :list="xcList" :get-more="getMore" @click="getDetail" v-show="!showDetail"></List>
      <Detail :id="curId" v-show="showDetail"></Detail>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import List from '@/components/List'
import axios from 'axios'
import Detail from '@/components/Detail'

export default {
  components: {
    List,
    Detail
  },
  data () {
    return {
      activeName: 'xc',
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
        this.xcList = this.xcList.concat(res.data.stories)
        this.xcTimestamp = res.data.timestamp
        done('success')
      } catch (err) {
        done('fail')
      }
    },
    async getDetail (item) {
      this.curId = item.id
      this.showDetail = true
    }
  },
  async created () {
    let res = await axios.get('https://bird.ioliu.cn/v1/?url=http://news-at.zhihu.com/api/3/section/2')
    this.xcList = res.data.stories
    this.xcTimestamp = res.data.timestamp
  }
}
</script>

<style>
/* .el-tabs__header {
  margin-bottom: 0!important;
} */
</style>
