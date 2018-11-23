export default {
  /** *****获取停车和用户报表*************/
  async getReport () {
    let res = await this.request('listReport')
    this.reportList = res
  },
  /** *****获取设备校时*************/
  async getDeviceTime () {
    let res = await this.request('getDeviceTime')
    this.systemTime = res.systemTime
  },
  /** *****获取汇总数据*************/
  async getSummaryData () {
    let res = await this.request('listSummaryData')
    this.summaryData = res
  },
  /** *****获取实时数据*************/
  async getRealtimeData () {
    let res = await this.request('listRealtimeData')
    this.realtimeData = res
  },
  /** *****调用单独接口获取当前配置*************/
  async getCurrent () {
    let res = await this.request('listAllSettings')
    this.inspectionTable = res.inspectionParam
    this.clearConfigTable = res.autoClearConfig
    this.apiSettingTable = res.apiSetting
    this.interfaceTable = res.interfaceParam
    this.autoCheckTable = res.autoCheckSetting
  }
}
