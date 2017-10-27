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
        this.xcList = this.xcList.concat(res.data.stories)
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
      this.$router.push({ path: '/' + item.id })
    }
  },
  async created () {
    let loading = this.$loading({ target: '.list-com', body: true, lock: true })
    try {
      let res = await axios.get('https://bird.ioliu.cn/v1/?url=http://news-at.zhihu.com/api/3/section/2')
      this.xcList = res.data.stories
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
/* .el-tabs__header {
  margin-bottom: 0!important;
} */
</style>
