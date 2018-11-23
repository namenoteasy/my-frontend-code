<template>
  <el-form-item
  :label="label"
  :label-width="labelWidth"
  :prop="prop"
  :required="required"
  :rules="rules"
  :error="error"
  :show-message="showMessage"
  :inline-message="inlineMessage"
  :size="size">
    <div :style="contentStyle">
      <slot></slot>
    </div>
  </el-form-item>
</template>
