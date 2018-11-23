export default {
  /**
   * 获取设备列表数据
   * @param search
   * @param page
   * @returns {Promise.<{rows: Array, total: number}>}
   */
  async getDeviceList (search, page) {
    let result = {
      rows: [],
      total: 0
    }
    await this.api('client.deviceList.pageListDevice', {
      deviceCode: search.deviceCode,
      deviceType: search.deviceType,
      parkingCode: search.parkingCode,
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
   * 发送添加设备请求
   * @param param 请求参数
   * @returns {Promise.<{}>} 返回响应数据源
   */
  async submitConfirmAddDevice (param) {
    let result = {}
    // await this.api('client.deviceList.addDevice', param).then(res => {
    await this.api('client.strangeDevice.pageListDevice', param).then(res => {
      result = res.data
    })
    return result
  },
  async confirmDeleteDevice (param) {
    let result = {}
    // await this.api('client.deviceList.deleteDevice', param).then(res => {
    await this.api('client.strangeDevice.pageListDevice', param).then(res => {
      result = res.data
    })
    return result
  }
}
