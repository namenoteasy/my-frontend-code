export default {
  /**
   * 获取自动巡检配置-列表数据
   * @param param 请求参数
   * @returns {Promise.<{}>} 返回数据源
   */
  async getAutoCheckSettingList (param) {
    let result = {}
    await this.api('client.autoCheckSetting.pageList', param).then(res => {
      if (res.data.code === '0') {
        result = res.data.data
      }
    })
    return result
  },
  /**
   * 提交编辑自动巡检配置数据
   * @param param 请求参数
   * @returns {Promise.<{}>} 返回数据源
   */
  async submitEditAutoCheckSetting (param) {
    let result = {}
    await this.api('client.autoCheckSetting.pageList', param).then(res => {
      result = res.data
    })
    return result
  }
}
