export let life = {
  created () {
    // 获取角色列表
    this.methods('getRolesList')
  }
}
export let event = {
  // 选择角色列表
  handleRolesClick (data) {
    this.methods('handleRolesClick', data)
  },
  // 显示添加/修改窗口
  handleDialogVisible (type, data) {
    this.methods('handleDialogVisible', type, data)
  },
  // 添加/修改提交
  handleOnSubmit () {
    this.methods('handleOnSubmit')
  },
  // 关闭显示添加/修改窗口
  handleDialogClose () {
    this.methods('handleDialogClose')
  },
  // 删除角色列表
  handleRolesRemove (dictId) {
    this.methods('handleRolesRemove', dictId)
  },
  // 筛选查询
  handleFilterSearchClick () {
    this.methods('handleFilterSearchClick')
  },
  // 重置筛选条件
  handleFilterResetClick () {
    this.methods('handleFilterResetClick')
  },
  // 角色权限修改
  handleUpdateClick () {
    this.methods('handleUpdateClick')
  },
  // 表格勾选
  handleSelect (selection) {
    this.methods('setSelections', selection)
  },
  // 角色权限修补保存
  handleUpdateSubmit () {
    this.methods('handleUpdateSubmit')
  },
  // 权限勾选
  handleAuthChange ($event, val) {
    this.methods('handleAuthChange', $event, val)
  }
}
export let watch = {}
