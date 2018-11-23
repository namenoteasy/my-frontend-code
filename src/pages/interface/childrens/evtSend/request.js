export default {
  /**
   * 获取事件发送列表
   * @param param
   * @returns {Promise.<{}>}
   */
  async getEvtTotalList (param) {
    let result = {}
    await this.api('client.evtSend.listEvt', {
      plateColor: param.plateColor,
      plateNumber: param.plateNumber,
      berthCode: param.berthCode,
      parkingCode: param.parkingCode,
      evt: param.evt,
      businessSystem: param.businessSystem,
      sendStatus: param.sendStatus
    }).then(res => {
      if (res.data.code === '0') {
        result = res.data.data
      }
    })
    return result
  }
}
