export let life = {
  async mounted () {}
}
export let event = {
  handleCurrentChange (page) {
    this.methods('getDeviceNexusList', page)
    // this.methods('hideBerthPopup')
  },
  handleCloseSidebar () {
    this.methods('hideBerthPopup')
  },
  handleRowClick (row, event, column) {
    this.methods('showBerthPopup', row)
  },
  handleClickSaveBerth () {
    this.methods('saveBerth')
  },
  handleClickRecoveryBerth () {
    this.methods('showBerthPopup')
  }
}
export let watch = {}
