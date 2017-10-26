<template>
  <div class="layout">
    <el-menu theme="dark" default-active="xc" mode="horizontal" class="menu">
      <el-menu-item index="xc" class="menu-title">瞎扯</el-menu-item>
    </el-menu>
    <div class="fixed-header-behind"></div>
    <transition v-bind:name="$route.name === 'detail' ? 'slide-left' : 'slide-right'">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Views',
  data() {
    return {
      activeName: 'xc'
    }
  },
  watch: {
    '$route' (to, from) {
      if (to.name === 'detail' && from.name === 'index') {
        localStorage.scroll = document.body.scrollTop
        localStorage.docHeight = document.body.offsetHeight
      } else if (to.name === 'index' && from.name === 'detail' && localStorage.scroll && localStorage) {
        let scrolled = false
        let docHeight = Number(localStorage.docHeight)
        let times = 0
        let interval = setInterval(() => {
          if (scrolled || times > 10) {
            clearInterval(interval)
            return
          }
          times++
          if (document.body.offsetHeight === docHeight) {
            document.body.scrollTop = Number(localStorage.scroll)
            scrolled = true
          }
        }, 200)
      }
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
body {
  overflow-x: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  transform: translate(500px, 0);
  transition: 0.4s;
}

.slide-left-leave-active,
.slide-right-enter {
  transform: translate(-500px, 0);
  transition: 0.4s;
}
.layout .fixed-header-behind {
  height: 60px;
}
.layout .menu {
  box-shadow: 0 5px 4px grey;
  position: fixed;
  width: 100%;
  z-index: 10;
}
.layout .menu-title {
  font-size: 24px;
}
</style>
