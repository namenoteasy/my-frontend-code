export let life = {
  created () {
    // 获取角色分组
    this.methods('getListRole')
  }
}
export let event = {
  // 筛选查询
  handleFilterSearchClick (page, sort) {
    this.methods('handleFilterSearchClick', page)
  },
  // 重置筛选条件
  handleFilterResetClick () {
    this.methods('handleFilterResetClick')
  },
  // page改变时会触发
  // handlePageChange (page, sort) {
  //   this.methods('handlePageChange', page)
  // },
  // 选择当前行
  handleRowClick (row) {
    this.methods('handleRowClick', row)
  },
  // 显示添加/修改窗口
  handleDialogVisible (type, data) {
    this.methods('handleDialogVisible', type, data)
  },
  // 添加/修改提交
  handleUserSubmit () {
    this.methods('handleUserSubmit')
  },
  // 关闭显示添加/修改窗口
  handleDialogClose () {
    this.methods('handleDialogClose')
  },
  // 删除用户
  handleUserRemove (userId) {
    this.methods('handleUserRemove', userId)
  },
  // 显示所属角色多选框
  handleRoleSelectVisible () {
    this.methods('handleRoleSelectVisible')
  },
  // 修改所属角色保存
  handleRoleSave () {
    this.methods('handleRoleSave')
  },
  // 显示数据授权多选框
  handleDataSelectVisible () {
    this.methods('handleDataSelectVisible')
  },
  // 修改数据授权保存
  handleDataSave () {
    this.methods('handleDataSave')
  }
}
export let watch = {}
