export let life = {
  created () {
    // 获取字典分组列表
    this.methods('getDictList')
  }
}
export let event = {
  // 选择字典分组
  handleDictClick (data) {
    this.methods('handleDictClick', data)
  },
  // 显示添加/修改字典分组窗口
  handleDictDialogVisible (type, data) {
    this.methods('handleDictDialogVisible', type, data)
  },
  // 添加/修改字典分组提交
  handleDictSubmit () {
    this.methods('handleDictSubmit')
  },
  // 关闭显示添加/修改字典分组窗口
  handleDictDialogClose () {
    this.methods('handleDictDialogClose')
  },
  // 删除字典分组
  handleDictRemove (dictId) {
    this.methods('handleDictRemove', dictId)
  },
  // 显示添加/修改字典详情列表窗口
  handleDetailsDialogVisible (type, data) {
    this.methods('handleDetailsDialogVisible', type, data)
  },
  // 添加/修改字典详情提交
  handleDetailsSubmit () {
    this.methods('handleDetailsSubmit')
  },
  // 关闭显示添加/修改字典详情列表窗口
  handleDetailsDialogClose () {
    this.methods('handleDetailsDialogClose')
  },
  // 删除字典详情
  handleDetailsRemove (id) {
    this.methods('handleDetailsRemove', id)
  },
  // 字典导入
  handleDictImport () {
    this.methods('handleDictImport')
  }
}
export let watch = {}
