export let props = {}
export let data = {
  deviceJoinVisible: false,
  importVisible: false,
  listParking: [
    {
      parkingCode: '400',
      parkingName: '三美'
    }
  ],
  deviceJoinForm: {},
  deviceJoinFormType: '',
  search: {
    deviceCode: '',
    deviceType: '',
    parkingCode: ''
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
      prop: 'parkingName',
      label: '停车点（编号）',
      slot: 'parking',
      hideLevel: 1
    }, {
      prop: 'deviceCode',
      label: '抓拍设备SN',
      hideLevel: 2
    }, {
      prop: 'deviceType',
      label: '抓拍设备类型',
      hideLevel: 3
    }, {
      prop: 'name',
      label: '名称',
      hideLevel: 6
    }, {
      prop: 'geo',
      label: '经纬度',
      hideLevel: 4
    }, {
      prop: 'mac',
      label: '设备mac地址',
      hideLevel: 5
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
  },
  dialogTitle: ''
}
export let computed = {}
