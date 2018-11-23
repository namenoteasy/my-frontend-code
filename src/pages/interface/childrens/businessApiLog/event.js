export let life = {}
export let event = {
  handleClickSearch () {
    this.methods('getBusinessApiLogsData')
  },
  handleClickCheckApi (rowData) {
    this.methods('showDetailsDialog', rowData)
  },
  handleCurrentChange (page) {
    this.methods('getBusinessApiLogsData', page)
  }
}
export let watch = {}
