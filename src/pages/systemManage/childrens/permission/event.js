export let life = {}
export let event = {
  // 筛选查询
  handleFilterSearchClick () {
    this.methods('handleFilterSearchClick')
  },
  // 重置筛选条件
  handleFilterResetClick () {
    this.methods('handleFilterResetClick')
  },
  // page改变时会触发
  handlePageChange (page, sort) {
    this.methods('handlePageChange', page)
  },
  // 显示添加/修改窗口
  handleDialogVisible (type, data) {
    this.methods('handleDialogVisible', type, data)
  },
  // 添加/修改提交
  handlepermissionSubmit () {
    this.methods('handlepermissionSubmit')
  },
  // 关闭显示添加/修改窗口
  handleDialogClose () {
    this.methods('handleDialogClose')
  },
  // 删除权限
  handlePermissionRemove (id) {
    this.methods('handlePermissionRemove', id)
  },
  // 导入
  handlePermissionImport () {
    this.methods('handlePermissionImport')
  },
  // 导出
  handlePermissionExport () {
    this.methods('handlePermissionExport')
  }
}
export let watch = {}
