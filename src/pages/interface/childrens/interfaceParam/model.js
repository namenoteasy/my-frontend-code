export let props = {}
export let data = {
  editRowData: '', // 当前编辑
  oldRowData: '', // 保存编辑行的数据
  requestData: {
    page: 1,
    pageSize: 20
  },
  tableData: [

  ],
  columns: [
    {
      prop: 'setting',
      label: '设置'
    }, {
      prop: 'desc',
      label: '说明'
    }, {
      prop: 'value',
      label: '值',
      slot: 'value'
    }
  ]
}
export let computed = {}
