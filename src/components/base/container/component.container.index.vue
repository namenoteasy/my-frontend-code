<template>
  <div class="cpp-content-container">
    <!--页面标题-->
    <div class="cpp-main-title">
      <div class="bule-border">
      </div>
      <div class="title-text">{{title}}</div>
      <div class="cl"></div>
    </div>
    <!--/页面标题-->
    <!--内容容器-->
    <div class="cpp-main-container">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "./index.scss";
</style>
