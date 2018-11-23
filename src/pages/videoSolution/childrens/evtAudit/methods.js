export default {
  /**
   * 获取事件审核列表
   * @param page 页码 每页显示条数  默认页码1
   * @returns {Promise.<void>} 无返回值
   */
  async getEvtAuditingData (page = this.page) {
    let tableData = await this.request('getEvtAuditingData', page)
    this.tableData = tableData.rows
    this.total = tableData.total
    this.page = page
  },
  /**
   * 显示人工判断弹窗
   * @param rowData 行数据，获取id
   * @returns {Promise.<void>}
   */
  async showManualReviewDialog (rowData) {
    this.evtId = rowData.evtId
    this.manualReview.data = await this.request('getManualReviewInfo', rowData)
    // 显示弹窗
    this.manualReview.dialogVisible = true
    // 排列时间位置  swiper双向控制
    this.$nextTick(() => {
      this.reviewSwiper = this.$refs.reviewSwiper.$refs.myswiper.swiper
      this.timerSwiper = this.$refs.timerSwiper.$refs.timerSwiper.swiper
      this.reviewSwiper.controller.control = this.timerSwiper
      this.timerSwiper.controller.control = this.reviewSwiper
      this.$refs.manualForm.clearValidate()
    })
  },
  /**
   * 提交人工判断确认数据
   * @returns {Promise.<void>}
   */
  async submitAuditing () {
    this.$refs.manualForm.validate(async (valid) => {
      if (valid) {
        let param = this.manualReview.data.judgeInfo
        param.evtId = this.evtId
        let resultData = await this.request('submitAuditing', param)
        if (resultData.code === '0') {
          this.$message.success(resultData.message)
        } else {
          this.$message.error(resultData.message)
        }
        this.manualReview.dialogVisible = false
      } else {
        return false
      }
    })
  },
  /**
   * 提交人工判断作废数据
   * @returns {Promise.<void>}
   */
  async cancelAuditing () {
    let param = this.manualReview.data.judgeInfo
    param.evtId = this.evtId
    let resultData = await this.request('submitAuditing', param)
    if (resultData.code === '0') {
      this.$message.success(resultData.message)
    } else {
      this.$message.error(resultData.message)
    }
    this.manualReview.dialogVisible = false
  }
}
