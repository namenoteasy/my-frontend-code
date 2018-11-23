export default {
  /**
   * 获取数据比对审核列表
   * @param page 页码 每页显示条数  默认页码1
   * @returns {Promise.<void>} 无返回值
   */
  async getReportData (page = this.page) {
    this.page.no = page.no ? 1 : this.page.no
    let tableData = await this.request('getReportData', this.search, page)
    this.tableData = tableData.rows
    this.total = tableData.total
  },
  /**
   * 显示弹窗获取数据并渲染
   * @param rowData
   * @returns {Promise.<void>}
   */
  async showDetailsDialog (rowData) {
    this.details.data = await this.request('getDetailsInfo', rowData)
    console.log(this.details.data)
    this.details.visible = true
  },
  /**
   * 点击到第几张图片
   * @param index
   */
  handleToIndexPhoto (index) {
    let swiperComponent = this.$refs.enterSwiper.$refs.myswiper.swiper
    swiperComponent.slideTo(index, 300, false)
  }
}
