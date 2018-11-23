<template>
  <div class="static-panel">
    <div class="panel-title">
      <span>{{title}}</span>
    </div>
    <div class="panel-content">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "index.scss";
</style>
