<template>
  <div class="list">
    <ListItem v-for="(item, index) in list" :key="item.id" :item="item" @click="$emit('click', item, index)"></ListItem>
    <p v-if="getMore && list.length > 0" class="more" @click="changeLoadingStatus('loading')">{{ loadingStatus }}</p>
  </div>
</template>

<script>
import ListItem from './ListItem.vue'

export default {
  components: {
    ListItem
  },
  data () {
    return {
      loadingStatus: '点击加载更多'
    }
  },
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    },
    getMore: {
      type: Function,
      default: null
    }
  },
  methods: {
    changeLoadingStatus (status) {
      if (status === 'loading') {
        this.loadingStatus = '正在加载···'
        this.getMore(this.changeLoadingStatus)
      } else if (status === 'success') {
        this.loadingStatus = '点击加载更多'
      } else if (status === 'fail') {
        this.loadingStatus = '加载失败'
      }
    }
  }
}
</script>
<style scoped>
.more {
  text-align: center;
  background: #ddd;
  font-size: 18px;
  padding: 6px;
  transition: .2s background;
}
.more:active {
  background: #bbb;
}
a {
  color: black;
  text-decoration: none;
}
a:hover, a:active, a:visited{
  color: black
}
</style>
