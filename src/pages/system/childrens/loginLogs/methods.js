export default {
  /**
   * 筛选查询
   */
  async handleFilterSearchClick () {
    let param = {}
    param.pageSize = 10
    param.page = 1
    param.searchLogUserName = this.search.searchLogUserName
    if (this.search.time) {
      param.startLogTime = this.search.time[0].Format('yyyy/MM/dd hh:mm:ss')
      param.endLogTime = this.search.time[1].Format('yyyy/MM/dd hh:mm:ss')
    }
    let tableData = await this.request('getTableData', param)
    this.tableData = tableData.rows
    this.total = tableData.total
    this.page.pageSize = tableData.pageSize
    this.page.page = tableData.page
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
  async handlePageChange (page) {
    let param = {}
    param.pageSize = page ? page.pageSize : this.page.pageSize
    param.page = page ? page.page : this.page.page
    param.searchLogUserName = this.search.searchLogUserName
    if (this.search.time) {
      param.startLogTime = this.search.time[0]
      param.endLogTime = this.search.time[1]
    }
    let tableData = await this.request('getTableData', param)
    this.tableData = tableData.rows
    this.total = tableData.total
    this.page.pageSize = tableData.pageSize
    this.page.page = tableData.page
  }
}
