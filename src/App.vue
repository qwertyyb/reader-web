<template>
  <div class="demo">
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
          <!-- Title -->
          <span class="mdl-layout-title">Title</span>
        </div>
        <!-- Tabs -->
        <div class="mdl-layout__tab-bar mdl-js-ripple-effect">
          <a href="#scroll-tab-1" class="mdl-layout__tab is-active">Tab 1</a>
          <a href="#scroll-tab-2" class="mdl-layout__tab">Tab 2</a>
          <a href="#scroll-tab-3" class="mdl-layout__tab">Tab 3</a>
          <a href="#scroll-tab-4" class="mdl-layout__tab">Tab 4</a>
          <a href="#scroll-tab-5" class="mdl-layout__tab">Tab 5</a>
          <a href="#scroll-tab-6" class="mdl-layout__tab">Tab 6</a>
        </div>
      </header>
      <div class="mdl-layout__drawer">
        <span class="mdl-layout-title">Title</span>
      </div>
      <main class="mdl-layout__content">
        <section class="mdl-layout__tab-panel is-active" id="scroll-tab-1">
          <div class="page-content">
            <!-- Your content goes here -->

            <div v-for="story in stories"class="mdl-cell mdl-cell--3-col mdl-cell--2-col-phone mdl-card mdl-shadow--2dp">
              <div class="mdl-card__title" v-bind:style="{ backgroundImage: 'url('+story.images[0]+')'}">
                <h2 class="mdl-card__title-text">{{ story.display_date }}</h2>
              </div>
              <div class="mdl-card__supporting-text">
                {{ story.title }}
              </div>
              <div class="mdl-card__actions mdl-card--border">
                <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                  阅读
                </a>
              </div>
              <div class="mdl-card__menu">
                <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                  <i class="material-icons">share</i>
                </button>
              </div>
            </div>

          </div>
        </section>
        <section class="mdl-layout__tab-panel" id="scroll-tab-2">
          <div class="page-content">
            <!-- Your content goes here -->
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
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      stories:[]
    }
  },
  created () {
    // var xmlHttp = new XMLHttpRequest()
    // var _this = this
    // xmlHttp.onreadystatechange = function () {
    //   if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
    //     _this.stories = JSON.parse(xmlHttp.responseText).stories;
    //     console.log(_this.stories)
    //   }
    // }
    // xmlHttp.open('GET', )
    // xmlHttp.send()
    this.stories = JSON.parse('{"timestamp":1492988398,"stories":[{"images":["https:\/\/pic1.zhimg.com\/v2-9d5dd46dff2d038f979ee90e77abef8c.jpg"],"date":"20170513","display_date":"5 月 13 日","id":9414394,"title":"瞎扯 · 如何正确地吐槽"},{"images":["https:\/\/pic3.zhimg.com\/v2-db17da329d6ac0e8a54f6834cffca43e.jpg"],"date":"20170512","display_date":"5 月 12 日","id":9413415,"title":"瞎扯 · 如何正确地吐槽"},{"images":["https:\/\/pic1.zhimg.com\/v2-1d969f75849e94c2465d8f54c1c4bed0.jpg"],"date":"20170511","display_date":"5 月 11 日","id":9412077,"title":"瞎扯 · 如何正确地吐槽"},{"images":["https:\/\/pic1.zhimg.com\/v2-4ca242d344df72aaa6413f1a01ad2f24.jpg"],"date":"20170510","display_date":"5 月 10 日","id":9409962,"title":"瞎扯 · 如何正确地吐槽"},{"images":["https:\/\/pic1.zhimg.com\/v2-e6a972aa25a4c6a99003a53b33061da4.jpg"],"date":"20170509","display_date":"5 月 9 日","id":9407559,"title":"瞎扯 · 如何正确地吐槽"},{"images":["https:\/\/pic3.zhimg.com\/v2-2c62e1b997fa5398ad5e9c4f5d2915d2.jpg"],"date":"20170508","display_date":"5 月 8 日","id":9402953,"title":"瞎扯 · 如何正确地吐槽"},{"images":["https:\/\/pic1.zhimg.com\/v2-bc3267e6c4225358f01a284239b22f98.jpg"],"date":"20170507","display_date":"5 月 7 日","id":9403185,"title":"瞎扯 · 如何正确地吐槽"},{"images":["https:\/\/pic1.zhimg.com\/v2-b9f3adf6585fda9d6c9886491c411230.jpg"],"date":"20170506","display_date":"5 月 6 日","id":9402098,"title":"瞎扯 · 如何正确地吐槽"},{"images":["https:\/\/pic1.zhimg.com\/v2-c62b0bdb09acaa3d85601dec0c71c68c.jpg"],"date":"20170505","display_date":"5 月 5 日","id":9397955,"title":"瞎扯 · 如何正确地吐槽"},{"images":["https:\/\/pic2.zhimg.com\/v2-dd2099aff566b37503e6e0aff3e7afad.jpg"],"date":"20170504","display_date":"5 月 4 日","id":9395948,"title":"瞎扯 · 如何正确地吐槽"},{"images":["https:\/\/pic2.zhimg.com\/v2-598353f424a360ed640ff6057f823e05.jpg"],"date":"20170503","display_date":"5 月 3 日","id":9393330,"title":"瞎扯 · 如何正确地吐槽"},{"images":["https:\/\/pic3.zhimg.com\/v2-ef7b3b190112833d6eed0d06c0800a9e.jpg"],"date":"20170502","display_date":"5 月 2 日","id":9390083,"title":"瞎扯 · 如何正确地吐槽"},{"images":["https:\/\/pic4.zhimg.com\/v2-e6d67fcab78bad700e9f9dfac7be174f.jpg"],"date":"20170501","display_date":"5 月 1 日","id":9390068,"title":"瞎扯 · 如何正确地吐槽"},{"images":["https:\/\/pic1.zhimg.com\/v2-b237825a67d3ce959e47c4f5440b1f74.jpg"],"date":"20170430","display_date":"4 月 30 日","id":9388286,"title":"瞎扯 · 如何正确地吐槽"},{"images":["https:\/\/pic4.zhimg.com\/v2-766204df4ba818c989bdb492b072b75f.jpg"],"date":"20170429","display_date":"4 月 29 日","id":9387639,"title":"瞎扯 · 如何正确地吐槽"},{"images":["https:\/\/pic2.zhimg.com\/v2-3245f9cf1b797056db48741a6a82058d.jpg"],"date":"20170428","display_date":"4 月 28 日","id":9385511,"title":"瞎扯 · 如何正确地吐槽"},{"images":["https:\/\/pic3.zhimg.com\/v2-5c8d54dfe2d6320450d63082404632d2.jpg"],"date":"20170427","display_date":"4 月 27 日","id":9382920,"title":"瞎扯 · 如何正确地吐槽"},{"images":["https:\/\/pic1.zhimg.com\/v2-1214f5e150c9dfb81a13bd254bbedf50.jpg"],"date":"20170426","display_date":"4 月 26 日","id":9373488,"title":"瞎扯 · 如何正确地吐槽"},{"images":["https:\/\/pic1.zhimg.com\/v2-054b729d1731c53b3179e2752787bc84.jpg"],"date":"20170425","display_date":"4 月 25 日","id":9379395,"title":"瞎扯 · 如何正确地吐槽"},{"images":["https:\/\/pic3.zhimg.com\/v2-3fbffbff154194c308d438e2ca4665ea.jpg"],"date":"20170424","display_date":"4 月 24 日","id":9375496,"title":"瞎扯 · 如何正确地吐槽"}],"name":"瞎扯"}').stories
    console.log(this.stories)
}
}
</script>

<style>
.page-content {
  padding: 4px 4px;
}
.page-content .mdl-cell {
  display: inline-block;
}
.page-content .mdl-card__title {
  color: #fff;
  padding-top: 60%;
  background-image: url(https://pic2.zhimg.com/v2-0296877f8f0e3d3d1ffd1e51dc35d909.jpg);
  background-size: 100%;
  background-position: 50%;
}
.mdl-card .mdl-card__menu{
  color: #fff;
}

</style>
