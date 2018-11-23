<template>
  <div class="car-plate-wrapper">
    <div class="car-photo" :style="`height:${height};line-height:${height}`">
      <img :src="plateData.plateImg" :alt="plateData.plateNumber">
    </div>
    <div class="car-plate-number plate-blue" :style="`height:${height};line-height:${height}`">
      <span>{{plateData.plateNumber}}</span>
    </div>
    <div class="cl"></div>
  </div>
</template>
<style lang="scss" scoped>
  @import "./index.scss";
</style>
