export default {
  /**
   * 获取角色列表
   */
  async getRolesList () {
    this.allAuthList = await this.request('getAllAuthList')
    this.tableData = _.cloneDeep(this.allAuthList)
    this.rolesList = await this.request('getRolesList')
    // this.methods('handlerolesClick', this.rolesList[0].id)
    this.methods('initAllAuthList', _.cloneDeep(this.allAuthList))
  },
  /**
   * 把数据初始化成树形结构
   * @param data
   */
  initAllAuthList (data) {
    let allAuthList = []
    // 第一级模块名称
    data.forEach((item) => {
      if (item.authName && item.authName.indexOf('查询') > -1 && item.authSort === 1) {
        this.firstAuthList.push(item)
      }
      if (item.authType === 'menu' && !item.authParent) {
        item.children = []
        allAuthList.push(item)
      }
    })
    allAuthList = allAuthList.sort(function (a, b) {
      return parseInt(a.authSort) - parseInt(b.authSort)
    })
    // 第二级页面名称
    data.forEach((item) => {
      if (item.authType === 'menu' && item.authParent) {
        let auth = allAuthList.find(i => item.authParent === i.authKey)
        if (auth) {
          item.children = []
          this.$set(this.checkList, item.authId, [])
          this.$set(this.allCheckList, item.authId, {})
          auth.children.push(item)
          auth.children = auth.children.sort(function (a, b) {
            return parseInt(a.authSort) - parseInt(b.authSort)
          })
        }
      }
    })
    // 第三级权限名称
    data.forEach((item) => {
      if (item.authType === 'view' && item.authParent) {
        allAuthList.forEach((a) => {
          let auth = a.children.find(i => item.authParent === i.authKey)
          if (auth) {
            item.children = []
            auth.children.push(item)
            // this.allCheckList[auth.authName].push(item.authId)
            this.$set(this.allCheckList[auth.authId], item.authId, [])
            auth.children = auth.children.sort(function (a, b) {
              return parseInt(a.authSort) - parseInt(b.authSort)
            })
          }
        })
      }
    })
    // 第四级命令名称
    data.forEach((item) => {
      if (item.authType === 'ui' && item.authParent) {
        allAuthList.forEach((list) => {
          list.children.forEach((a) => {
            let auth = a.children.find(i => item.authParent === i.authKey)
            if (auth) {
              auth.children.push(item)
              this.allCheckList[a.authId][auth.authId].push(item.authId)
              auth.children = auth.children.sort(function (a, b) {
                return parseInt(a.authSort) - parseInt(b.authSort)
              })
            }
          })
        })
      }
    })
    this.authTree = allAuthList
  },
  /**
   * 当前角色详情
   * @param data
   */
  async handleRolesClick (data) {
    this.rolesDetails.visible = false
    this.rolesDetails.data = data
    this.rolesDetails.search.roleId = data.roleId
    let param = this.rolesDetails.search
    let list = await this.request('getRolesListDetails', param)
    this.methods('getCurrentAuthList', list)
    this.rolesDetails.formData = list
  },
  /**
   * 判断是否是已有权限
   * @param data
   */
  async getCurrentAuthList (data) {
    this.currentAuth = []
    this.tableData.forEach((item, index) => {
      if (!this.currentAuth[item.authId]) {
        data.forEach((i) => {
          if (i === item.authId) {
            this.currentAuth[item.authId] = 'true'
            return false
          }
        })
      }
    })
  },
  /**
   * 显示添加/修改窗口
   * @param type 类型
   * @param type data 数据
   */
  handleDialogVisible  (type, data) {
    if (type === 'add') {
      this.roles.title = '添加'
      this.roles.formData = {}
      this.roles.type = 'add'
    } else if (type === 'modify') {
      this.roles.title = '修改'
      this.roles.formData = _.cloneDeep(data)
      this.roles.type = 'modify'
    }
    this.roles.visible = true
  },
  /**
   * 添加/修改From提交
   */
  handleOnSubmit () {
    this.$refs.rolesForm.validate(async valid => {
      if (valid) {
        let resData = {}
        if (this.roles.type === 'add') {
          resData = await this.request('addRoles', this.roles.formData)
        } else if (this.roles.type === 'modify') {
          resData = await this.request('modifyRoles', this.roles.formData)
        }
        if (resData.data.code === '0') {
          this.$message.success('执行成功')
          this.methods('handleDialogClose')
          this.methods('getRolesList')
          // this.methods('getRolesData')
        } else {
          this.$message.error(resData.data.message)
        }
      }
    })
  },
  /**
   * 关闭显示添加/修改字典分组窗口，清空表单
   */
  handleDialogClose () {
    this.roles.visible = false
    this.roles.formData = {}
  },
  /**
   * 删除角色列表
   */
  handleRolesRemove (rolesId) {
    this.$confirm('您将要永久删除该数据, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(async () => {
      let resData = await this.request('removeRoles', rolesId)
      if (resData.data.code === '0') {
        this.methods('getRolesList')
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
   * 角色权限修改
   */
  async handleUpdateClick () {
    this.rolesDetails.visible = true
    for (let item in this.allCheckList) {
      this.checkList[item] = []
    }
    for (let item in this.allCheckList) {
      if (this.rolesDetails.formData) {
        this.rolesDetails.formData.forEach((i) => {
          for (let list in this.allCheckList[item]) {
            if (list === i) {
              this.checkList[item].push(list)
            }
            let auth = this.allCheckList[item][list].find(a => i === a)
            if (auth) {
              this.checkList[item].push(list)
            }
          }
        })
      }
    }
  },
  /**
   * 设置勾选的数据
   * @param selection
   */
  setSelections (selection) {
    this.rolesDetails.selections = selection
  },
  /**
   * 角色权限修改保存
   */
  async handleUpdateSubmit () {
    let roleAuthIds = []
    let fatherList = []
    if (this.checkList) {
      for (let item in this.allCheckList) {
        for (let a in this.checkList) {
          this.checkList[a].forEach((i) => {
            for (let b in this.allCheckList[item]) {
              if (i === b) {
                let authN = roleAuthIds.find(h => i === h)
                if (!authN) {
                  roleAuthIds.push(i)
                }
                this.allCheckList[item][b].forEach((c) => {
                  let auth = roleAuthIds.find(i => c === i)
                  if (!auth) {
                    roleAuthIds.push(c)
                  }
                })
                let auth2 = roleAuthIds.find(d => a === d)
                if (!auth2) {
                  roleAuthIds.push(a)
                  fatherList.push(a)
                }
              }
            }
          })
        }
      }
      for (let item in this.authTree) {
        this.authTree[item].children.forEach((i) => {
          let auth = fatherList.find(a => i.authId === a)
          if (auth) {
            let auth1 = roleAuthIds.find(d => this.authTree[item].authId === d)
            if (!auth1) {
              roleAuthIds.push(this.authTree[item].authId)
            }
          }
        })
      }
    }
    let resData = await this.request('modifyRolesDetails', {
      roleId: this.rolesDetails.data.roleId,
      roleAuthIds: roleAuthIds
    })
    if (resData.data.code === '0') {
      this.methods('handleRolesClick', this.rolesDetails.data)
      this.rolesDetails.visible = false
      this.$message({
        type: 'success',
        message: '保存成功!'
      })
    } else {
      this.$message.error(resData.data.message)
    }
  },
  /**
   * 筛选查询
   */
  async handleFilterSearchClick () {
    let tableData = []
    this.allAuthList.forEach((item) => {
      if (this.rolesDetails.search.authKey && item.authKey && item.authKey.indexOf(this.rolesDetails.search.authKey) > -1 && this.rolesDetails.search.authName && item.authName && item.authName.indexOf(this.rolesDetails.search.authName) > -1) {
        tableData.push(item)
      } else if (this.rolesDetails.search.authKey && item.authKey && item.authKey.indexOf(this.rolesDetails.search.authKey) > -1 && !this.rolesDetails.search.authName) {
        tableData.push(item)
      } else if (!this.rolesDetails.search.authKey && this.rolesDetails.search.authName && item.authName && item.authName.indexOf(this.rolesDetails.search.authName) > -1) {
        tableData.push(item)
      } else if (!this.rolesDetails.search.authKey && !this.rolesDetails.search.authName) {
        tableData.push(item)
      }
    })
    this.tableData = tableData
  },
  /**
   * 重置筛选条件
   */
  handleFilterResetClick () {
    this.rolesDetails.search = _.cloneDeep(this.rolesDetails.reset)
    this.methods('handleFilterSearchClick')
  },
  handleAuthChange ($event, val) {
    for (let item in this.allCheckList) {
      let indexItem
      for (let b in this.allCheckList[item]) {
        let auth = this.firstAuthList.find(i => b === i.authId)
        if (auth) {
          indexItem = b
        }
      }
      for (let b in this.allCheckList[item]) {
        if (val === b && $event) {
          if (b !== indexItem) {
            let auth = this.checkList[item].find(i => indexItem === i)
            if (!auth) {
              this.checkList[item].push(indexItem)
            }
          }
        } else if (val === b && !$event) {
          if (b === indexItem) {
            this.checkList[item] = []
          }
        }
      }
    }
  }
}
