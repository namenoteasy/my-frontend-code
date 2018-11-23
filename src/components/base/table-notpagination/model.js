export let props = {
  columns: {
    type: Array,
    default: () => {}
  },
  tableData: {
    type: Array,
    default: () => {}
  },
  cursor: {
    type: Boolean,
    default: false
  }
}
export let data = {
  expand: false, // 默认不显示下拉扩展
  minWidthNum: [],
  hideLevel: [],
  newPropToLabel: []
}
export let computed = {
  minHeight () {
    if (this.tableData.length !== 0) {
      return 'auto'
    } else {
      return '260px'
    }
  }
}
