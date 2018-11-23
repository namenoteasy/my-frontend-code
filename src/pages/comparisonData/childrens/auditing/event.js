export let life = {
  created () {}
}
export let event = {
  handleCurrentChange (page) {
    this.methods('getReportData', page)
  },
  handleClickSearch () {
    this.methods('getReportData')
  },
  handleClickDetails (rowData) {
    this.methods('showDetailsDialog', rowData)
  },
  handleToIndexPhoto (index) {
    this.methods('handleToIndexPhoto', index)
  }
}
export let watch = {}
