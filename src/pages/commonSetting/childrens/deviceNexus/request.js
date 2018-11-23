export default {
  /**
   * 获取停车区设备列表数据
   * @param param 请求参数
   * @returns {Promise.<{}>} 返回响应数据源
   */
  async getDeviceNexusList (param) {
    let result = {
      rows: [],
      total: 0
    }
    await this.api('client.deviceNexus.pageListBerthNexus', {
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
   * 获取停车区设备列表数据
   * @param param 请求参数
   * @returns {Promise.<{}>} 返回响应数据源
   */
  async getBerthNumber (param) {
    let result = {
      berthCodeArr: [],
      rows: []
    }
    await this.api('client.deviceNexus.detailsBerthList', {
      deviceId: param.deviceId
    }).then(res => {
      if (res.data.code === '0') {
        result = res.data.data
      }
    })
    return result
  },
  async submitSaveBerth (param) {
    let result = {}
    await this.api('client.deviceNexus.detailsBerthList', {
      deviceId: param.deviceId,
      berthCodeList: param.berthCodeList
    }).then(res => {
      result = res.data
    })
    return result
  }
}
