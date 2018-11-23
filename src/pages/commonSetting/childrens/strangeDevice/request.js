export default {
  /**
   * 获取陌生设备数据
   * @param search
   * @param page
   * @returns {Promise.<{rows: Array, total: number}>}
   */
  async getStrangeDeviceList (search, page) {
    let result = {
      rows: [],
      total: 0
    }
    await this.api('client.strangeDevice.pageListDevice', {
      deviceCode: search.deviceCode,
      deviceType: search.deviceType,
      page: page.page,
      pageSize: page.pageSize
    }).then(res => {
      if (res.data.code === '0') {
        result = res.data.data
      }
    })
    return result
  },
  /**
   * 提交设备接入
   * @param param 请求参数
   * @returns {Promise.<{}>} 返回数据源
   */
  async submitDeviceJoin (param) {
    let result = {}
    // await this.api('client.strangeDevice.addDevice', param).then(res => {
    await this.api('client.strangeDevice.pageListDevice', {
      name: param.name,
      parkingCode: param.parkingCode,
      geo: param.geo,
      time: param.time,
      deviceId: param.deviceId,
      deviceType: param.deviceType,
      deviceCode: param.deviceCode,
      mac: param.mac
    }).then(res => {
      result = res.data
    })
    return result
  }
}
