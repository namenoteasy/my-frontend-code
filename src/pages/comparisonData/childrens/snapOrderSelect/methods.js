export default {
  /**
   * 获取抓拍订单查询列表
   * @param page
   * @returns {Promise.<void>}
   */
  async getSnapOrderData (page = this.page) {
    // 用于返回第一页
    this.page.no = page.no ? 1 : this.page.no
    let tableData = await this.request('getSnapOrderData', this.search, page)
    this.tableData = tableData.rows
    this.total = tableData.total
    // 记录一个旧的页码，用于刷新当前页数据
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
   * 获取抓拍详情并显示弹窗
   * @param rowData
   * @returns {Promise.<void>}
   */
  async showDetailsDialog (rowData) {
    let param = {}
    param.snapOrderId = rowData.snapOrderId
    this.snapOrderId = rowData.snapOrderId
    this.detailsSnap.data = await this.request('getSnapDetailsInInfo', param)
    this.detailsSnap.visible = true
    this.activeName = 'inSite'
  },
  /**
   * 抓拍详情tab栏点击切换获取数据
   * @returns {Promise.<void>}
   */
  async handletabsClick () {
    let param = {}
    let requestMethods = ''
    param.snapOrderId = this.snapOrderId
    if (this.activeName === 'inSite') {
      requestMethods = 'getSnapDetailsInInfo'
    } else {
      requestMethods = 'getSnapDetailsOutInfo'
    }
    this.detailsSnap.data = await this.request(requestMethods, param)
    this.$nextTick(() => {
      let swiperComponent = this.$refs.mySwiper.$refs.myswiper.swiper
      swiperComponent.lazy.load()
    })
  }
}
