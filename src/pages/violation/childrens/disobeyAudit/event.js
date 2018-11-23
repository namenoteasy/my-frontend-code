export let life = {
  created () {
    this.methods('getViolationReviewList')
  }
}
export let event = {
  handleCurrentChange (page) {
    this.methods('getViolationReviewList', page)
  },
  handleClickSearch () {
    this.methods('getViolationReviewList')
  },
  handleClickDetails (rowData) {
    this.methods('showDetailsDialog', rowData)
  },
  handleClickDisobeyRust (credibleFlag) {
    this.methods('disobeyIsRust', credibleFlag)
    this.methods('getViolationReviewList')
  }
}
export let watch = {}
