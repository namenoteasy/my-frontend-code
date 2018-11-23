<template>
  <div>
    <div class="img-container">
        <t-img-lazyload :src="item.imgPath" >
        </t-img-lazyload>
      <span class="snapshot">{{item.shootingType}}</span>
      <slot :item="item"></slot>
    </div>
    <p class="desc">{{item.parkingName}}  -  {{item.deviceCode}}  -  {{item.time}}</p>
  </div>
</template>
<style scoped lang="scss">
  @import "index.scss";
</style>
