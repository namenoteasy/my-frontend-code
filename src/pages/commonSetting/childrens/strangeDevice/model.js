export let props = {}
export let data = {
  deviceJoinVisible: false,
  deviceJoinForm: {},
  search: {
    deviceCode: '',
    deviceType: ''
  },
  total: 0,
  page: {
    page: 1,
    pageSize: 10
  },
  oldPage: {
    page: 1,
    pageSize: 10,
    no: 1
  },
  tableData: [],
  columns: [
    {
      prop: 'deviceType',
      label: '抓拍设备类型',
      hideLevel: 4
    },
    {
      prop: 'deviceCode',
      label: '抓拍设备SN',
      hideLevel: 3
    },
    {
      prop: 'mac',
      label: '设备mac地址',
      hideLevel: 2
    },
    {
      prop: 'time',
      label: '最近活跃时间',
      hideLevel: 1
    }
  ],
  deviceJoinRules: {
    parkingCode: [
      { required: true, message: '请选择停车点', trigger: 'change' }
    ],
    deviceCode: [
      { required: true, message: '请选择设备SN', trigger: 'blur' }
    ],
    deviceType: [
      { required: true, message: '请选择设备类型', trigger: 'blur' }
    ],
    mac: [
      { required: true, message: '请输入Mac', trigger: 'blur' }
    ]
  }
}
export let computed = {}
