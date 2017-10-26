<template>
  <div class="layout">
    <el-menu theme="dark" default-active="xc" mode="horizontal" class="el-menu">
      <el-menu-item index="xc">瞎扯</el-menu-item>
    </el-menu>
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
</style>
