export let life = {
  created () {}
}
export let event = {
  handleCurrentChange (page) {
    this.methods('getEvtAuditingData', page)
  },
  handleClickManualReview (rowData) {
    this.methods('showManualReviewDialog', rowData)
  },
  handleClickConfirm () {
    this.methods('submitAuditing')
    this.methods('getEvtAuditingData')
  },
  handleClickCancel () {
    this.methods('cancelAuditing')
    this.methods('getEvtAuditingData')
  }
}
export let watch = {}
