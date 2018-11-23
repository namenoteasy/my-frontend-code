export default {
  /**
   * 获取信息列表
   * @param param
   * @returns {Promise.<{}>}
   */
  async pageListParam (param) {
    let result = {}
    await this.api('client.interfaceParam.pageListParam', {
      page: param.page,
      pageSize: param.pageSize
    }).then(res => {
      if (res.data.code === '0') {
        result = res.data.data
      }
    })
    return result
  },
  /**
   * 编辑
   * @param param
   * @returns {Promise.<{}>}
   */
  async changeParam (param) {
    let result = false
    await this.api('client.interfaceParam.changeParam', {
      'apiSettingId': param.apiSettingId,
      'setting': param.setting,
      'desc': param.desc,
      'value': param.value
    }).then(res => {
      if (res.data.code === '0') {
        result = true
      }
    })
    return result
  }
}
