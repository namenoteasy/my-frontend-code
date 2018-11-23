export let props = {
  columns: {
    type: Array,
    default: () => {}
  },
  tableData: {
    type: Array,
    default: () => {}
  },
  pageSize: {
    type: Number,
    default: 10
  },
  totalSize: {
    type: Number,
    default: 10
  },
  currentPage: {
    type: Number,
    default: 1
  },
  offset: {
    type: Number,
    default: 0
  },
  cursor: {
    type: Boolean,
    default: false
  },
  highlight: {
    type: Boolean,
    default: false
  },
  tableHeightFlag: {
    type: Boolean,
    default: true
  }
}
export let data = {
  tableHeight: 'auto',
  expand: false, // 默认不显示下拉扩展
  minWidthNum: [],
  activePage: 1,
  hideLevel: [],
  newPropToLabel: []
}
export let computed = {}
