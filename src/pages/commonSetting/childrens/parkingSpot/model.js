export let props = {}
export let data = {
  editRowData: '', // 当前编辑
  oldRowData: '', // 保存编辑行的数据
  dialogVisible: false, // 添加弹窗
  importVisible: false, // 导入弹窗
  // 请求列表数据的参数
  requestData: {
    parkingCode: '',
    page: 1,
    pageSize: 10
  },
  total: 10,
  // 添加行的参数
  appendData: {
    parkingName: '三美',
    parkingCode: '400',
    geo: '124.12 86.56'
  },
  tableData: [

  ],
  columns: [
    {
      prop: 'parkingName',
      slot: 'parkingName',
      align: 'left',
      label: '名称',
      minWidth: '120',
      hideLevel: 3
    }, {
      prop: 'parkingCode',
      slot: 'parkingCode',
      align: 'left',
      label: '编号',
      hideLevel: 2
    }, {
      prop: 'geo',
      align: 'left',
      slot: 'geo',
      label: '经纬度',
      hideLevel: 1
    }
  ],
  rules: {
    parkingName: [
      { required: true, message: '请填写', trigger: 'blur' }
    ],
    parkingCode: [
      { required: true, message: '请填写', trigger: 'blur' }
    ],
    geo: [
      { required: true, message: '请填写', trigger: 'blur' }
    ]
  }
}
export let computed = {}
