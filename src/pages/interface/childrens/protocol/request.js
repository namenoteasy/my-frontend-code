export default {
  /**
   * 获取业务系统及协议列表
   * @param param
   * @returns {Promise.<{}>}
   */
  async pageListProtocol (param) {
    let result = {}
    await this.api('client.protocol.pageListProtocol', {
      page: param.page,
      pageSize: param.pageSize
    }).then(res => {
      if (res.data.code === '0') {
        result = res.data.data
      }
    })
    return result
  }
}
