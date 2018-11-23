export let props = {}
export let data = {
  editRowData: '', // 当前编辑
  oldRowData: '', // 保存编辑行的数据
  dialogVisible: false, // 添加弹窗
  importVisible: false, // 导入弹窗
  requestData: {
    parkingCode: '',
    berthCode: '',
    page: 1,
    pageSize: 10
  },
  total: 10,
  appendData: {
    parkingName: '三美',
    parkingCode: '400',
    berthCode: '400100',
    geo: '124.12 86.56'
  },
  tableData: [

  ],
  columns: [
    {
      prop: 'parkingName',
      slot: 'parking',
      label: '停车点（编号）',
      hideLevel: 4
    }, {
      prop: 'berthName',
      slot: 'berthName',
      label: '泊位名称',
      hideLevel: 3
    }, {
      prop: 'berthCode',
      slot: 'berthCode',
      label: '泊位编号',
      hideLevel: 2
    }, {
      prop: 'geo',
      slot: 'geo',
      label: '经纬度',
      hideLevel: 1
    }
  ],
  rules: {
    parkingCode: [
      { required: true, message: '请填写', trigger: 'blur' }
    ],
    berthName: [
      { required: true, message: '请填写', trigger: 'blur' }
    ],
    berthCode: [
      { required: true, message: '请填写', trigger: 'blur' }
    ],
    geo: [
      { required: true, message: '请填写', trigger: 'blur' }
    ]
  }
}
export let computed = {}
