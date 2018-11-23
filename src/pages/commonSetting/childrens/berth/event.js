export let life = {
  created () {
    this.methods('getBerthInfoList')
  }
}
export let event = {
  /** *****跳转到分布图****/
  clickSelectLocation (geo) {
    this.methods('clickSelectLocation', geo)
  },
  /** *****分页****/
  handleCurrentChange (payload) {
    this.methods('handleCurrentChange', payload)
  },
  /** *****搜索****/
  clickGetBerthInfoList () {
    this.methods('getBerthInfoList')
  },
  /** *****编辑单个参数****/
  edit (scope) {
    this.methods('edit', scope)
  },
  /** *****删除行****/
  deleteRow (scope) {
    this.methods('deleteRow', scope)
  },
  /** *开始编辑行****/
  beginEdit (scope) {
    this.methods('beginEdit', scope)
  },
  /** *保存行编辑****/
  saveEdit (scope) {
    this.methods('saveEdit', scope)
  },
  /** *取消行编辑****/
  cancelEdit (scope) {
    this.methods('cancelEdit', scope)
  },
  /** *点击窗口确定****/
  clickConfirm () {
    this.methods('clickConfirm')
  }
}
export let watch = {}
