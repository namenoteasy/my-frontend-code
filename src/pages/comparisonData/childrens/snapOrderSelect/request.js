export default {
  /**
   * 获取抓拍订单查询列表数据
   * @param search
   * @param page
   * @returns {Promise.<{rows: Array, total: number}>}
   */
  async getSnapOrderData (search, page) {
    let result = {
      rows: [],
      total: 0
    }
    await this.api('client.snapOrderSelect.pageListSnapOrder', {
      plateColor: search.plateColor,
      plateNumber: search.plateNumber,
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
  },
  /**
   * 获取入场详情数据
   * @param param 请求参数
   * @returns {Promise.<{}>} 返回数据源
   */
  async getSnapDetailsInInfo (param) {
    let result = {
      plateData: {
        plateColor: 0,
        plateImg: '',
        plateNumber: ''
      },
      infoData: {
        time: '',
        berthCode: ''
      },
      picArr: []
    }
    await this.api('client.snapOrderSelect.detailsSnapOrderIn', param).then(res => {
      if (res.data.code === '0') {
        result = res.data.data
      }
    })
    return result
  },
  /**
   * 获取出场详情数据
   * @param param 请求参数
   * @returns {Promise.<{}>} 返回数据源
   */
  async getSnapDetailsOutInfo (param) {
    let result = {
      plateData: {
        plateColor: 0,
        plateImg: '',
        plateNumber: ''
      },
      infoData: {
        time: '',
        berthCode: ''
      },
      picArr: []
    }
    await this.api('client.snapOrderSelect.detailsSnapOrderOut', param).then(res => {
      if (res.data.code === '0') {
        result = res.data.data
      }
    })
    return result
  }

}
