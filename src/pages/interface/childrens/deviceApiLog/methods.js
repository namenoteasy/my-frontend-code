export default {
  /**
   * 获取设备api收发日志列表数据
   * @param page
   * @returns {Promise.<void>}
   */
  async getDeviceApiLogsData (page = this.page) {
    // 用于返回第一页
    this.page.no = page.no ? 1 : this.page.no
    let tableData = await this.request('getDeviceApiLogsData', this.search, page)
    this.tableData = tableData.rows
    this.total = tableData.total
  },
  /**
   * 格式化时间
   */
  handleChangeTimer () {
    if (!this.timeValue) {
      this.search.startTime = ''
      this.search.endTime = ''
    } else {
      this.search.startTime = this.timeValue[0]
      this.search.endTime = this.timeValue[1]
    }
  },
  async showDetailsDialog (rowData) {
    let resData = await this.request('getDetailsCheckApi', rowData)
    this.apiData = resData.data
    this.dialogVisible = true
  }
}
