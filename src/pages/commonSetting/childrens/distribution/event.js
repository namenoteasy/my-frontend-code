export let life = {
  created () {
    this.methods('getAllFeature')
  },
  mounted () {
    setTimeout(async () => {
      this.methods('layerSetting')
      this.methods('mapShow')
      await this.methods('getAllFeature')
      this.methods('addFeature', this.deviceData, 'device')
      this.methods('addFeature', this.parkingData, 'parking')
      this.methods('addFeature', this.berthData, 'berth')
    })
  },
  beforeDestroy () {
    // 组件销毁的时候解绑事件
    this.map.un('pointermove')
  }
}
export let event = {
  async getDeviceFeature (event) {
    this.methods('clearFeature', 'searchDevice')
    let searchDeviceData = await this.methods('getDeviceFeature')
    this.methods('addFeature', searchDeviceData, 'searchDevice')
    setTimeout(() => {
      $('.list-item').eq(0).click()
    }, 0)
  },
  preventContextMenu () {

  },
  closeMap () {
    this.methods('closeMap')
  },
  // 点击列表一列
  mouseLeaveItem (event) {
    this.methods('mouseLeaveItem', event)
  },
  // 点击列表一列
  mouseOverItem (event) {
    this.methods('mouseOverItem', event)
  },
  // 点击列表一列
  focusToCenter (event, item) {
    this.methods('focusToCenter', event, item)
  },
  showLayer (layerName) {
    this.methods('showLayer', layerName)
  }
}
export let watch = {

}
