<template>
  <keep-alive include="IndexPage">
    <router-view></router-view>
  </keep-alive>
</template>

<script>
export default {
  name: 'App'
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
