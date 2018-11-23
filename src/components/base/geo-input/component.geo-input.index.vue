<template>
  <div>
    <el-input v-model="geoValue" :disabled="true">
      <i slot="suffix" class="iconfont icon-jingweidudingwei" @click="showMap"></i>
    </el-input>
    <el-dialog custom-class="small-lonlat-dialog" :modal="false" v-if="mapAside" title="获取经纬度" width="710px" :visible.sync="dialogVisible">
      <t-map-lonlat @change-location="setLocation"></t-map-lonlat>
    </el-dialog>
    <el-dialog v-else title="获取经纬度" top="55px" width="1280px" :visible.sync="dialogVisible">
      <t-map-lonlat @change-location="setLocation"></t-map-lonlat>
    </el-dialog>
  </div>
</template>
<style lang="scss" scoped>
  @import "index.scss";
</style>
