<template>
  <div class="top-stories mdl-cell mdl-cell--12-col" @mouseover="stopInterval" @mouseleave="startInterval">
    <div class="container">
      <div class="imgs">
        <div class="img" v-for="story, index in stories" :class="{'is-active': index === curIndex, 'is-leaving': (index+1)%5 === curIndex }" :key="index">
          <router-link :to="{path: '/story_detail/'+story.id}">
            <img :src="story.image" :alt="story.title">
            <p class="title">{{ story.title }}</p>
          </router-link>
        </div>
      </div>
      </transition>
      <nav>
        <label v-for="n in 5" class="mdl-radio" :for="'option-'+(n-1)">
          <input type="radio" :id="'option-'+(n-1)" class="mdl-radio__button" name="index" :value="(n-1)" v-model="curIndex">
        </label>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeHeader',
  data () {
    return {
      curIndex: -1,
      transitionName: 'slide-left',
      interval: '',
      speed: 4000
    }
  },
  props: ['stories'],
  watch: {
    stories (to) {
      if(to.length>0){
        this.startInterval()
      }
    }
  },
  methods: {
    startInterval(){
      this.curIndex = (++this.curIndex)%this.stories.length
      this.interval = setTimeout(this.startInterval, this.speed);
    },
    stopInterval() {
      clearTimeout(this.interval)
    }
  }
}
</script>

<style lang="stylus">

.top-stories
  position: relative;
  .container 
    max-width: 640px;
    margin: 0 auto;
    max-height: 375px;
  .imgs
    position: relative;
    width: 100%;
    padding-bottom: 65%;
    box-sizing: border-box;
    overflow: hidden;
    .img.is-active
      transform: translate(0, 0);
      opacity: 1;
    .img.is-leaving
      transform: translate(-640px, 0);
    .img 
      position: absolute;
      width: 100%;
      max-width: 640px;
      max-height: 375px;
      transform: translate(640px, 0);
      overflow: hidden;
      opacity: 0;
      transition: all .6s;
      img 
        width: 100%;
        height: 100%;
        margin: -18% 0;
      .title
        position: absolute;
        bottom: 8%;
        width: 100%;
        font-size: 24px;
        text-align: center;
        color: white;
        margin: 0!important;
  nav
    position: absolute;
    bottom: 1%;
    width: 100%;
    max-width: 640px;
    display: flex;
    justify-content: center;
  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(500px, 0);
    transform: translate(500px, 0);
    transition: 0.6s;
  }

  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-500px, 0);
    transform: translate(-500px, 0);
    transition: 0.6s;
  }
</style>
