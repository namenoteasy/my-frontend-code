export default {
  /**
   * 获取设备api收发日志列表数据
   * @param search
   * @param page
   * @returns {Promise.<{}>}
   */
  async getDeviceApiLogsData (search, page) {
    let result = {
      rows: [],
      total: 0
    }
    await this.api('client.deviceApi.pageListApi', {
      apiTypeCode: search.apiTypeCode,
      deviceCode: search.deviceCode,
      startTime: search.startTime,
      endTime: search.endTime,
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
   * 获取设备api收发日志查看请求和返回数据
   * @param param
   * @returns {Promise.<{}>}
   */
  async getDetailsCheckApi (param) {
    let result = {
      paramsContent: '',
      responseContent: ''
    }
    await this.api('client.deviceApi.checkDetailsApi', {
      deviceApiId: param.deviceApiId
    }).then(res => {
      if (res.data.code === '0') {
        result = res.data
      }
    })
    return result
  }
}
