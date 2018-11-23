export default {
  /**
   * 获取字典数据
   * @param param 请求参数
   * @returns {Promise.<{}>} 返回数据源
   */
  async getDictData () {
    let result = {}
    await this.api('client.common.detailDictionary').then(res => {
      if (res.data.code === '0') {
        result = res.data.data
      }
    })
    return result
  }
}
