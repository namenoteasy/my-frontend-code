export let life = {
  created () {}
}
export let event = {
  handleCurrentChange (page) {
    this.methods('getSnapOrderData', page)
  },
  handleClickSearch () {
    this.methods('getSnapOrderData')
  },
  handleClickDetails (rowData) {
    this.methods('showDetailsDialog', rowData)
  },
  handleChangeTimer () {
    this.methods('handleChangeTimer')
  },
  handletabsClick () {
    this.methods('handletabsClick')
  }
}
export let watch = {}
