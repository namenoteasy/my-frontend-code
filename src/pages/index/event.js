export let life = {
  created () {
    this.methods('getReport')
    this.methods('getDeviceTime')
    this.methods('getSummaryData')
    this.methods('getRealtimeData')
    this.methods('getCurrent')
    this.systemInterval = setInterval(async () => {
      this.methods('getDeviceTime')
    }, 1000)
  },
  beforeDestroy () {
    clearTimeout(this.systemInterval)
  }
}
export let event = {

}
