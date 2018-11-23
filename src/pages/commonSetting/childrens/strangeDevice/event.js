export let life = {
  created () {}
}
export let event = {
  handleCurrentChange (page) {
    this.methods('getStrangeDeviceList', page)
  },
  handleClickSearch () {
    this.methods('getStrangeDeviceList')
  },
  handleClickJoin (rowData) {
    this.methods('showDeviceJoinDialog', rowData)
  },
  handleClickConfirmDeviceJoin () {
    this.methods('confirmDeviceJoin')
  }
}
export let watch = {}
