<template>
  <div class="active-panel">
    <div class="panel-title">
      <span>{{title}}</span>
      <el-tooltip class="item" effect="dark" :content="tip" placement="top">
        <i class="iconfont icon-wenhao"></i>
      </el-tooltip>
    </div>
    <div class="panel-content">
      <span>{{value}}</span>
    </div>
    <span class="angle-icon" @click="loadPage">
      <i class="iconfont icon-chakan"></i>
    </span>
  </div>
</template>
<style lang="scss" scoped>
  @import "index.scss";
</style>
