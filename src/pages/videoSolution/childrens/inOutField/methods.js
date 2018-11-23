export default {
  /**
   * 获取出入场事件列表
   * @param page 页码 每页显示条数  默认页码1
   * @returns {Promise.<void>} 无返回值
   */
  async getInOutData (page = this.page) {
    this.page.no = page.no ? 1 : this.page.no
    let tableData = await this.request('getInOutData', this.search, page)
    this.tableData = tableData.rows
    this.total = tableData.total
    this.oldPage = page
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
  /**
   * 显示弹窗获取数据并渲染
   * @param rowData
   * @returns {Promise.<void>}
   */
  async showProofDialog (rowData) {
    this.checkProof.data = await this.request('getProofInfo', rowData)
    this.checkProof.visible = true
  }
}
