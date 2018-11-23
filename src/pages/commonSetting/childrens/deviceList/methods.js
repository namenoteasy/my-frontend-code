export default {
  /**
   * 获取设备列表
   * @param page 页码 每页显示条数  默认页码1
   * @returns {Promise.<void>} 无返回值
   */
  async getDeviceList (page = this.page) {
    // 用于返回第一页
    this.page.no = page.no ? 1 : this.page.no
    let tableData = await this.request('getDeviceList', this.search, page)
    this.tableData = tableData.rows
    this.total = tableData.total
    // 记录一个旧的页码，用于刷新当前页数据
    this.oldPage = page
  },
  /**
   * 显示添加设备弹窗
   */
  showAddDeviceDialog (type, rowData) {
    // 添加
    if (type === 'add') {
      this.dialogTitle = '设备接入'
      this.deviceJoinForm = {
        parkingCode: '',
        deviceCode: '',
        deviceType: '',
        name: '',
        mac: '',
        geo: ''
      }
    } else if (type === 'edit') { // 编辑
      this.dialogTitle = '设备信息编辑'
      this.deviceJoinForm = rowData// 重置输入框
    }
    this.$nextTick(() => {
      this.$refs.deviceJoinForm.clearValidate()
    })
    this.deviceJoinFormType = type
    this.deviceJoinVisible = true
  },
  /**
   * 提交添加设备数据
   * @returns {Promise.<void>}
   */
  confirmAddDevice () {
    this.$refs.deviceJoinForm.validate(async valid => {
      if (valid) {
        let param = this.deviceJoinForm
        let resData
        // 提交添加或编辑数据
        if (this.deviceJoinFormType === 'add') {
          resData = await this.request('submitConfirmAddDevice', param)
        } else if (this.deviceJoinFormType === 'edit') {
          resData = await this.request('submitConfirmAddDevice', param)
        }
        if (resData.code === '0') {
          this.deviceJoinVisible = false
          this.$message.success(resData.message)
          this.methods('getDeviceList', this.oldPage)
        } else {
          this.$message.error(resData.message)
        }
      }
    })
  },
  /**
   * 确定删除设备数据
   * @param rowData
   */
  async confirmDelete (rowData) {
    let resFlag
    await this.$confirm('您确定删除该设备?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(async () => {
      // 发送请求
      let resData = await this.request('confirmDeleteDevice', {deviceId: rowData.deviceId})
      // 提示信息
      if (resData.code === '0') {
        this.$message.success(resData.message)
      } else {
        this.$message.error(resData.message)
      }
      // 是否刷新列表
      resFlag = resData.code
    }).catch(() => {
    })
    return resFlag
  }
}
