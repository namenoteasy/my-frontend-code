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
      prop: 'evtCode',
      label: '事件编号',
      hideLevel: 3
    }, {
      prop: 'desc',
      label: '说明',
      hideLevel: 2
    }, {
      prop: 'value',
      label: '值',
      slot: 'value',
      hideLevel: 1
    }
  ]
}
export let computed = {}
