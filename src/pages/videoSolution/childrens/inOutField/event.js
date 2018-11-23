export let life = {
  created () {}
}
export let event = {
  handleCurrentChange (page) {
    this.methods('getInOutData', page)
  },
  handleClickSearch () {
    this.methods('getInOutData')
  },
  handleChangeTimer () {
    this.methods('handleChangeTimer')
  },
  handleClickCheckProof (rowData) {
    this.methods('showProofDialog', rowData)
  }
}
export let watch = {}
