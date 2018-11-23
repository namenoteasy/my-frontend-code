export let life = {
  created () {}
}
export let event = {
  handleCurrentChange (page) {
    this.methods('getEvtTotalList', page)
  },
  handleClickShowViewer (rowData) {
    this.methods('showViewer', rowData)
  },
  handleClickSearch () {
    this.methods('getEvtTotalList')
  },
  handleTimerChange () {
    this.methods('timerChange')
  }
}
export let watch = {}
