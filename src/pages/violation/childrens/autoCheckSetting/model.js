export let props = {}
export let data = {
  editRowData: {}, // 当前编辑
  oldRowData: '', // 保存编辑行的数据
  tableData: [],
  total: 0,
  page: {
    page: 1,
    pageSize: 10
  },
  columns: [
    {
      prop: 'cfgItem',
      label: '设置'
    }, {
      prop: 'cfgDesc',
      slot: 'cfgDesc',
      label: '说明'
    }, {
      prop: 'cfgValue',
      label: '值',
      slot: 'cfgValue'
    }
  ]
}
export let computed = {}
