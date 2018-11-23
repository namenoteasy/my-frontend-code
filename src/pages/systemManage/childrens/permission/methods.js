export default {
  /**
   * 筛选查询
   */
  async handleFilterSearchClick (page) {
    let param = this.search
    param.pageSize = page ? page.pageSize : 10
    param.page = page ? page.page : 1
    let tableData = await this.request('getTableData', param)
    this.tableData = tableData.rows
    this.total = tableData.total
    this.page.pageSize = tableData.pageSize
    this.page.page = tableData.page
  },
  /**
   * 重置筛选条件
   */
  handleFilterResetClick () {
    this.page.page = 1
    this.page.pageSize = 10
    this.search = _.cloneDeep(this.reset)
    this.methods('handleFilterSearchClick', this.page)
  },
  /**
   * 页数发生改变
   * @param page
   */
  async handlePageChange (page) {
    this.methods('handleFilterSearchClick', page)
  },
  /**
   * 显示添加/修改窗口
   * @param type 类型
   * @param type data 数据
   */
  handleDialogVisible  (type, data) {
    if (type === 'add') {
      this.permission.title = '添加'
      this.permission.type = 'add'
    } else if (type === 'modify') {
      this.permission.title = '修改'
      this.permission.formData = _.cloneDeep(data)
      this.permission.type = 'modify'
    }
    this.permission.visible = true
  },
  /**
   * 添加/修改From提交
   */
  handlepermissionSubmit () {
    this.$refs.permissionForm.validate(async valid => {
      if (valid) {
        let resData = {}
        if (this.permission.type === 'add') {
          resData = await this.request('addPermission', this.permission.formData)
        } else if (this.permission.type === 'modify') {
          resData = await this.request('modifyPermission', this.permission.formData)
        }
        if (resData.data.code === '0') {
          this.$message.success('执行成功')
          this.methods('handleDialogClose')
          this.methods('handleFilterSearchClick')
        } else {
          this.$message.error(resData.data.message)
        }
      }
    })
  },
  /**
   * 关闭显示添加/修改窗口，清空表单
   */
  handleDialogClose () {
    this.permission.visible = false
    this.permission.formData = {}
  },
  /**
   * 删除用户
   */
  handlePermissionRemove (authId) {
    this.$confirm('您将要永久删除该数据, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(async () => {
      let resData = await this.request('handlePermissionRemove', authId)
      if (resData.data.code === '0') {
        this.methods('handleFilterSearchClick')
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      } else {
        this.$message.error(resData.data.message)
      }
    })
  },
  /**
   * 导入
   */
  async handlePermissionImport () {
    if (this.permissionImport.data) {
      let formData = new FormData()
      formData.append('file', this.permissionImport.data)
      let resData = await this.request('permissionImport', formData)
      if (resData.data.code === 0) {
        this.$message.success('执行成功')
        this.permissionImport.visible = false
        this.methods('handleFilterSearchClick')
      } else {
        this.$message.error(resData.data.message)
      }
    }
  },
  /**
   * 导出
   */
  async handlePermissionExport () {
    if (this.permissionExport.data) {
      let formData = new FormData()
      formData.append('file', this.permissionExport.data)
      let resData = await this.request('permissionExport', formData)
      if (resData.data.code === 0) {
        this.$message.success('执行成功')
        this.permissionExport.visible = false
      } else {
        this.$message.error(resData.data.message)
      }
    }
  }
}
