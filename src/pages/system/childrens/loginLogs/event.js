export let life = {}
export let event = {
  // 筛选查询
  handleFilterSearchClick () {
    this.methods('handleFilterSearchClick')
  },
  // 重置筛选条件
  handleFilterResetClick () {
    this.methods('handleFilterResetClick')
  },
  // page改变时会触发
  handlePageChange (page, sort) {
    this.methods('handlePageChange', page)
  }
}
export let watch = {}
