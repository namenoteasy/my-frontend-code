export default {
  /**
   * 获取设备api收发日志列表数据
   * @param page
   * @returns {Promise.<void>}
   */
  async getBusinessApiLogsData (page = this.page) {
    // 用于返回第一页
    this.page.no = page.no ? 1 : this.page.no
    let tableData = await this.request('getBusinessApiLogsData', this.search, page)
    this.tableData = tableData.rows
    this.total = tableData.total
  },
  async showDetailsDialog (rowData) {
    let resData = await this.request('getDetailsCheckApi', rowData)
    this.apiData = resData.data
    this.dialogVisible = true
  }
}
