export default {
  /** *编辑****/
  edit (event, scope) {
    this.editRowData[scope.column.prop] = event
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
      let res = await this.request('changeParam', this.editRowData)
      if (res) { // 成功
        for (let key in this.editRowData) {
          scope.row[key] = this.editRowData[key]
        }
        this.$message.success('设置成功')
      } else { // 失败
        this.$message.error('设置失败')
      }
      scope.row.editable = false
    }).catch(() => {
      this.methods('cancelEdit', scope)
    })
  },
  async getConfigurationList (payload) {
    let res = await this.request('pageListParam', payload)

    // 要添加这个属性才能编辑
    _.each(res.rows, (item) => {
      item.editable = false
    })

    this.tableData = res.rows
  }
}
