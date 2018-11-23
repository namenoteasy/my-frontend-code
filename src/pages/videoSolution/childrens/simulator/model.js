export let props = {}
export let data = {
  requestData: {
    'prePos': null,
    'deviceType': null,
    'deviceCode': null,
    'numbersOfImg': null
  },
  imgList: [],
  bigImgPath: '', // 大图路径
  timeout: false, // 是否显示倒计时
  autoFresh: false, // 自动刷新
  bigImgShow: false, // 是否显示图片
  countdown: 10, // 倒计时
  simulator: {
    evt: '',
    carType: '',
    abnormalType: '',
    picArr: [],
    berthCode: '',
    plateCredible: null,
    actionCredible: null,
    carBrand: '无异常',
    plateColor: 0,
    plateNumber: '桂A123456',
    deviceCode: 'VSCAM-600-LS17010194',
    deviceType: '双枪'
  },
  rules2: {
    evt: [
      { required: true, message: '请填写', trigger: 'blur' }
    ],
    carType: [
      { required: true, message: '请填写', trigger: 'blur' }
    ],
    abnormalType: [
      { required: true, message: '请填写', trigger: 'blur' }
    ],
    berthCode: [
      { required: true, message: '请填写', trigger: 'blur' }
    ]
  }
}
export let computed = {
}
