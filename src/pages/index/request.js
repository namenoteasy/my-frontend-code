export default {
  /**
   * 获取停车和用户报表
   * @param param
   * @returns {Promise.<{}>}
   */
  async listReport () {
    let result = {}
    await this.api('client.index.listReport').then(res => {
      if (res.data.code === '0') {
        result = res.data.data
      }
    })
    return result
  },
  /**
   * 获取设备校时
   * @param param
   * @returns {Promise.<{}>}
   */
  async getDeviceTime () {
    let result = {}
    await this.api('client.index.getDeviceTime').then(res => {
      if (res.data.code === '0') {
        result = res.data.data
      }
    })
    return result
  },
  /**
   * 获取汇总数据
   * @param param
   * @returns {Promise.<{}>}
   */
  async listSummaryData () {
    let result = {}
    await this.api('client.index.listSummaryData').then(res => {
      if (res.data.code === '0') {
        result = res.data.data
      }
    })
    return result
  },
  /**
   * 获取实时数据
   * @param param
   * @returns {Promise.<{}>}
   */
  async listRealtimeData () {
    let result = {}
    await this.api('client.index.listRealtimeData').then(res => {
      if (res.data.code === '0') {
        result = res.data.data
      }
    })
    return result
  },
  /**
   * 获取所有配置项
   * @param param
   * @returns {Promise.<{}>}
   */
  async listAllSettings () {
    let result = {}
    await this.api('client.index.listAllSettings').then(res => {
      if (res.data.code === '0') {
        result = res.data.data
      }
    })
    return result
  }
}
