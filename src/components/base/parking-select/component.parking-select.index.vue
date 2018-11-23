<template>
  <el-select v-model="parkingCode" :size="size" filterable placeholder="请选择">
    <el-option
      v-for="(item,index) in parkingArr"
      :key="index"
      :value="item.parkingCode"
      :label="item.parkingName">
    </el-option>
  </el-select>
</template>
<style lang="scss" scoped>
  @import "./index.scss";
</style>
