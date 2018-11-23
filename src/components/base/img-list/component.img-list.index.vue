<template>
  <div class="scroller" ref="imgScroller">
    <!--卡片-->
    <div v-for="(item,index) in imgData" :key="index" class="img-card">
      <slot :item="item"></slot>
    </div>
  </div>
</template>
<style scoped lang="scss">
  @import "index.scss";
</style>
