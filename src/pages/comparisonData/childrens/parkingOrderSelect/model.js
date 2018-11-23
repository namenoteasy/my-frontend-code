export let props = {}
export let data = {
  timeValue: '',
  search: {
    plateColor: 0,
    businessSystem: '',
    plateNumber: '',
    parkingName: '',
    parkingCode: '',
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
      label: '业务系统(来源)',
      hideLevel: 7
    }, {
      prop: 'businessSystemId',
      label: '业务系统订单ID',
      hideLevel: 6
    }, {
      prop: 'plateNumber',
      label: '车牌',
      slot: 'plate',
      add: 32,
      hideLevel: 5
    }, {
      prop: 'inTime',
      label: '入场时间',
      hideLevel: 4
    }, {
      prop: 'outTime',
      label: '出场时间',
      hideLevel: 3
    }, {
      prop: 'parkingName',
      label: '停车点(编号)',
      slot: 'parking',
      hideLevel: 2
    }, {
      prop: 'berthCode',
      label: '泊位号',
      hideLevel: 1
    }
  ]
}
export let computed = {}
