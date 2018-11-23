export default {
  /**
   * 获取事件审核列表数据
   * @param param 请求参数
   * @returns {Promise.<{}>} 返回数据源
   */
  async getEvtAuditingData (param) {
    let result = {
      rows: [],
      total: 0
    }
    await this.api('client.evtAudit.pageListEvt', {
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
   * 获取人工审核弹窗数据
   * @param param 请求参数
   * @returns {Promise.<{}>} 返回数据源
   */
  async getManualReviewInfo (param) {
    let result = {
      plateData: {
        plateColor: 0,
        plateImg: '',
        plateNumber: ''
      },
      picArr: [],
      auditReason: '',
      judgeInfo: {
        evt: '',
        plateColor: 0,
        plateCredible: '',
        actionCredible: '',
        berthCode: 0,
        plateNumber: '',
        abnormalType: '',
        carBrand: '',
        carType: '',
        carColor: ''
      }
    }
    await this.api('client.evtAudit.detailsEvt', {
      evtId: param.evtId
    }).then(res => {
      if (res.data.code === '0') {
        result = res.data.data
      }
    })
    return result
  },
  /**
   * 提交作废或者确认
   * @param param 请求参数
   * @returns {Promise.<{}>} 返回数据源
   */
  async submitAuditing (param) {
    let result = {}
    await this.api('client.evtAudit.detailsEvt', param).then(res => {
      result = res.data
    })
    return result
  }
}
