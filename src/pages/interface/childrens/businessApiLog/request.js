export default {
  /**
   * 获取业务系统api收发日志列表数据
   * @param search
   * @param page
   * @returns {Promise.<{}>}
   */
  async getBusinessApiLogsData (search, page) {
    let result = {
      rows: [],
      total: 0
    }
    await this.api('client.businessSystemApiLog.pageListApi', {
      apiTypeCode: search.apiTypeCode,
      businessSystem: search.businessSystem,
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
   * 获取业务系统api收发日志查看请求和返回数据
   * @param param
   * @returns {Promise.<{}>}
   */
  async getDetailsCheckApi (param) {
    let result = {}
    await this.api('client.deviceApi.checkDetailsApi', {
      businessApiId: param.businessApiId
    }).then(res => {
      if (res.data.code === '0') {
        result = res.data
      }
    })
    return result
  }
}
