export default {
  /**
   * 获取僵尸车列表
   * @param page 页码 每页显示条数  默认页码1
   * @returns {Promise.<void>} 无返回值
   */
  async getZombieCarList (page = this.page) {
    this.page.no = page.no ? 1 : this.page.no
    let tableData = await this.request('getZombieCarList', this.search, page)
    this.tableData = tableData.rows
    this.total = tableData.total
  },
  /**
   * 滑动滑块到指定图片
   * @param val
   */
  sliderChange (val) {
    let swiperObj = this.$refs.tSwiper.$refs.myswiper.swiper
    // 滑动三张一组，速度300
    swiperObj.slideTo(val * 3, 300, false)
  },
  /**
   * 显示强制出场弹窗
   * @param rowData 行数据，获取id
   * @returns {Promise.<void>} 无返回值
   */
  async showForceOutDialog (rowData) {
    this.zombieId = rowData.zombieId
    this.dialogForceOut.data = await this.request('getForceOutData', rowData)
    this.dialogForceOut.judgeVisible = true
    // 如果证据图片小于三张不显示证据框
    this.dialogForceOut.proofVisible = !(this.dialogForceOut.data.picArr.length < 3)
    // 计算出最大滑动点数
    let maxStep = (this.dialogForceOut.data.picArr.length / 3) - 1
    if (maxStep < 0) {
      maxStep = 0
    }
    this.timeStep.maxStep = maxStep
  },
  /**
   * 获取流水记录并显示弹窗
   * @param rowData 行数据，获取id
   * @returns {Promise.<void>} 无返回值
   */
  async getLogListData (rowData) {
    this.logList.listVisible = true
    let resultData = await this.request('getLogListData', rowData)
    console.log(resultData)
  },
  async submitConfirmOut () {
    let param = {}
    let swiperObj = this.$refs.tSwiper.$refs.myswiper.swiper
    let activeIndex = swiperObj.activeIndex
    let fullImg = this.dialogForceOut.data.picArr[activeIndex + 1].imgId
    let featureImg = this.dialogForceOut.data.picArr[activeIndex + 2].imgId
    param.fullImg = fullImg
    param.featureImg = featureImg
    param.plateImgId = this.dialogForceOut.data.plateData.plateImgId
    param.outTimer = this.outTimer
    param.zombieId = this.zombieId
    let resultData = await this.request('submitConfirmOut', param)
    if (resultData.code === '0') {
      this.$message.success(resultData.message)
    } else {
      this.$message.error(resultData.message)
    }
    this.dialogForceOut.judgeVisible = false
  }
}
