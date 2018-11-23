export let life = {
  mounted () {
    this.methods('initDeviceTimerLine')
    this.methods('initMachineTimerLine')
  }
}
export let event = {
  handleClickCheckPhoto (index) {
    this.methods('toIndexPhoto', index)
  }
}
export let watch = {}
