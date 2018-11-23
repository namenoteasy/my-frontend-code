<template>
  <div>
    <el-select v-model="dictCode" :size="size" filterable placeholder="请选择">

      <el-option
        v-if="defaultOption !== ''"
        :key="undefined"
        :value="undefined"
        :label="defaultOption">
      </el-option>
      <el-option
        v-for="(item,index) in dictArr"
        :key="item.dictValue"
        :value="item.dictValue"
        :label="item.dictName">
      </el-option>
    </el-select>
  </div>
</template>
<style lang="scss" scoped>
  @import "./index.scss";
</style>
