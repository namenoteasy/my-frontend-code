export default {
  /**
   * 获取停车点信息列表
   * @param param
   * @returns {Promise.<{}>}
   */
  async pageListParkingInfo (param) {
    let result = {}
    await this.api('client.parkingSpot.pageListParkingInfo', {
      parkingCode: param.parkingCode,
      page: param.page,
      pageSize: param.pageSize
    }).then(res => {
      if (res.data.code === '0') {
        result = res.data.data
      }
    })
    return result
  }, /**
   * 删除停车点
   * @param param
   * @returns {Promise.<{}>}
   */
  async deleteParking (param) {
    let result = false
    await this.api('client.parkingSpot.deleteParking', {parkingId: param}).then(res => {
      if (res.data.code === '0') {
        result = true
      }
    })
    return result
  }, /**
   * 编辑停车点
   * @param param
   * @returns {Promise.<{}>}
   */
  async editParking (param) {
    let result = false
    await this.api('client.parkingSpot.editParking', {
      parkingId: param.parkingId,
      parkingName: param.parkingName,
      parkingCode: param.parkingCode,
      geo: param.geo
    }).then(res => {
      if (res.data.code === '0') {
        result = true
      }
    })
    return result
  }, /**
   * 添加停车点
   * @param param
   * @returns {Promise.<{}>}
   */
  async addParking (param) {
    let result = false
    await this.api('client.parkingSpot.addParking', {
      parkingName: param.parkingName,
      parkingCode: param.parkingCode,
      geo: param.geo
    }).then(res => {
      if (res.data.code === '0') {
        result = true
      }
    })
    return result
  }
}
