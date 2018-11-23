export let life = {
  created () {
    this.methods('getDeviceList')
  }
}
export let event = {
  /** *****分页****/
  handleCurrentChange (payload) {
    this.methods('handleCurrentChange', payload)
  },
  /** *****确认解除告警*************/
  clickConfirm (scope) {
    this.methods('clickConfirm', scope)
  },
  /** *****点击告警时或者最新图片*************/
  clickGetStatusImg (scope) {
    this.methods('clickGetStatusImg', scope)
  },
  /** *****点击解除告警*************/
  clickAlarmRelease (scope) {
    this.methods('clickAlarmRelease', scope)
  },
  /** *****刷新列表*************/
  clickGetDeviceList () {
    this.methods('getDeviceList')
  }
}
export let watch = {}
