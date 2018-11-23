export default {
  /** *****跳转到分布图****/
  clickSelectLocation (geo) {
    this.$router.push({path: '/commonSetting/distribution', query: {geo: geo}})
  },
  /** *编辑****/
  edit (event, scope) {
    this.editRowData[scope.column.prop] = event
  },
  /** *删除行****/
  async deleteRow (scope) {
    let res = await this.request('deleteBerth', scope.row.berthId)
    if (res) { // 成功
      let index = this.tableData.indexOf(scope.row)
      this.tableData.splice(index, index + 1)
      this.$message.success('删除成功')
    } else { // 失败
      this.$message.error('删除失败')
    }
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
    scope.row.editable = false
  },
  /** *保存编辑****/
  saveEdit (scope) {
    this.$confirm('确定保存该条修改？', {title: '提示'}).then(async () => {
      let res = await this.request('editBerth', this.editRowData)
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
      scope.row.editable = false
    })
  },
  /** *****分页****/
  handleCurrentChange (payload) {
    this.requestData.page = payload.page
    this.requestData.pageSize = payload.pageSize
    this.methods('getBerthInfoList')
  },
  async getBerthInfoList () {
    let res = await this.request('pageListBerthInfo', this.requestData)

    // 要添加这个属性才能编辑
    _.each(res.rows, (item) => {
      item.editable = false
    })

    this.tableData = res.rows
  },
  /** *点击确定****/
  async clickConfirm () {
    this.$refs.elForm.validate(async (valid) => {
      if (valid) {
        let res = await this.request('addBerth', this.appendData)
        if (res) { // 成功
          this.dialogVisible = false
          this.$message.success('添加成功')
        } else { // 失败
          this.dialogVisible = false
          this.$message.error('添加失败')
        }
      } else {
        return false
      }
    })
  }
}
