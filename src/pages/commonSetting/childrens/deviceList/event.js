export let life = {}
export let event = {
  handleCurrentChange (page) {
    this.methods('getDeviceList', page)
  },
  handleClickSearch () {
    this.methods('getDeviceList')
  },
  handleClickAddDevice (title) {
    this.methods('showAddDeviceDialog', title)
  },
  handleClickEditDevice (title, rowData) {
    this.methods('showAddDeviceDialog', title, rowData)
  },
  async handleConfirmAddDevice () {
    this.methods('confirmAddDevice')
  },
  async handleConfirmDelete (rowData, oldPage) {
    let res = await this.methods('confirmDelete', rowData)
    if (res === '0') {
      this.methods('getDeviceList', oldPage)
    }
  }
}
export let watch = {}
