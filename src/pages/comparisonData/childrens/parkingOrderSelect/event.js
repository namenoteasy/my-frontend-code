export let life = {
  created () {}
}
export let event = {
  handleCurrentChange (page) {
    this.methods('getParkingOrderData', page)
  },
  handleClickSearch () {
    this.methods('getParkingOrderData')
  }
}
export let watch = {}
