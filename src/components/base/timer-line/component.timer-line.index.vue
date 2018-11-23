<template>
  <div class="timer-bottom">
    <div class="timer-enter" ref="timerDevice" :style="`width: ${deviceWidth}%; left: 16%;`">
      <div class="timer-log-container">
        <div class="equipment-log">
          <span>设备抓拍记录</span>
          <span>{{deviceParkCarTimer}}</span>
        </div>
        <div class="enter">
          <div>进</div>
          <div>{{deviceInTimer}}</div>
        </div>
        <div class="out">
          <div>出</div>
          <div>{{deviceOutTimer}}</div>
        </div>
      </div>
    </div>
    <div class="timer-out" ref="timerSelf" :style="`width: ${machineWidth}%; left:18%;`">
      <div class="timer-log-container">
        <div class="auto-log">
          <span>自报泊车时长</span>
          <span>{{machineParkCarTimer}}</span>
        </div>
        <div class="enter">
          <div>进</div>
          <div>{{machineInTimer}}</div>
        </div>
        <div class="out">
          <div>出</div>
          <div>{{machineOutTimer}}</div>
        </div>
      </div>
    </div>
    <div class="point-container" :style="`width: ${deviceWidth}%; left:16%;`">
      <el-tooltip class="item" effect="dark" content="点击查看图片" placement="bottom">
        <a href="javascript:;" class="bule-point left" @click="handleClickCheckPhoto(2)"></a>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="点击查看图片" placement="bottom">
        <a href="javascript:;" class="bule-point right" @click="handleClickCheckPhoto(4)"></a>
      </el-tooltip>
      <div class="cl"></div>
    </div>
    <div class="red-arrow-container" :style="`width: ${machineWidth}%; left:18%;`">
      <div class="red-arrow left"></div>
      <div class="red-arrow right"></div>
    </div>
    <div class="ash-arrow"></div>
    <div class="make"></div>
  </div>
</template>
<style lang="scss" scoped>
  @import "./index.scss";
</style>
