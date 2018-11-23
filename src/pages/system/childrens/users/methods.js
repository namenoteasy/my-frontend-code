export default {
  /**
   * 筛选查询
   */
  async handleFilterSearchClick (page) {
    let param = this.search
    param.pageSize = page ? page.pageSize : 10
    param.page = page ? page.page : 1
    let tableData = await this.request('getTableData', param)
    if (tableData.rows.length < 1) {
      this.currentRow = {}
      this.role.checkAllList = []
      this.role.data = []
      this.role.check = []
    }
    this.tableData = tableData.rows
    this.total = tableData.total
    this.page.pageSize = tableData.pageSize
    this.page.page = tableData.page
  },
  /**
   * 所有角色分组
   * @param row
   */
  async getListRole () {
    this.authorization = await this.request('getListRole')
  },
  /**
   * 当前行详情
   * @param row
   */
  async handleRowClick (row) {
    this.currentRow = row
    let role = await this.request('getRoleList', row)
    let roleData = []
    if (this.authorization) {
      this.role.checkAllList = _.cloneDeep(this.authorization)
      this.authorization.forEach((item) => {
        if (role) {
          role.forEach((i) => {
            if (item.roleId === i) {
              roleData.push(item)
            }
          })
        }
      })
      this.role.data = roleData
      let roleCheck = []
      if (roleData.length > 0) {
        roleData.forEach((item) => {
          roleCheck.push(item.roleId)
        })
      }
      this.role.check = roleCheck
      this.role.visible = false
    }
  },
  /**
   * 重置筛选条件
   */
  handleFilterResetClick () {
    this.search = _.cloneDeep(this.reset)
    this.methods('handleFilterSearchClick')
  },
  /**
   * 页数发生改变
   * @param page
   */
  // async handlePageChange (page) {
  //   let param = this.search
  //   param.pageSize = page.pageSize
  //   param.page = page.page
  //   let tableData = await this.request('getTableData', param)
  //   this.tableData = tableData.rows
  //   this.total = tableData.total
  // },
  /**
   * 显示添加/修改窗口
   * @param type 类型
   * @param type data 数据
   */
  handleDialogVisible  (type, data) {
    if (type === 'add') {
      this.user.title = '添加'
      this.user.type = 'add'
    } else if (type === 'modify') {
      this.user.title = '修改'
      this.user.formData = _.cloneDeep(data)
      this.user.formData.organizationId = {id: this.user.formData.organizationId}
      this.user.type = 'modify'
    }
    this.user.visible = true
  },
  /**
   * 添加/修改From提交（判断是否修改图片）
   */
  handleUserSubmit () {
    this.$refs.userForm.validate(async valid => {
      if (valid) {
        if (this.user.formData.userProfilePhoto && typeof this.user.formData.userProfilePhoto === 'object') {
          let reader = new window.FileReader()
          let userProfilePhoto = this.user.formData.userProfilePhoto
          reader.readAsDataURL(userProfilePhoto)
          reader.onloadend = async () => {
            this.user.formData.userProfilePhoto = reader.result.substring(22) // 'data:image/png;base64,'
            this.methods('handleUserSubmitSave')
          }
        } else {
          this.methods('handleUserSubmitSave')
        }
      }
    })
  },
  /**
   * 添加/修改From提交
   */
  async handleUserSubmitSave () {
    let resData = {}
    if (this.user.type === 'add') {
      resData = await this.request('addUser', this.user.formData)
    } else if (this.user.type === 'modify') {
      resData = await this.request('modifyUser', this.user.formData)
    }
    if (resData.data.code === '0') {
      this.$message.success('执行成功')
      this.user.visible = false
      this.methods('handleFilterSearchClick')
    } else {
      this.$message.error(resData.data.message)
    }
  },
  /**
   * 关闭显示添加/修改窗口，清空表单
   */
  handleDialogClose () {
    this.user.visible = false
    this.user.formData = {}
  },
  /**
   * 删除用户
   */
  handleUserRemove (userId) {
    this.$confirm('您将要永久删除该数据, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(async () => {
      let resData = await this.request('handleUserRemove', userId)
      if (resData.data.code === '0') {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
        this.methods('handleFilterSearchClick')
      } else {
        this.$message.error(resData.data.message)
      }
    })
  },
  // 显示所属角色多选框
  handleRoleSelectVisible () {
    this.role.visible = true
  },
  // 修改所属角色保存
  async handleRoleSave () {
    let resData = await this.request('modifyUserDetails', {userId: this.currentRow.userId, userRoleIds: this.role.check})
    if (resData.data.code === '0') {
      this.$message.success('执行成功')
      this.role.visible = false
      let roleData = []
      this.role.checkAllList.forEach((item) => {
        if (this.role.check.length > 0) {
          this.role.check.forEach((i) => {
            if (item.roleId === i) {
              roleData.push(item)
            }
          })
        }
      })
      this.role.data = roleData
    } else {
      this.$message.error(resData.data.message)
    }
  },
  handleRoleCheckAllChange (val) {
    this.this.role.check = val ? this.role.checkAllList : []
    this.role.isIndeterminate = false
  },
  handleRoleCheckChange (value) {
    let checkedCount = value.length
    this.role.checkAll = checkedCount === this.role.check.length
    this.role.isIndeterminate = checkedCount > 0 && checkedCount < this.role.check.length
  },
  // 显示数据授权多选框
  handleDataSelectVisible () {
    this.dataAuthorization.visible = true
  },
  // 修改数据授权保存
  async handleDataSave () {
    let resData = await this.request('modifyUserDetails', this.currentRow, this.this.dataAuthorization.check)
    if (resData.data.code === '0') {
      this.$message.success('执行成功')
      this.dataAuthorization.visible = false
      this.dataAuthorization.data = this.dataAuthorization.check
    } else {
      this.$message.error(resData.data.message)
    }
  },
  handleDataCheckAllChange (val) {
    this.this.dataAuthorization.check = val ? this.dataAuthorization.checkAllList : []
    this.dataAuthorization.isIndeterminate = false
  },
  handleDataCheckChange (value) {
    let checkedCount = value.length
    this.dataAuthorization.checkAll = checkedCount === this.dataAuthorization.check.length
    this.dataAuthorization.isIndeterminate = checkedCount > 0 && checkedCount < this.dataAuthorization.check.length
  }
}
