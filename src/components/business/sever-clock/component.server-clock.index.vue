<template>
  <div class="children-center" style="height: 120px;">
    <div>
      <div class="time-char" v-for="item in timeStrArr">
        <span v-if="item=='-'" class="time-str-item__white">{{item}}</span>
        <span v-else class="time-str-item">{{item}}</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "index.scss";
</style>
