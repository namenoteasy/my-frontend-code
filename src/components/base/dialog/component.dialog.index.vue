<template>
  <!--操作弹窗-->
  <div class="cpp-dialog-container">
    <el-dialog
      :custom-class="'cpp-dialog'"
      :width="width"
      :top="top"
      :visible.sync="visible"
      @close="$emit('update:show', false)"
      :show="show">
      <div class="cpp-dialog-title" slot="title">
        <span>{{title}}</span>
      </div>
      <div class="cpp-dialog-content">
        <slot></slot>
      </div>
    </el-dialog>
  </div>
  <!--/操作弹窗-->
</template>
<style lang="scss">
  @import "./index.scss";
</style>
