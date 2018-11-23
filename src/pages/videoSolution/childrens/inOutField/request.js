export default {
  /**
   * 请求出入场查询列表数据
   * @param search  搜索条件
   * @param page  页码
   * @returns {Promise.<{rows: Array, total: number}>}
   */
  async getInOutData (search, page) {
    let result = {
      rows: [],
      total: 0
    }
    await this.api('client.inOutField.pageListInOut', {
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
   * 请求出入场查询查看证据
   * @param param
   * @returns {Promise.<{plateData: {plateColor: number, plateImg: string, plateNumber: string}, infoData: {time: string, berthCode: string}, picArr: Array}>}
   */
  async getProofInfo (param) {
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
    await this.api('client.inOutField.detailsInOut', {
      inoutId: param.inoutId
    }).then(res => {
      if (res.data.code === '0') {
        result = res.data.data
      }
    })
    return result
  }
}
