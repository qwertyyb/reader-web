<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <!-- Title -->
        <span class="mdl-layout-title">知乎日报</span>
        <div class="mdl-layout-spacer"></div>
        <!-- Navigation. We hide it in small screens. -->
        <nav class="mdl-navigation">
          <button class="mdl-button mdl-js-button mdl-button--icon"@click="toggleView">
            <i class="material-icons">{{ viewType }}</i> 
          </button>

          <button id="demo-menu-lower-right" class="mdl-button mdl-js-button mdl-button--icon">
            <i class="material-icons">more_vert</i>
          </button>
          <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" for="demo-menu-lower-right">
            <li class="mdl-menu__item"for="switch-1">
              <label for="switch-model">夜间模式</label>
              <label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="switch-model">
                <span class="mdl-switch__label"></span>
                <input type="checkbox" id="switch-model" class="mdl-switch__input" checked>
              </label>
            </li>
            <li class="mdl-menu__item mdl-menu__item--full-bleed-divider">Another Action</li>
            <li disabled class="mdl-menu__item">Disabled Action</li>
            <li class="mdl-menu__item">Yet Another Action</li>
          </ul>
        </nav>
      </div>
    </header>
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">知乎日报</span>
      <nav class="mdl-navigation"@click="hideDrawer">
        <router-link :to="{path: '/story/xc', query: {viewType: viewType}}" class="mdl-navigation__link is-active">瞎扯</router-link>
        <router-link to="/story/latest" class="mdl-navigation__link">首页</router-link>
    </nav>
    </div>
    <main class="mdl-layout__content">
      <div class="page-content">
        <!-- Your content goes here -->
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </main>
  </div>
</template>

<script>
import StoryList from './StoryList'
export default {
  components: { StoryList },
  data () {
    return {
      viewType: 'view_array'
    }
  },
  methods: {
    hideDrawer (event) {
      if(event.target.nodeName.toLowerCase() === 'a'){
        var drawer = document.querySelector(".mdl-layout__obfuscator.is-visible")
        if(drawer){
          drawer.click()
        }
      }
    },
    toggleView () {
      this.viewType = this.viewType === 'view_array'?'view_list':'view_array'
      this.$router.replace(this.$route.path + '?viewType=' + this.viewType)
    }
  }
}
</script>

<style>
.router-link-active {
  background-color: #e0e0e0;
}
.mdl-navigation {
  position: relative;
}
</style>
