export default {
  /**
   * 获取停车订单查询列表数据
   * @param search
   * @param page
   * @returns {Promise.<{rows: Array, total: number}>}
   */
  async getParkingOrderData (search, page) {
    let result = {
      rows: [],
      total: 0
    }
    await this.api('client.parkingOrderSelect.pageListParking', {
      plateColor: search.plateColor,
      businessSystem: search.businessSystem,
      plateNumber: search.plateNumber,
      parkingName: search.parkingName,
      parkingCode: search.parkingCode,
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
  }
}
