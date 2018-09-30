<template>
  <Drawer
    :show.sync="drawerVisible"
    show-mode="push"
  >
    <template slot="drawer">
      <div class="drawer-menu">页面建设中</div>
    </template>
    <keep-alive>
      <router-view @toggleDrawerVisible="toggleDrawerVisible"></router-view>
    </keep-alive>
  </Drawer>
</template>

<script>
import { Drawer } from 'vux'
export default {
  name: 'App',
  components: {
    Drawer
  },
  data() {
    return {
      drawerVisible: false
    }
  },
  methods: {
    toggleDrawerVisible() {
      this.drawerVisible = !this.drawerVisible
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
html, body, #app {
  height: 100%;
}
.drawer-menu {
  width: 80vw;
}
</style>
