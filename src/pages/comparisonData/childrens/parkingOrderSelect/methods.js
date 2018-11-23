export default {
  /**
   * 获取停车订单数据
   * @returns {Promise.<void>}
   */
  async getParkingOrderData (page = this.page) {
    // 用于返回第一页
    this.page.no = page.no ? 1 : this.page.no
    let tableData = await this.request('getParkingOrderData', this.search, page)
    this.tableData = tableData.rows
    this.total = tableData.total
  }
}
