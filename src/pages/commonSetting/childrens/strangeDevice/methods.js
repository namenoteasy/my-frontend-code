export default {
  /**
   * 获取陌生设备列表并渲染数据
   * @param page 页码 每页显示条数  默认页码1
   * @returns {Promise.<void>} 无返回值
   */
  async getStrangeDeviceList (page = this.page) {
    // 用于返回第一页
    this.page.no = page.no ? 1 : this.page.no
    let tableData = await this.request('getStrangeDeviceList', this.search, page)
    this.tableData = tableData.rows
    this.total = tableData.total
    // 记录一个旧的页码，用于刷新当前页数据
    this.oldPage = page
  },
  /**
   * 显示设备接入弹窗和数据
   * @param rowData
   * @returns {Promise.<void>} 无返回值
   */
  showDeviceJoinDialog (rowData) {
    this.deviceJoinVisible = true
    // 重置输入框
    this.$nextTick(() => {
      this.$refs.deviceJoinForm.resetFields()
    })
    let formData = {
      name: '',
      parkingCode: '',
      geo: ''
    }
    // 合并允许加入json
    this.deviceJoinForm = Object.assign({}, formData, rowData)
  },
  /**
   * 确定提交允许加入
   * @returns {Promise.<void>} 无返回值
   */
  async confirmDeviceJoin () {
    // 验证是否通过
    this.$refs.deviceJoinForm.validate(async (valid) => {
      if (valid) {
        let param = this.deviceJoinForm
        // 提交接入数据
        let resData = await this.request('submitDeviceJoin', param)
        if (resData.code === '0') {
          this.deviceJoinVisible = false
          this.$message.success(resData.message)
        } else {
          this.$message.error(resData.message)
        }
      } else {
        return false
      }
    })
  }
}
