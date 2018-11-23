export default {
  /**
   * 请求数据比对审核列表数据
   * @param search
   * @param page
   * @returns {Promise.<{rows: Array, total: number}>}
   */
  async getReportData (search, page) {
    let result = {
      rows: [],
      total: 0
    }
    await this.api('client.comparisonReport.pageListReportData', {
      plateColor: search.plateColor,
      conclusion: search.conclusion,
      businessSystem: search.businessSystem,
      time: search.time,
      plateNumber: search.plateNumber,
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
   * 请求详细对比数据
   * @param param
   * @returns {Promise.<{plateData: {plateColor: number, plateImg: string, plateNumber: string}, conclusion: string, infoData: {time: string, berthCode: string}, time: {inTime: string, outTime: string, machineinTime: string, machineoutTime: string, deviceDuration: string, machineDuration: string}, picArr: Array}>}
   */
  async getDetailsInfo (param) {
    let result = {
      plateData: {
        plateColor: 0,
        plateImg: '',
        plateNumber: ''
      },
      conclusion: '',
      infoData: {
        time: '',
        berthCode: ''
      },
      time: {
        inTime: '',
        outTime: '',
        machineinTime: '',
        machineoutTime: '',
        deviceDuration: '',
        machineDuration: ''
      },
      picArr: []
    }
    await this.api('client.comparisonReport.detailsReportData', {
      reportId: param.reportId
    }).then(res => {
      if (res.data.code === '0') {
        result = res.data.data
      }
    })
    return result
  }
}
