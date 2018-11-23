<template>
  <div  :class="{'small-container':true,shadow:shadow,'gray-border':border}">
    <div class="small-title">
      <div class="bule-border">
      </div>
      <div class="title-text" :style="'font-size:'+titleSize">{{title}}</div>
      <div style="float:right;">
        <slot name="topright"></slot>
      </div>
      <div class="cl"></div>
    </div>
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
  @import "./index.scss";
</style>
