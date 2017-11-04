<template>
  <div class="layout">
    <el-menu background-color="#545c64" text-color="#fff" active-text-color="#fff" default-active="xc" mode="horizontal" class="menu">
      <el-menu-item index="xc" class="menu-title">瞎扯</el-menu-item>
    </el-menu>
    <div class="block"></div>
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
.layout .block {
  height: 68px;
}
.layout .main-content {
  max-width: 600px;
  min-height: 500px;
  margin: 0 auto;
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
