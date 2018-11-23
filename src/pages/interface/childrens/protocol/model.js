export let props = {}
export let data = {
  totalSize: 100,
  requestData: {
    page: 1,
    pageSize: 20
  },
  tableData: [
  ],
  columns: [
    {
      prop: 'businessSystem',
      label: '业务系统',
      hideLevel: 4
    }, {
      prop: 'protocol',
      label: '协议',
      hideLevel: 3
    }, {
      prop: 'evtType',
      label: '推送事件类型',
      hideLevel: 2
    }, {
      prop: 'token',
      label: 'Token',
      hideLevel: 1
    }
  ]
}
export let computed = {}
