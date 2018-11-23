export default {
  /**
   * 获取泊位信息列表
   * @param param
   * @returns {Promise.<{}>}
   */
  async pageListBerthInfo (param) {
    let result = {}
    await this.api('client.berth.pageListBerthInfo', {
      parkingCode: param.parkingCode,
      berthCode: param.berthCode,
      page: param.page,
      pageSize: param.pageSize
    }).then(res => {
      if (res.data.code === '0') {
        result = res.data.data
      }
    })
    return result
  }, /**
   * 删除泊位
   * @param param
   * @returns {Promise.<{}>}
   */
  async deleteBerth (param) {
    let result = false
    await this.api('client.berth.deleteBerth', {berthId: param}).then(res => {
      if (res.data.code === '0') {
        result = true
      }
    })
    return result
  }, /**
   * 添加泊位
   * @param param
   * @returns {Promise.<{}>}
   */
  async addBerth (param) {
    let result = false
    await this.api('client.berth.addBerth', {
      parkingName: param.parkingName,
      parkingCode: param.parkingCode,
      berthName: param.berthName,
      berthCode: param.berthCode,
      geo: param.geo
    }).then(res => {
      if (res.data.code === '0') {
        result = true
      }
    })
    return result
  }, /**
   * 编辑泊位
   * @param param
   * @returns {Promise.<{}>}
   */
  async editBerth (param) {
    let result = false
    await this.api('client.berth.editBerth', {
      berthId: param.berthId,
      parkingName: param.parkingName,
      parkingCode: param.parkingCode,
      berthName: param.berthName,
      berthCode: param.berthCode,
      geo: param.geo
    }).then(res => {
      if (res.data.code === '0') {
        result = true
      }
    })
    return result
  }
}
