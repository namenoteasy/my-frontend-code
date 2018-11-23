export let life = {
  created () {
    this.methods('getSensingDeviceList')
  }
}
export let event = {
  /** *****确认告警*************/
  clickConfirm () {
    this.methods('clickConfirm')
  },
  /** *****人工告警*************/
  alarmManual (scope) {
    this.methods('alarmManual', scope)
  },
  /** *****刷新列表*************/
  clickFreshDeviceList () {
    this.methods('getSensingDeviceList')
  },
  /** *****告警优先*************/
  clickAlertFirst () {
    this.methods('getSensingDeviceList')
  }
}
export let watch = {}
