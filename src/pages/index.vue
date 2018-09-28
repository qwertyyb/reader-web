<template>
  <view-box body-padding-top="46px" body-padding-bottom="0">
    <x-header slot="header" :left-options="{showBack: false}"
      style="width:100%;position:absolute;left:0;top:0;z-index:100;" 
    >知乎日报</x-header>
    <tab v-model="activedTab" @on-index-change="onSwiperIndexChange">
      <tab-item>瞎扯</tab-item>
      <tab-item>大误</tab-item>
    </tab>
    <swiper v-model="activedTab" ref="swiper" height="100%" :show-dots="false" :threshold="150" style="height: 100%">
      <swiper-item>
        <scroller ref="scroller-0" :on-refresh="$event=>onRefresh(0, $event)" :on-infinite="$event=>onInfinite(0, $event)" height="100%">
          <panel :list="list[0]" type="1" @on-click-item="onItemClick"></panel>
        </scroller>
      </swiper-item>
      <swiper-item>
        <scroller ref="scroller-1" :on-refresh="$event=>onRefresh(1, $event)" :on-infinite="$event=>onInfinite(1, $event)" height="100%">
          <panel :list="list[1]" type="1" @on-click-item="onItemClick"></panel>
        </scroller>
      </swiper-item>
    </swiper>
  </view-box>
</template>
<script>
import { ViewBox, XHeader, Tab, TabItem, Swiper, SwiperItem, Panel } from 'vux'
import { getList } from '../utils/api'
import MtaH5 from 'mta-h5-analysis'

const contentTypes =  [2, 29]

export default {
  name: 'IndexPage',
  components: {
    ViewBox,
    XHeader,
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    Panel
  },
  data() {
    return {
      timestamp: {
        0: 0,
        1: 0
      },
      list: {
        0: [],
        1: []
      },
      activedTab: +this.$route.query.tabIndex || 0
    }
  },
  watch: {
    activedTab(val, old) {
      if (this.list[val].length) {
        return
      }
      this.getList()
    }
  },
  created() {
    // 初始化
    MtaH5.init({
      sid:'500575360', //必填，统计用的appid
      cid: '500645799',
      autoReport: 0,//是否开启自动上报(1:init完成则上报一次,0:使用pgv方法才上报)
      senseHash: 1, //hash锚点是否进入url统计
      senseQuery: 1, //url参数是否进入url统计
      performanceMonitor: 1 //是否开启性能监控
    })
    MtaH5.pgv()
  },
  activated() {
    setTimeout(() => {  // 从详情页退回时，滚动至进入位置
      const top = sessionStorage.getItem(`scroller-${this.activedTab}-top`)
      if (top) {
        this.$refs[`scroller-${this.activedTab}`].scrollTo( 0, top)
      }
    })
  },
  methods: {
    async getList(insertAfter = false) {
      const contentType = contentTypes[this.activedTab]
      const curTimestamp = this.timestamp[this.activedTab]
      const { timestamp, stories } = await getList(curTimestamp, contentType)
      this.timestamp[this.activedTab] = timestamp
      const list = stories.map(({ images: [src], title, display_date: desc, id}) => ({
        title,
        desc,
        src,
        url: `/detail/${id}`
      }));
      if (insertAfter) {
        this.$set(this.list, this.activedTab, this.list[this.activedTab].concat(list))
      } else {
        this.$set(this.list, this.activedTab, list)
      }
    },
    async onRefresh(tab, done) {
      if (this.activedTab !== tab) {
        return
      }
      this.timestamp[this.activedTab] = 0
      await this.getList()
      done()
    },
    async onInfinite(tab, done) {
      if (this.activedTab !== tab) {
        return done()
      }
      await this.getList(true)
      done()
    },
    onItemClick(item) {
      // 保存进入详情页面时的scrollTop, 重新激活此页面时，恢复滚动位置
      const { top } = this.$refs[`scroller-${this.activedTab}`].getPosition()
      console.log(`scroller-${this.activedTab}`, top)
      sessionStorage.setItem(`scroller-${this.activedTab}-top`, top)
    },
    onSwiperIndexChange(index) {
      this.$router.push({ path: '/', query: { tabIndex: index } })
    }
  }
}
</script>
<style>
.weui-media-box__title {
  margin-bottom: 8px;
}
</style>