<template>
  <div ref="imgWrapper" :class="{wrapper:true,'gray-border':border}">
    <slot></slot>
  </div>
</template>
<style scoped lang="scss">
  @import "index.scss";
</style>
