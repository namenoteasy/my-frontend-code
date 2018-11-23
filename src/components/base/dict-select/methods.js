export default {
  async initDictData () {
    switch (this.type) {
      case 'evt':
        this.dictArr = window.util.dict.get('evt')
        break
      case 'deviceType':
        this.dictArr = window.util.dict.get('deviceType')
        break
      case 'evtStatus':
        this.dictArr = window.util.dict.get('evtStatus')
        break
      default :
        this.dictArr = []
    }
    // 初始需要手动赋值一次
    this.dictCode = this.value
  }
}
