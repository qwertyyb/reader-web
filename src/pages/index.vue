<template>
  <view-box body-padding-top="46px" body-padding-bottom="0">
    <x-header slot="header"
      style="width:100%;position:absolute;left:0;top:0;z-index:100;"
      @click.native="toggleDrawerVisible"
    >
      <template slot="overwrite-left">
        <x-icon type="menu" class="icon-menu"></x-icon>
      </template>
    知乎日报</x-header>
    <XButton type="primary" :disabled="!canSubscription">订阅</XButton>
    <tab v-model="activedTab" @on-index-change="onSwiperIndexChange">
      <tab-item v-for="tabItem in tabItems" :key="tabItem">{{tabItem}}</tab-item>
    </tab>
    <swiper v-model="activedTab" ref="swiper" height="100%" :show-dots="false" :threshold="125" style="height: calc(100% - 50px)">
      <swiper-item v-for="(contentType, index) in contentTypes" :key="contentType.name">
        <scroller :ref="'scroller-'+index"
          :on-refresh="$event=>onRefresh(index, $event)"
          :on-infinite="$event=>onInfinite(index, $event)" height="100%">
          <panel :list="list[index]" type="1" @on-click-item="onItemClick"></panel>
        </scroller>
      </swiper-item>
    </swiper>
  </view-box>
</template>
<script>
import { ViewBox, XHeader, Tab, TabItem, Swiper, SwiperItem, Panel, XButton } from 'vux'
import { getList } from '../utils/api'
import MtaH5 from 'mta-h5-analysis'

const contentTypes =  [
  {
    name: '瞎扯',
    id: 2,
  }, {
    name: '大误',
    id: 29,
  }, {
    name: '小事',
    id: 35,
  }, {
    name: '放映机',
    id: 28,
  }, {
    name: '每周一吸',
    id: 78,
  }, {
    name: '本周热门',
    id: 90,
  }, {
    name: '节日特辑',
    id: 79
  }
]


export default {
  name: 'IndexPage',
  components: {
    ViewBox,
    XHeader,
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    Panel,
    XButton
  },
  data() {
    return {
      contentTypes,
      timestamp: contentTypes.map(() => 0),
      list: contentTypes.map(contentType => []),
      activedTab: +this.$route.query.tabIndex || 0,
      canSubscription: false,
    }
  },
  computed: {
    tabItems() {
      return contentTypes.map(section => section.name)
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
        this.$refs[`scroller-${this.activedTab}`][0].scrollTo(0, top)
      }
    }, 50)
  },
  methods: {
    async getList(insertAfter = false) {
      const contentType = contentTypes[this.activedTab].id
      const curTimestamp = this.timestamp[this.activedTab]
      if (curTimestamp === undefined) {
        return
      }
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
      const { top } = this.$refs[`scroller-${this.activedTab}`][0].getPosition()
      sessionStorage.setItem(`scroller-${this.activedTab}-top`, top)
    },
    onSwiperIndexChange(index) {
      this.$router.push({ path: '/', query: { tabIndex: index } })
    },
    toggleDrawerVisible() {
      this.$emit('toggleDrawerVisible')
    }
  }
}
</script>
<style>
.weui-media-box__title {
  margin-bottom: 8px;
}
.icon-menu {
  color: white;
  width: 30px;
  margin: -6px -10px;
}
</style>