export default {
  /**
   * 获取接口配置列表数据
   * @param page
   * @returns {Promise.<void>}
   */
  async getApiSettingData (page = this.page) {
    let tableData = await this.request('getApiSettingData', page)
    _.each(tableData.rows, function (item) {
      item.editable = false
    })
    this.tableData = tableData.rows
    this.total = tableData.total
    // 覆盖页码，用于刷新当前页数据
    this.page = page
  },
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
      for (let key in this.editRowData) {
        scope.row[key] = this.editRowData[key]
      }
      let resData = await this.request('reqCompleteEdit', scope.row)
      if (resData.code === '0') {
        this.$message.success(resData.message)
      } else {
        this.$message.error(resData.message)
      }
      this.methods('getApiSettingData')
      scope.row.editable = false
    }).catch(() => {
      this.methods('cancelEdit', scope)
    })
  }
}
