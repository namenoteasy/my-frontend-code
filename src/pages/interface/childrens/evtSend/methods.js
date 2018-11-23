export default {
  /**
   * 获取事件总汇查询列表
   * @param page 页码 每页显示条数  默认页码1
   * @returns {Promise.<void>} 无返回值
   */
  async getEvtTotalList (page = this.page) {
    // 拼接请求页码和搜索参数进行请求
    let param = this.search
    param.page = page.page
    param.pageSize = page.pageSize
    let tableData = await this.request('getEvtTotalList', param)
    this.tableData = tableData.rows
    this.total = tableData.total
  }
}
