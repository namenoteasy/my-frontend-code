export let life = {
  mounted () {
    this.methods('getImportTask', {
      'page': 1,
      'pageSize': this.pageSize
    })
    // this.methods('getExportTask', {
    //   'page': 1,
    //   'pageSize': this.pageSize
    // })
    // this.methods('getTimedTask', {
    //   'page': 1,
    //   'pageSize': this.pageSize
    // })
  }
}
export let event = {
  /** *****分页****/
  handleImportChange (payload) {
    this.methods('getImportTask', payload)
  },
  /** *****分页****/
  handleExportChange (payload) {
    this.methods('getExportTask', payload)
  },
  /** *****分页****/
  handleTimedChange (payload) {
    this.methods('getTimedTask', payload)
  },
  /** * 点击tab******/
  clickTabs () {
    this.methods('clickTabs')
  },
  /** * 下载******/
  clickDownload () {
    this.methods('clickDownload')
  }
}
export let watch = {}
