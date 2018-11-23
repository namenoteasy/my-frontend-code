export default {
  /**
 * 获取信息列表
 * @param param
 * @returns {Promise.<{}>}
 */
  async pageListInspectionParam (param) {
    let result = {}
    await this.api('client.inspectionParam.pageListInspectionParam', param).then(res => {
      if (res.data.code === '0') {
        result = res.data.data
      }
    })
    return result
  },
  /**
   * 编辑
   * @param param
   * @returns {Promise.<{}>}
   */
  async changeInspectionParam (param) {
    let result = false
    await this.api('client.inspectionParam.changeInspectionParam', param).then(res => {
      if (res.data.code === '0') {
        result = true
      }
    })
    return result
  }
}
