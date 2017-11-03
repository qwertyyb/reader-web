<template>
  <div class="layout">
    <el-menu background-color="#545c64" text-color="#fff" active-text-color="#fff" default-active="xc" mode="horizontal" class="menu">
      <el-menu-item index="xc" class="menu-title">瞎扯</el-menu-item>
    </el-menu>
    <div class="main-content">
      <transition :name="$route.name === 'detail' ? 'slide-left' : 'slide-right'">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>
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
        // 在路由之前，存储当前页面的信息，以便恢复到当前位置
        localStorage.scroll = document.body.scrollTop
        localStorage.docHeight = document.body.offsetHeight
      } else if (to.name === 'index' && from.name === 'detail' && localStorage.scroll && localStorage) {
        // 滚动到之前存储的位置
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
  overflow-x: hidden!important;
}

.slide-left-enter,
.slide-right-leave-active {
  transform: translate(800px, 0);
  transition: 0.6s;
}

.slide-left-leave-active,
.slide-right-enter {
  transform: translate(-800px, 0);
  transition: 0.6s;
}
.layout .main-content {
  max-width: 600px;
  min-height: 500px;
  margin: 68px auto 0 auto;
}
.layout .menu {
  box-shadow: 0 3px 6px #aaa;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
}
.layout .menu-title {
  font-size: 24px;
}
</style>
