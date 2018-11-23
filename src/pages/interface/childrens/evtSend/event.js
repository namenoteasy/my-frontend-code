export let life = {
  mounted () {
    this.methods('getEvtTotalList')
  }
}
export let event = {
  handleCurrentChange (page) {
    this.methods('getEvtTotalList', page)
  },
  handleClickSearch () {
    this.methods('getEvtTotalList')
  }
}
export let watch = {}
