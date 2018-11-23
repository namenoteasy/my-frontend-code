export default {
  clickTabs () {
    let val = this.$refs.tab.currentName
    this.activeTab = val
  },
  /** * 获取导入任务列表******/
  async getImportTask (params) {
    let res = await this.request('pageListImportTask', params)
    this.importTable = res.rows
  },
  /** * 获取导出任务列表******/
  async getExportTask (params) {
    let res = await this.request('pageListExportTask', params)
    this.exportTable = res.rows
  },
  /** * 获取定时任务列表******/
  async getTimedTask (params) {
    let res = await this.request('pageListTimedTask', params)
    this.timedTable = res.rows
  }

}
