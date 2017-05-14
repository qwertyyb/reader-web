<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <!-- Title -->
        <span class="mdl-layout-title">知乎日报</span>
      </div>
      <!-- Tabs -->
      <div class="mdl-layout__tab-bar mdl-js-ripple-effect">
        <a href="#scroll-tab-1" class="mdl-layout__tab is-active">打鸡血</a>
        <a href="#scroll-tab-2" class="mdl-layout__tab">首页</a>
        <a href="#scroll-tab-3" class="mdl-layout__tab">Tab 3</a>
        <a href="#scroll-tab-4" class="mdl-layout__tab">Tab 4</a>
        <a href="#scroll-tab-5" class="mdl-layout__tab">Tab 5</a>
        <a href="#scroll-tab-6" class="mdl-layout__tab">Tab 6</a>
      </div>
    </header>
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">知乎日报</span>
    </div>
    <main class="mdl-layout__content">
      <section class="mdl-layout__tab-panel" id="scroll-tab-1">
        <div class="page-content">
          <!-- Your content goes here -->
          <StoryList type="xc"></StoryList>
        </div>
      </section>
      <section class="mdl-layout__tab-panel is-active" id="scroll-tab-2">
        <div class="page-content">
          <!-- Your content goes here -->
          <StoryList type="latest"></StoryList>
        </div>
      </section>
      <section class="mdl-layout__tab-panel" id="scroll-tab-3">
        <div class="page-content">
          <!-- Your content goes here -->
        </div>
      </section>
      <section class="mdl-layout__tab-panel" id="scroll-tab-4">
        <div class="page-content">
          <!-- Your content goes here -->
        </div>
      </section>
      <section class="mdl-layout__tab-panel" id="scroll-tab-5">
        <div class="page-content">
          <!-- Your content goes here -->
        </div>
      </section>
      <section class="mdl-layout__tab-panel" id="scroll-tab-6">
        <div class="page-content">
          <!-- Your content goes here -->
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import StoryList from './story_list'
export default {
  components: { StoryList }
}
</script>

<style>

</style>
