<template>
  <div class="expand-button" @click="switchValue">
    <img v-if="isExpand" src="../../../../static/image/lajin.png" alt="">
    <img v-else src="../../../../static/image/lachu.png" alt="">
  </div>
</template>
<style lang="scss" scoped>
  @import "./index.scss";
</style>
