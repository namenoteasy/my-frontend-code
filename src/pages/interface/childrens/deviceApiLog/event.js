export let life = {}
export let event = {
  handleCurrentChange (page) {
    this.methods('getDeviceApiLogsData', page)
  },
  handleClickCheckApi (rowData) {
    this.methods('showDetailsDialog', rowData)
  },
  handleChangeTimer () {
    this.methods('handleChangeTimer')
  },
  handleClickSearch () {
    this.methods('getDeviceApiLogsData')
  }
}
export let watch = {}
