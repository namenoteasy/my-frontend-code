export default {
  /**
   * 获取导入任务列表
   * @param param
   * @returns {Promise.<{}>}
   */
  async pageListImportTask (param) {
    let result = {}
    await this.api('client.task.pageListImportTask', {
      'page': param.page,
      'pageSize': param.pageSize
    }).then(res => {
      if (res.data.code === '0') {
        result = res.data.data
      }
    })
    return result
  },
  /**
   * 获取导出任务列表
   * @param param
   * @returns {Promise.<{}>}
   */
  async pageListExportTask (param) {
    let result = {}
    await this.api('client.task.pageListExportTask', {
      'page': param.page,
      'pageSize': param.pageSize
    }).then(res => {
      if (res.data.code === '0') {
        result = res.data.data
      }
    })
    return result
  },
  /**
   * 获取定时任务列表
   * @param param
   * @returns {Promise.<{}>}
   */
  async pageListTimedTask (param) {
    let result = {}
    await this.api('client.task.pageListTimedTask', {
      'page': param.page,
      'pageSize': param.pageSize
    }).then(res => {
      if (res.data.code === '0') {
        result = res.data.data
      }
    })
    return result
  }
}
