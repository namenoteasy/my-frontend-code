export default {
  /**
   * 获取所有信息列表
   * @param param
   * @returns {Promise.<{}>}
   */
  async listOverlay () {
    let result = {}
    await this.api('client.distribution.listOverlay').then(res => {
      if (res.data.code === '0') {
        result = res.data.data
      }
    })
    return result
  },
  /**
   * 获取设备信息列表
   * @param param
   * @returns {Promise.<{}>}
   */
  async listDevice () {
    let result = {}
    await this.api('client.distribution.listDevice').then(res => {
      if (res.data.code === '0') {
        result = res.data.data
      }
    })
    return result
  }
}
