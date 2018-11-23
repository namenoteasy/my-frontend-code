export default {
  async getAutoWachList (page = this.page) {
    let tableData = await this.request('getAutoWachList', page)
    // 先赋值后循环，可编辑
    let tableRowData = tableData.rows
    _.each(tableRowData, function (item) {
      item.editable = false
    })
    this.tableData = tableRowData
    this.total = tableData.total
    this.page = page
  },
  /** *开始编辑****/
  beginEdit (scope) {
    this.editRowData = _.cloneDeep(scope.row)
    this.oldRowData = _.cloneDeep(scope.row)
    _.each(this.tableData, function (item) {
      item.editable = false
    })
    scope.row.editable = true
  },
  /** *取消编辑****/
  cancelEdit (scope) {
    for (let key in this.oldRowData) {
      scope.row[key] = this.oldRowData[key]
    }
    scope.row.editable = false
  },
  /** *保存编辑****/
  saveEdit (scope) {
    this.$confirm('确定保存该条修改？', {title: '提示'}).then(async () => {
      for (let key in this.editRowData) {
        scope.row[key] = this.editRowData[key]
      }
      let resultData = await this.request('submitEditValue', scope.row)
      if (resultData.code === '0') {
        this.$message.success(resultData.message)
        this.methods('getAutoWachList')
      } else {
        this.$message.error(resultData.message)
      }
      scope.row.editable = false
    }).catch(() => {
      this.methods('cancelEdit', scope)
    })
  }
}
