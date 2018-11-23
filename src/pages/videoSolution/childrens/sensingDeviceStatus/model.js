export let props = {}
export let data = {
  dialogTableVisible: false,
  deviceImgType: '告警时',
  whenAlarmImg: '',
  requestData: {
    deviceType: null,
    parkingCode: null,
    page: 1,
    pageSize: 20
  },
  totalSize: 100,
  detailData: {},
  tableData: [

  ],
  columns: [
    {
      prop: 'parkingName',
      slot: 'parking',
      label: '停车点（编号）',
      hideLevel: 6
    }, {
      prop: 'deviceCode',
      label: '设备SN',
      hideLevel: 5
    }, {
      prop: 'deviceType',
      label: '设备类型',
      hideLevel: 4
    }, {
      prop: 'alarmType',
      label: '告警类型',
      hideLevel: 3
    }, {
      prop: 'time',
      label: '告警时间',
      hideLevel: 2
    },
    {
      prop: 'exceptionType',
      label: '异常类型',
      hideLevel: 1
    }
  ]
}
export let computed = {}
