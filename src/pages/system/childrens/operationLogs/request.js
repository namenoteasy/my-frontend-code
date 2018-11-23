export default {
  /**
   * 获取table列表
   */
  async getTableData (param) {
    let result = []
    await this.api('client.operationLog.pageListOperationLog', param).then(res => {
      if (res.data.code === '0') {
        result = res.data.data
      }
    })
    return result
  }
}
