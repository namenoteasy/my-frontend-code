export default {
  /**
   * 获取接口配置列表数据
   * @param param 请求参数
   * @returns {Promise.<{}>} 返回数据源
   */
  async getApiSettingData (param) {
    let result = {}
    await this.api('client.apiSetting.pageListConfig', param).then(res => {
      if (res.data.code === '0') {
        result = res.data.data
      }
    })
    return result
  },
  /**
   * 完成本次编辑发送请求
   * @param param
   * @returns {Promise.<{}>}
   */
  async reqCompleteEdit (param) {
    let result = {}
    await this.api('client.apiSetting.pageListConfig', param).then(res => {
      result = res.data
    })
    return result
  }
}
