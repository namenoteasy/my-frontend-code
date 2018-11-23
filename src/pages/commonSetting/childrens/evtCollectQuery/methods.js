export default {
  /**
   * 获取事件总汇查询列表
   * @param page 页码 每页显示条数  默认页码1
   * @returns {Promise.<void>} 无返回值
   */
  async getEvtTotalList (page = this.page) {
    // 用于返回第一页
    this.page.no = page.no ? 1 : this.page.no
    let tableData = await this.request('getEvtTotalList', this.search, page)
    this.tableData = tableData.rows
    this.total = tableData.total
  },
  timerChange () {
    if (!this.timeValue) {
      this.search.startTime = ''
      this.search.endTime = ''
    } else {
      this.search.startTime = this.timeValue[0]
      this.search.endTime = this.timeValue[1]
    }
  },
  /**
   * 显示图片预览
   * @param rowData
   * @returns {Promise.<void>}
   */
  async showViewer (rowData) {
    let imgData = await this.request('getEvtAllPhoto', rowData)
    this.imgData = imgData.picArr
    this.$nextTick(() => {
      require(['../../../../libs/viewer/viewer-jquery.min.js'], () => {
        $('#berthOccupyState_parkingImg').viewer()
        $('#berthOccupyState_parkingImg').viewer('update')
        // 主动触发图片查看
        $('#berthOccupyState_parkingImg img').eq(0).click()
      })
    })
  }
}
