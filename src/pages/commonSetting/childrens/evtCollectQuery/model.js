export let props = {}
export let data = {
  dialogVisible: false,
  timeValue: '',
  search: {
    plateColor: 0,
    plateNumber: '',
    berthCode: '',
    parkingCode: '',
    evt: '',
    clearStatus: '',
    startTime: '',
    endTime: ''
  },
  total: 0,
  page: {
    page: 1,
    pageSize: 10
  },
  tableData: [],
  columns: [
    {
      prop: 'evtCode',
      label: '事件编号',
      hideLevel: 10
    }, {
      prop: 'plateNumber',
      label: '车牌',
      slot: 'plate',
      add: 32,
      hideLevel: 1
    }, {
      prop: 'evt',
      label: '事件类型',
      hideLevel: 2
    }, {
      prop: 'parkingName',
      label: '停车点（编号）',
      slot: 'parking',
      hideLevel: 3
    }, {
      prop: 'berthCode',
      label: '泊位（编号）',
      hideLevel: 4
    }, {
      prop: 'deviceCode',
      label: '设备SN',
      hideLevel: 5
    }, {
      prop: 'deviceType',
      label: '设备类型',
      hideLevel: 6
    }, {
      prop: 'time',
      label: '时间',
      hideLevel: 7
    }, {
      prop: 'picCount',
      label: '证据图片数量',
      hideLevel: 8
    }, {
      prop: 'confirmType',
      label: '确认类型',
      hideLevel: 9
    }
  ],
  show: false,
  value1: '',
  imgData: []
}
export let computed = {}
