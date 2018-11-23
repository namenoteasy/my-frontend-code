<template>
  <div  class="img-wrapper" v-loading="loading" element-loading-spinner="iconfont icon-jiazai" element-loading-text="Loading...">
    <img class="img" :src="targetSrc" alt="" ref="lazyload" v-if="!loadError"  @click="$emit('click-img', $event)">
    <div v-else class="no-img">
      <div>
        <i class="iconfont icon-zanwutupian-copy-copy"></i>
        <p class="no-img-word">无图片</p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
  @import "index.scss";
</style>
