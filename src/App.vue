<template>
  <div class="layout">
    <el-menu theme="dark" default-active="xc" mode="horizontal" class="el-menu">
      <el-menu-item index="xc">瞎扯</el-menu-item>
    </el-menu>
    <transition v-bind:name="$route.name === 'Detail' ? 'slide-left' : 'slide-right'">
      <router-view></router-view>
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
