export let life = {
  mounted () {
    this.methods('layerSetting')
    this.methods('mapShow')
  },
  beforeDestroy () {
    // 组件销毁的时候解绑事件
    this.map.un('pointermove')
  }
}
export let event = {
  preventContextMenu () {

  },
  closeMap () {
    this.methods('closeMap')
  }
}
export let watch = {

}
