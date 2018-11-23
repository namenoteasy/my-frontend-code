export default {
  initDeviceTimerLine () {
    let deviceInTimer = new Date(this.deviceInTimer).getTime()
    let deviceOutTimer = new Date(this.deviceOutTimer).getTime()
    let leftTime = deviceOutTimer - deviceInTimer
    let deviceWidth = this.methods('computeWidth', leftTime)
    this.deviceWidth = deviceWidth.width > 68 ? 68 : deviceWidth.width
    this.deviceParkCarTimer = this.methods('parkCarTimer', leftTime)
  },
  initMachineTimerLine () {
    let machineInTimer = new Date(this.machineInTimer).getTime()
    let machineOutTimer = new Date(this.machineOutTimer).getTime()
    let leftTime = machineOutTimer - machineInTimer
    let machineWidth = this.methods('computeWidth', leftTime)
    this.machineWidth = machineWidth.width > 64 ? 64 : machineWidth.width
    this.machineParkCarTimer = this.methods('parkCarTimer', leftTime)
  },
  computeWidth (leftTime) {
    let days = parseInt(leftTime / 1000 / 60 / 60 / 24, 10)
    let tmpTimer
    if (days === 0) {
      tmpTimer = 86400000
    } else if (days < 7 && days !== 0) {
      tmpTimer = 604800000
    } else if (days < 30 && days > 7) {
      tmpTimer = 2592000000
    } else if (days < 365 && days > 30) {
      tmpTimer = 31536000000
    } else {
      tmpTimer = leftTime * 2
    }
    tmpTimer = tmpTimer + 259200000
    console.log(tmpTimer)
    let width = (leftTime / tmpTimer) * 100
    console.log(width)
    return {
      width: width,
      tmpTimer: tmpTimer
    }
  },
  parkCarTimer (leftTime) {
    let days = parseInt(leftTime / 1000 / 60 / 60 / 24, 10) // 计算剩余的天数
    let hours = parseInt(leftTime / 1000 / 60 / 60 % 24, 10) // 计算剩余的小时
    let minutes = parseInt(leftTime / 1000 / 60 % 60, 10)// 计算剩余的分钟
    let seconds = parseInt(leftTime / 1000 % 60, 10)// 计算剩余的秒数
    return days + '天' + hours + '小时' + minutes + '分' + seconds + '秒'
  },
  toIndexPhoto (index) {
    this.$emit('handleToIndexPhoto', index)
  }
}
