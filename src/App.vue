<template>
  <transition v-bind:name="animationName">
    <keep-alive>
      <router-view :type="type"></router-view>
    </keep-alive>
  </transition>
</template>

<script>
export default {
  name: 'Views',
  data() {
    return {
      animationName: 'fade',
    }
  },
  props: ['type'],
  watch: {
    '$route'(to, from) {
      if (to.name === 'Story_detail') {
        this.animationName = 'slide-left'
      } else {
        this.animationName = 'slide-right'
      }
    }
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(500px, 0);
  transition: 0.6s;
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-500px, 0);
  transition: 0.6s;
}
</style>
