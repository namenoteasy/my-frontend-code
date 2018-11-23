export default {
  /** **人工告警弹窗****/
  async clickConfirm (scope) {
    let res = await this.request('confirmAlarm', this.manualCause)
    if (res) { // 告警成功
      this.$message.success('设置成功')
    } else {
      this.$message.success('设置失败')
    }
    this.dialogTableVisible = true
  },
  /** **人工告警弹窗****/
  async alarmManual (scope) {
    let res = await this.request('detailDevice', scope.deviceId)
    this.detailData = res
    this.dialogTableVisible = true
  },
  /** *****获取设备图像列表*************/
  async getSensingDeviceList () {
    let res = await this.request('listDevice', this.requestData)
    this.imgList = res
  }
}
