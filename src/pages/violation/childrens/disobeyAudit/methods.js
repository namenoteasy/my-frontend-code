export default {
  async getViolationReviewList (page = this.page) {
    // 拼接请求页码和搜索参数进行请求
    let param = this.search
    param.page = page.page
    param.pageSize = page.pageSize
    let tableData = await this.request('getViolationReviewList', param)
    this.tableData = tableData.rows
    this.total = tableData.total
    this.page.no = page.no ? 1 : this.page.no
  },
  async showDetailsDialog (rowData) {
    let param = {}
    this.disobeyId = param.disobeyId = rowData.disobeyId
    let resultData = await this.request('getDetailsInfo', param)
    this.details.data = resultData
    console.log(resultData)
    this.details.visible = true
  },
  async disobeyIsRust (credibleFlag) {
    let param = {}
    param.credibleFlag = credibleFlag
    param.disobeyId = this.disobeyId
    let resultData = await this.request('reqDisobeyIsRust', param)
    if (resultData.code === '0') {
      this.$message.success(resultData.message)
    } else {
      this.$message.error(resultData.message)
    }
    this.details.visible = false
  }
}
