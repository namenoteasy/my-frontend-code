<template>
  <div  :class="{'small-container':true,shadow:shadow,'gray-border':border}">
    <div class="small-title">
      <div class="bule-border">
      </div>
      <div class="title-text" :style="'font-size:'+titleSize">{{title}}</div>
      <a class="link-fl" href="javascript:;" @click="loadPage">进入配置</a>
      <div class="cl"></div>
    </div>
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
  @import "./index.scss";
</style>
