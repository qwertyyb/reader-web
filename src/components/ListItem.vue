<template>
  <div :class="['list-item', item.visited ? 'visited' : '']" @click="$emit('click')">
      <img :src="item.images[0]" :alt="item.title" class="picture">
      <div class="title-block">
          <h3 class="main-title">{{ item.display_date }}</h3>
          <p class="sub-title">{{ item.title }}</p>
      </div>
  </div>
</template>
<script>
export default {
  props: {
      item: {
          type: Object,
          default () {
              return {}
          }
      }
  }
}
</script>
<style>
.list-item {
    display: flex;
    max-height: 100px;
    border-bottom: 1px solid #dfdfdf;
    padding-bottom: 8px;
    padding-top: 8px;
    font-family: '微软雅黑';
    margin-left: 10px;
    margin-right: 10px;
}
.list-item .picture {
    width: 100px;
    height: 100px;
    margin-right: 5px;
}
.list-item .title-block {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-left: 5px;
}
.list-item .title-block .main-title {
    margin: 0;
    flex: 2;
}
.list-item .title-block .sub-title {
    flex: 5;
    margin: 0;
    margin-top: 5px;
    margin-left: 5px;
    color: #999;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    letter-spacing: 2px;
    font-size: 14px;
}
.list-item.visited .main-title {
    color: #999;
}
.list-item.visited .sub-title {
    color: #bbb;
}
</style>

