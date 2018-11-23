export default {
  /**
   * 获取设备列表
   * @param param
   * @returns {Promise.<{}>}
   */
  async pageListDevice (param) {
    let result = {}
    await this.api('client.sensingdeviceStatus.pageListDevice', {
      deviceType: param.deviceType,
      parkingCode: param.parkingCode,
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
   * 点击告警时或者最新图片
   * @param param
   * @returns {Promise.<{}>}
   */
  async getLiveImg (param) {
    let result = {}
    await this.api('client.sensingdeviceStatus.getLiveImg', {
      'deviceId': param
    }).then(res => {
      if (res.data.code === '0') {
        result = res.data.data
      }
    })
    return result
  },
  /**
   * 获取设备实时
   * @param param
   * @returns {Promise.<{}>}
   */
  async detailDevice (param) {
    let result = {}
    await this.api('client.sensingdeviceStatus.detailDevice', {
      'deviceId': param
    }).then(res => {
      if (res.data.code === '0') {
        result = res.data.data
      }
    })
    return result
  },
  /**
   * 确认告警
   * @param param
   * @returns {Promise.<{}>}
   */
  async confirmReleaseAlarm (param) {
    let result = false
    await this.api('client.sensingdeviceStatus.confirmReleaseAlarm', {deviceId: param.deviceId, cause: param.cause}).then(res => {
      if (res.data.code === '0') {
        result = true
      }
    })
    return result
  }
}
