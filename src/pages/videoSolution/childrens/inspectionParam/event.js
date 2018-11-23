export let life = {
  created () {
    this.methods('getEditList', this.requestData)
  }
}
export let event = {
  /** *****分页****/
  handleCurrentChange (payload) {
    this.methods('getEditList', payload)
  },
  edit (scope) {
    this.methods('edit', scope)
  },
  /** *开始编辑****/
  beginEdit (scope) {
    this.methods('beginEdit', scope)
  },
  /** *保存编辑****/
  saveEdit (scope) {
    this.methods('saveEdit', scope)
  },
  /** *取消编辑****/
  cancelEdit (scope) {
    this.methods('cancelEdit', scope)
  }
}
export let watch = {}
