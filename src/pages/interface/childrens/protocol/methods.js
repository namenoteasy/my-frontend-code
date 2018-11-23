export default {
  async getProtocolList (payload) {
    let res = await this.request('pageListProtocol', payload)
    this.tableData = res.rows
  }
}
