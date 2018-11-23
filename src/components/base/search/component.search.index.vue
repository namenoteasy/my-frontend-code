<template>
  <!--搜索容器-->
  <div class="cpp-search-container">
    <div class="search-title">
      <span>搜索栏</span>
    </div>
    <div class="search-content">
      <div class="search-left">
        <slot name="searchLeft">
        </slot>
      </div>
      <div class="search-btn-container" :style="`width:${rightWidth}px`">
        <slot name="searchRight">
        </slot>
      </div>
    </div>
  </div>
  <!--/搜索容器-->
</template>
<style lang="scss" scoped>
  @import "./index.scss";
</style>
