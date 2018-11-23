export let props = {}
export let data = {
  search: {
    plateColor: 0,
    plateNumber: '',
    berthCode: '',
    parkingCode: '',
    evt: '',
    businessSystem: '',
    sendStatus: ''
  },
  total: 0,
  page: {
    page: 1,
    pageSize: 10
  },
  tableData: [

  ],
  columns: [
    {
      prop: 'evtCode',
      label: '事件编号',
      hideLevel: 13
    }, {
      prop: 'plateNumber',
      label: '车牌',
      slot: 'plate',
      add: 32,
      hideLevel: 12
    }, {
      prop: 'evt',
      label: '事件类型',
      hideLevel: 11
    }, {
      prop: 'parkingName',
      slot: 'parking',
      label: '停车点（编号）',
      hideLevel: 10
    }, {
      prop: 'berthCode',
      label: '泊位（编号）',
      hideLevel: 9
    }, {
      prop: 'deviceCode',
      label: '抓拍设备SN',
      hideLevel: 8
    }, {
      prop: 'deviceType',
      label: '抓拍设备类型',
      hideLevel: 7
    }, {
      prop: 'time',
      label: '时间',
      hideLevel: 6
    }, {
      prop: 'picCount',
      label: '证据图片数量',
      hideLevel: 5
    }, {
      prop: 'clearStatus',
      label: '清洗状态',
      hideLevel: 4
    }, {
      prop: 'sendStatus',
      label: '状态',
      hideLevel: 3
    }, {
      prop: 'protocol',
      label: '协议',
      hideLevel: 2
    }, {
      prop: 'businessSystem',
      label: '业务系统',
      hideLevel: 1
    }
  ]
}
export let computed = {}
