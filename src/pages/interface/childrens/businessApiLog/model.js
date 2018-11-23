export let props = {}
export let data = {
  timeValue: '',
  dialogVisible: false,
  apiData: {
    responseContent: '',
    paramsContent: ''
  },
  search: {
    apiTypeCode: '',
    businessSystem: '',
    startTime: '',
    endTime: ''
  },
  total: 0,
  page: {
    page: 1,
    pageSize: 10,
    no: 1
  },
  tableData: [],
  columns: [
    {
      prop: 'businessSystemName',
      label: '业务系统',
      hideLevel: 4
    }, {
      prop: 'apiTypeName',
      label: 'API',
      minWidth: '184',
      hideLevel: 3
    }, {
      prop: 'time',
      label: '请求时间',
      hideLevel: 2
    }, {
      prop: 'evt',
      label: '事件',
      hideLevel: 1
    }
  ]
}
export let computed = {}
