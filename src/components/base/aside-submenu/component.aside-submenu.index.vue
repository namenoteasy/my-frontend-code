<template>
  <el-main class="t-submenu">
    <header class="submenu-header">{{title}}</header>
    <el-menu
      style="width: 170px;"
      ref="subMenu"
      class="aside-submenu"
    >
      <slot></slot>
    </el-menu>
  </el-main>
</template>
<style scoped lang="scss">
  @import "index.scss";
</style>
