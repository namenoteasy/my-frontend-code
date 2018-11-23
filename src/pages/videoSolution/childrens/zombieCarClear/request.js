export default {
  /**
   * 请求僵尸车清理列表数据
   * @param search
   * @param page
   * @returns {Promise.<{rows: Array, total: number}>}
   */
  async getZombieCarList (search, page) {
    let result = {
      rows: [],
      total: 0
    }
    await this.api('client.zombieCarClear.pageListZombieCar', {
      plateColor: search.plateColor,
      plateNumber: search.plateNumber,
      parkingCode: search.parkingCode,
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
   * 请求僵尸车清理强制出场数据
   * @param param
   * @returns {Promise.<{inPic: Array, infoData: {berthCode: string, inTime: string}, picArr: Array, plateData: {plateImgId: string, plateImg: string}}>}
   */
  async getForceOutData (param) {
    let result = {
      inPic: [],
      infoData: {
        berthCode: '',
        inTime: ''
      },
      picArr: [],
      plateData: {
        plateImgId: '',
        plateImg: ''
      }
    }
    await this.api('client.zombieCarClear.detailsOutCar', {
      zombieId: param.zombieId
    }).then(res => {
      if (res.data.code === '0') {
        result = res.data.data
      }
    })
    return result
  },
  /**
   * 请求流水记录列表数据
   * @param param 请求参数
   * @returns {Promise.<{}>} 返回响应数据源
   */
  async getLogListData (param) {
    let result = {}
    await this.api('client.zombieCarClear.detailsOutCar', {
      zombieId: param.zombieId
    }).then(res => {
      if (res.data.code === '0') {
        result = res.data.data
      }
    })
    return result
  },
  async submitConfirmOut (param) {
    let result = {}
    await this.api('client.zombieCarClear.detailsOutCar', param).then(res => {
      result = res.data
    })
    return result
  }
}
