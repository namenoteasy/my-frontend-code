export default {
  /**
   * 获取事件总汇列表
   * @param search
   * @param page
   * @returns {Promise.<{rows: Array, total: number}>}
   */
  async getEvtTotalList (search, page) {
    let result = {
      rows: [],
      total: 0
    }
    await this.api('client.evtCollectQuery.pageListEvtTotal', {
      plateColor: search.plateColor,
      plateNumber: search.plateNumber,
      berthCode: search.berthCode,
      parkingCode: search.parkingCode,
      evt: search.evt,
      clearStatus: search.clearStatus,
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
   * 获取该事件的所有图片并显示
   * @param param
   * @returns {Promise.<{}>}
   */
  async getEvtAllPhoto (param) {
    let result = {
      picArr: []
    }
    await this.api('client.evtCollectQuery.detailsGetImg', {
      evtTotalId: param.evtTotalId
    }).then(res => {
      if (res.data.code === '0') {
        result = res.data.data
      }
    })
    return result
  }
}
