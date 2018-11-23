export default {
  /**
   * 筛选查询
   */
  async handleFilterSearchClick (page) {
    let param = {}
    param.pageSize = page ? page.pageSize : 10
    param.page = page ? page.page : 1
    param.searchOperationObject = this.search.searchOperationObject
    param.searchOperationActive = this.search.searchOperationActive
    if (this.search.time) {
      param.startOperationTime = this.search.time[0].Format('yyyy/MM/dd hh:mm:ss')
      param.endOperationTime = this.search.time[1].Format('yyyy/MM/dd hh:mm:ss')
    }
    console.log(param)
    let tableData = await this.request('getTableData', param)
    this.tableData = tableData.rows
    this.total = tableData.total
    this.page.pageSize = tableData.pageSize
    this.page.page = tableData.page
    if (this.tableData.length > 0) {
      this.operationLogs = this.tableData[0]
    } else {
      this.operationLogs = {}
    }
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
    this.methods('handleFilterSearchClick', page)
  },
  /**
   * 当前行详情
   * @param row
   */
  async handleRowClick (row) {
    this.operationLogs = row
  }
}
