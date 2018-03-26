<template>
  <div class="layout">
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
  transition: 0.4s;
}

.slide-left-leave-active,
.slide-right-enter {
  transform: translate(-800px, 0);
  transition: 0.4s;
}
.layout .main-content {
  max-width: 600px;
  min-height: calc(100vh-60px);
  margin: 0 auto;
}
.el-tabs__header {
  margin: 0;
}
</style>
