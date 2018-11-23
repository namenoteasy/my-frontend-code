export let life = {
  created () {
    this.methods('getProtocolList', this.requestData)
  }
}
export let event = {
  /** *****分页****/
  handleCurrentChange (payload) {
    this.methods('getProtocolList', payload)
  }
}
export let watch = {}
