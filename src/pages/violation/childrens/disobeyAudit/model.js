export let props = {}
export let data = {
  details: {
    title: '查看证据',
    visible: false,
    data: {
      plateData: {},
      infoData: {},
      picArr: []
    }
  },
  search: {
    plateColor: 0,
    plateNumber: ''
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
      prop: 'plateNumber',
      label: '车牌',
      slot: 'plate',
      add: 32,
      hideLevel: 6
    }, {
      prop: 'evt',
      label: '事件类型',
      hideLevel: 5
    }, {
      prop: 'deviceCode',
      label: '抓拍设备SN',
      hideLevel: 4
    }, {
      prop: 'deviceType',
      label: '抓拍设备类型',
      hideLevel: 3
    }, {
      prop: 'time',
      label: '违章时间',
      hideLevel: 2
    }, {
      prop: 'road',
      label: '路口',
      hideLevel: 1
    }
  ]
}
export let computed = {}
