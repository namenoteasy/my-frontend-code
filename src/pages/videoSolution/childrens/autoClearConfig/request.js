export default {
  /**
   * 获取自动清洗列表数据
   * @param param
   * @returns {Promise.<{rows: Array, total: number}>}
   */
  async getAutoWachList (param) {
    let result = {
      rows: [],
      total: 0
    }
    await this.api('client.autoClearConfig.listConfig', {
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
   * 提交编辑数据
   * @param param 请求参数
   * @returns {Promise.<{}>} 返回数据源
   */
  async submitEditValue (param) {
    let result = {}
    // await this.api('client.autoClearConfig.editConfig', param).then(res => {
    await this.api('client.autoClearConfig.listConfig', {
      cfgId: param.cfgId,
      cfgItem: param.cfgItem,
      cfgDesc: param.cfgDesc,
      cfgValue: param.cfgValue
    }).then(res => {
      result = res.data
    })
    return result
  }
}
