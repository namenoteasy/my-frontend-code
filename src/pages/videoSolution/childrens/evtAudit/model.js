export let props = {}
export let data = {
  manualReview: {
    dialogVisible: false,
    title: '需要人工审核',
    data: {
      plateData: {
        plateColor: 0,
        plateImg: '',
        plateNumber: ''
      },
      picArr: [],
      auditReason: '',
      judgeInfo: {
        evt: '',
        plateColor: 0,
        plateCredible: '',
        actionCredible: '',
        berthCode: 0,
        plateNumber: '',
        abnormalType: '',
        carBrand: '',
        carType: '',
        carColor: ''
      }
    }
  },
  evtId: '',
  tableData: [],
  columns: [
    {
      prop: 'evtCode',
      label: '事件编号',
      hideLevel: 8
    },
    {
      prop: 'plateNumber',
      label: '车牌',
      slot: 'plate',
      add: 32,
      hideLevel: 7
    }, {
      prop: 'evt',
      label: '事件类型',
      hideLevel: 6
    }, {
      prop: 'parkingName',
      label: '停车点（编号）',
      slot: 'parking',
      hideLevel: 5
    }, {
      prop: 'berthCode',
      label: '泊位编号',
      hideLevel: 4
    }, {
      prop: 'deviceCode',
      label: '抓拍设备SN',
      hideLevel: 3
    }, {
      prop: 'time',
      label: '抓拍时间',
      hideLevel: 2
    }, {
      prop: 'auditReason',
      label: '需审核理由',
      hideLevel: 1
    }
  ],
  total: 0,
  page: {
    page: 1,
    pageSize: 10
  },
  reviewSwiper: null,
  timerSwiper: null,
  manualReviewRules: {
    plateCredible: [
      { required: true, message: '车牌置信度不能为空', trigger: 'blur' }
    ],
    berthCode: [
      { required: true, message: '泊位号不能为空', trigger: 'blur' }
    ],
    evt: [
      { required: true, message: '行为不能为空', trigger: 'blur' }
    ],
    actionCredible: [
      { required: true, message: '行为置信度不能为空', trigger: 'blur' }
    ]
  }
}
export let computed = {}
