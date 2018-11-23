<template>
  <div class="info-container">
    <div class="info-title">
      <span>{{title}}</span>
    </div>
    <slot></slot>
    <div class="cl"></div>
  </div>
</template>
<style lang="scss" scoped>
  @import "./index.scss";
</style>
