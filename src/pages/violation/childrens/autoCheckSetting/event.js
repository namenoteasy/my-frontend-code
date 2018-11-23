export let life = {
  created () {
    this.methods('getAutoCheckSettingList')
  }
}
export let event = {
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
