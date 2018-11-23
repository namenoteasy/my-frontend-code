export let props = {}
export let data = {
  timeValue: '',
  dialogVisible: false,
  apiData: {
    responseContent: '{\n\t"a":"12"\n}',
    paramsContent: '{\n\t"a":"12"\n}'
  },
  search: {
    apiTypeCode: '',
    deviceCode: '',
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
      prop: 'deviceCode',
      label: 'SN',
      hideLevel: 5
    }, {
      prop: 'deviceType',
      label: '设备类型',
      hideLevel: 4
    }, {
      prop: 'apiTypeName',
      label: 'API',
      minWidth: '184',
      hideLevel: 3
    }, {
      prop: 'fileCount',
      label: '文件数量',
      hideLevel: 2
    }, {
      prop: 'time',
      label: '时间',
      hideLevel: 1
    }
  ]
}
export let computed = {}
