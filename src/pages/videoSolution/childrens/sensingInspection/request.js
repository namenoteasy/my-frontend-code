export default {
  /**
   * 获取信息列表
   * @param param
   * @returns {Promise.<{}>}
   */
  async listDevice (param) {
    let result = {}
    await this.api('client.sensingInspection.listDevice', {
      'alarmFirst': param.alarmFirst,
      'deviceType': param.deviceType,
      'parkingCode': param.parkingCode
    }).then(res => {
      if (res.data.code === '0') {
        result = res.data.data
      }
    })
    return result
  },
  /**
   * 获取设备实时信息
   * @param param
   * @returns {Promise.<{}>}
   */
  async detailDevice (param) {
    let result = {}
    await this.api('client.sensingInspection.detailDevice', {
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
  async confirmAlarm (param) {
    let result = false
    await this.api('client.sensingInspection.confirmAlarm', {manualCause: param}).then(res => {
      if (res.data.code === '0') {
        result = true
      }
    })
    return result
  }
}
