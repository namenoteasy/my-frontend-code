export default {
  /**
   * 获取设备图片列表
   * @param param
   * @returns {Promise.<{}>}
   */
  async listDeviceImg (param) {
    let result = {}
    await this.api('client.simulator.listDeviceImg', {
      'prePos': param.prePos,
      'deviceType': param.deviceType,
      'deviceCode': param.deviceCode,
      'numbersOfImg': param.numbersOfImg
    }).then(res => {
      if (res.data.code === '0') {
        result = res.data.data
      }
    })
    return result
  },
  /**
   * 确认模拟设备事件
   * @param param
   * @returns {Promise.<{}>}
   */
  async confirmSimulate (param) {
    let result = false
    await this.api('client.simulator.confirmSimulate', {
      evt: param.evt,
      carType: param.carType,
      abnormalType: param.abnormalType,
      picArr: param.picArr,
      berthCode: param.berthCode,
      plateCredible: param.plateCredible,
      actionCredible: param.actionCredible,
      carBrand: param.carBrand,
      plateColor: param.plateColor,
      plateNumber: param.plateNumber,
      deviceCode: param.deviceCode,
      deviceType: param.deviceType
    }).then(res => {
      if (res.data.code === '0') {
        result = true
      }
    })
    return result
  }
}
