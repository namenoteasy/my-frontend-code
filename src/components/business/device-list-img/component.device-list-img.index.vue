<template>
  <div class="img-container">
    <t-img-lazyload :src="item.imgPath" @click-img="$emit('click-img', $event)">
    </t-img-lazyload>
    <span class="snapshot">{{item.shootingType}}</span>
    <slot :item="item"></slot>
  </div>
</template>
<style scoped lang="scss">
  @import "index.scss";
</style>
