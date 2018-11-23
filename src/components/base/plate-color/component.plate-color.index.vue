<template>
  <!--选择颜色-->
  <div class="select-color" @click.stop="handleSelectClick">
    <div class="plate plate-default" v-if="currentColor === undefined"></div>
    <div class="plate" :style="`backgroundColor: ${currentColor}; border:1px solid #ccc`" v-else></div>
    <el-collapse-transition>
      <div class="plate-drop" v-show="showPlateColor">
        <div class="item" @click="handleConfirmColor(undefined, '')">
          <div class="plate plate-default"></div>
        </div>
        <div class="item" v-for="item in window.util.dict.get('carNumberColour')" @click="handleConfirmColor(item.dictSecondValue, item.dictValue)">
          <div class="plate" :style="`backgroundColor: ${item.dictSecondValue}; border:1px solid #ccc`"></div>
        </div>
      </div>
    </el-collapse-transition>
  </div>
  <!--/选择颜色-->
</template>
<style lang="scss" scoped>
  @import "./index.scss";
</style>
