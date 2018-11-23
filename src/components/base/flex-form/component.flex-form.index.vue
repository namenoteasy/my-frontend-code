<template>
  <!--搜索容器-->
  <div class="form-container">
    <div class="form-left">
      <div class="item-wrap">
        <slot></slot>
      </div>
      <slot name="tip"></slot>
    </div>
    <div class="form-right" :style="styleRight">
      <slot name="right"></slot>
    </div>
  </div>
  <!--/搜索容器-->
</template>
<style lang="scss" scoped>
  @import "./index.scss";
</style>

