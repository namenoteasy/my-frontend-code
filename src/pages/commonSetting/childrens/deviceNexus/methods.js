export default {
  /**
   * 获取停车区设备列表
   * @param page 页码 每页显示条数  默认页码1
   * @returns {Promise.<void>} 无返回值
   */
  async getDeviceNexusList (page = this.page) {
    // 拼接请求页码和搜索参数进行请求
    let tableData = await this.request('getDeviceNexusList', page)
    this.tableData = tableData.rows
    this.total = tableData.total
    return this.tableData
  },
  /**
   * 隐藏泊位号弹窗
   */
  hideBerthPopup () {
    // 隐藏设备泊位号侧边栏
    this.sidebarVisible = false
    // 调整表格宽度
    this.tableSpan = 24
    // 通知表格更新自适应宽度
    this.$refs.tables.handleAutoExpand()
  },
  /**
   * 打开侧边栏并获取数据
   * @param row
   * @returns {Promise.<void>}
   */
  async showBerthPopup (row = this.nexusListItem) {
    // 传值发送获取请求
    let resultData = await this.request('getBerthNumber', row)
    // 泊位号下拉列表
    this.berthSidebar.berthCodeArr = resultData.berthCodeArr
    // 泊位号已有的数据
    this.berthSidebar.berthArr = resultData.rows

    // 显示侧边栏
    this.sidebarVisible = true
    // 调整表格宽度
    this.tableSpan = 16
    // 保存这行数据
    this.nexusListItem = row
    // 通知表格更新自适应宽度
    this.$refs.tables.handleAutoExpand()
    // 高亮显示当前行
    this.$refs.tables.$refs.table.setCurrentRow(row)
  },
  /**
   * 保存泊位号
   * @returns {Promise.<void>}
   */
  async saveBerth () {
    let param = {
      deviceId: this.nexusListItem.deviceId,
      berthCodeList: JSON.stringify(this.berthSidebar.berthArr)
    }
    let resultData = await this.request('submitSaveBerth', param)
    if (resultData.code === '0') {
      this.$message.success(resultData.message)
      // 隐藏设备泊位号侧边栏
      this.methods('hideBerthPopup')
    } else {
      this.$message.error(resultData.message)
    }
  }
}
