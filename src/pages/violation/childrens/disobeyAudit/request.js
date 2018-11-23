export default {
  /**
   * 请求违停审核列表数据
   * @param param 请求参数
   * @returns {Promise.<{}>} 返回响应数据源
   */
  async getViolationReviewList (param) {
    let result = {}
    await this.api('client.disobeyAudit.pageListEvt', param).then(res => {
      if (res.data.code === '0') {
        result = res.data.data
      }
    })
    return result
  },
  /**
   * 请求违停审核列表数据
   * @param param 请求参数
   * @returns {Promise.<{}>} 返回响应数据源
   */
  async getDetailsInfo (param) {
    let result = {}
    await this.api('client.disobeyAuditing.detailsEvt', param).then(res => {
      if (res.data.code === '0') {
        result = res.data.data
      }
    })
    return result
  },
  /**
   * 请求违停审核-是否取信
   * @param param 请求参数
   * @returns {Promise.<{}>} 返回响应数据源
   */
  async reqDisobeyIsRust (param) {
    let result = {}
    await this.api('client.disobeyAuditing.detailsEvt', param).then(res => {
      result = res.data
    })
    return result
  }
}
