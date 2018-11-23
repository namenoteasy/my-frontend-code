<template>
  <div style="text-align: center">
    <p class="desc" style="">{{title}}</p>
    <div style="margin-top: 20px">
      <span class="icon"><slot name="icon"></slot></span>
      <span class="number">{{value}}</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "./index.scss";
</style>
