export let props = {}
export let data = {
  timeStep: {
    stepValue: 0,
    maxStep: 0,
    minStep: 0
  },
  mySwiper: null,
  logList: {
    listData: [],
    listVisible: false,
    title: ''
  },
  search: {
    plateColor: 0,
    plateNumber: '',
    parkingCode: ''
  },
  total: 0,
  page: {
    page: 1,
    pageSize: 10,
    no: 1
  },
  dialogForceOut: {
    proofVisible: false,
    inImageVisible: false,
    judgeVisible: false,
    title: '',
    nowTimer: new Date().format('yyyy-MM-dd hh:mm:ss'),
    data: {
      inPic: [],
      infoData: {
        berthCode: '',
        inTime: ''
      },
      picArr: [],
      plateData: {
        plateImgId: '',
        plateImg: ''
      }
    }
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
      prop: 'parkingName',
      label: '停车点（编号）',
      slot: 'parking',
      hideLevel: 5
    }, {
      prop: 'berthCode',
      label: '泊位编号',
      hideLevel: 4
    }, {
      prop: 'inTime',
      label: '时间',
      hideLevel: 3
    }, {
      prop: 'deviceCode',
      label: '抓拍设备SN',
      hideLevel: 1
    }, {
      prop: 'time',
      label: '占用时长',
      hideLevel: 2
    }
  ],
  outTimer: '',
  zombieId: ''
}
export let computed = {}
