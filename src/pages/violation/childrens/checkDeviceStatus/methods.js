export default {
  /** **确认解除人工告警****/
  async clickConfirm (scope) {
    let res = await this.request('confirmReleaseAlarm', {deviceId: scope.deviceId, cause: scope.cause})
    if (res) { // 告警成功
      this.$message.success('设置成功')
    } else {
      this.$message.success('设置失败')
    }
    this.dialogTableVisible = false
  },
  /** **点击告警时或者最新图片****/
  async clickGetStatusImg (scope) {
    if (this.deviceImgType === '告警时') {
      this.detailData.imgPath = this.whenAlarmImg
    } else {
      let res = await this.request('getLiveImg', {
        'deviceId': scope.deviceId
      })
      this.detailData.imgPath = res.imgPath
    }
  },
  /** **获取设备实时信息****/
  async clickAlarmRelease (scope) {
    let res = await this.request('detailDevice', {
      'deviceId': scope.deviceId
    })
    this.whenAlarmImg = res.imgPath
    this.detailData = res
    this.dialogTableVisible = true
  },
  /** *****分页****/
  handleCurrentChange (payload) {
    this.requestData.page = payload.page
    this.requestData.pageSize = payload.pageSize
    this.methods('getDeviceList')
  },
  /** *****获取设备列表*************/
  async getDeviceList () {
    let res = await this.request('pageListDevice', this.requestData)
    this.tableData = res.rows
  }
}
