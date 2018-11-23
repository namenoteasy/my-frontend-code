<template>
  <div>
    <el-checkbox
      :indeterminate="isIndeterminate"
      v-model="checkAll"
      @change="changeCheckedAll"
    >全选</el-checkbox>
    <div class="split"></div>
    <el-checkbox-group v-model="checkList" @change="changeChecked">
      <el-checkbox v-for="item in list" :label="item[label]" :key="item[label]">{{item[name]}}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>
<style lang="scss" scoped>
  .split{
    margin:$margin-small 0;
  }
</style>
