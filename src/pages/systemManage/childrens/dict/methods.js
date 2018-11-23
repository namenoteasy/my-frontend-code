export default {
  /**
   * 获取字典分组列表
   */
  async getDictList () {
    this.dictList = await this.request('getDictList')
    // this.methods('handleDictClick', this.dictList[0].dictGroupId)
  },
  /**
   * 当前字典详情
   * @param data
   */
  async handleDictClick (data) {
    let details = await this.request('getDictListDetails', data.dictGroupId)
    this.dictDetails.data = details.rows
    if (details.rows.length > 0) {
      this.dictDetails.formData = _.cloneDeep(details.rows[0])
    }
    this.dictGroupId = _.cloneDeep(data.dictGroupId)
  },
  /**
   * 显示添加/修改字典分组窗口
   * @param type 类型
   * @param type data 数据
   */
  handleDictDialogVisible  (type, data) {
    if (type === 'add') {
      this.dict.title = '添加'
      this.dict.formData = {}
      this.dict.type = 'add'
    } else if (type === 'modify') {
      this.dict.title = '修改'
      this.dict.formData = _.cloneDeep(data)
      this.dict.type = 'modify'
    }
    this.dict.visible = true
  },
  /**
   * 添加/修改字典分组From提交
   */
  handleDictSubmit () {
    this.$refs.dictForm.validate(async valid => {
      if (valid) {
        let resData = {}
        if (this.dict.type === 'add') {
          resData = await this.request('addDict', this.dict.formData)
        } else if (this.dict.type === 'modify') {
          resData = await this.request('modifyDict', this.dict.formData)
        }
        if (resData.data.code === '0') {
          this.$message.success('执行成功')
          this.dict.visible = false
          this.methods('getDictList')
        } else {
          this.$message.error(resData.data.message)
        }
      }
    })
  },
  /**
   * 关闭显示添加/修改字典分组窗口，清空表单
   */
  handleDictDialogClose () {
    this.dict.visible = false
    this.dict.formData = {
      dictGroupId: undefined,
      dictGroupName: undefined
    }
  },
  /**
   * 删除字典分组
   */
  handleDictRemove (dictId) {
    this.$confirm('您将要永久删除该数据, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(async () => {
      let resData = await this.request('removedict', {dictGroupId: dictId})
      if (resData.data.code === '0') {
        this.methods('getDictList')
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
   * 显示添加/修改字典详情窗口
   * @param type 类型
   * @param type data 数据
   */
  handleDetailsDialogVisible  (type, data) {
    if (type === 'add') {
      this.dictDetails.title = '添加'
      this.dictDetails.formData = {}
      this.dictDetails.formData.dictGroupId = this.dictGroupId
      this.dictDetails.type = 'add'
    } else if (type === 'modify') {
      this.dictDetails.title = '修改'
      this.dictDetails.formData = _.cloneDeep(data)
      this.dictDetails.formData.dictGroupId = this.dictGroupId
      this.dictDetails.type = 'modify'
    }
    this.dictDetails.visible = true
  },
  /**
   * 添加/修改字典详情From提交
   */
  handleDetailsSubmit () {
    this.$refs.dictDetailsForm.validate(async valid => {
      if (valid) {
        let resData = {}
        let param = this.dictDetails.formData
        if (this.dictDetails.type === 'add') {
          resData = await this.request('adddictDetails', param)
        } else if (this.dictDetails.type === 'modify') {
          resData = await this.request('modifydictDetails', param)
        }
        if (resData.data.code === '0') {
          this.$message.success('执行成功')
          this.dictDetails.visible = false
          this.methods('handleDictClick', param)
        } else {
          this.$message.error(resData.data.message)
        }
      }
    })
  },
  /**
   * 关闭显示添加/修改字典分组窗口详情，清空表单
   */
  handleDetailsDialogClose () {
    this.dictDetails.visible = false
    this.dictDetails.formData = {}
  },
  /**
   * 删除字典详情
   */
  handleDetailsRemove (dictId) {
    this.$confirm('您将要永久删除该数据, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(async () => {
      let resData = await this.request('removeDictDetails', {dictId: dictId})
      if (resData.data.code === '0') {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
        this.methods('handleDictClick', {dictGroupId: this.dictGroupId})
      } else {
        this.$message.error(resData.data.message)
      }
    })
  },
  /**
   * 导入字典
   */
  async handleDictImport () {
    if (this.dictImport.data) {
      let formData = new FormData()
      formData.append('file', this.dictImport.data)
      let resData = await this.request('dictImport', formData)
      if (resData.data.code === '0') {
        this.$message.success('执行成功')
        this.dictImport.visible = false
        this.methods('getOrganizationData')
      } else {
        this.$message.error(resData.data.message)
      }
    }
  }
}
