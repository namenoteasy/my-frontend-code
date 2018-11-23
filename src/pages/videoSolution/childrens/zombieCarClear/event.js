export let life = {
  created () {}
}
export let event = {
  handleCurrentChange (page) {
    this.methods('getZombieCarList', page)
  },
  handleClickForceOut (rowData) {
    this.methods('showForceOutDialog', rowData)
  },
  handleClickLogList (rowData) {
    this.methods('getLogListData', rowData)
  },
  handleClickSearch () {
    this.methods('getZombieCarList')
  },
  handleSliderChange (val) {
    this.methods('sliderChange', val)
  },
  async handleClickConfirmOut () {
    await this.methods('submitConfirmOut')
    this.methods('getZombieCarList')
  }
}
export let watch = {
  'timeStep.stepValue': function (newVal, oldVal) {
    this.$nextTick(() => {
      $(this.$refs.slider.$el).find('.el-slider__button').html(`<div class="time-box">2018-05-04 10:01:00</div>`)
    })
  },
  'dialogForceOut.inImageVisible': function (val) {
    console.log(val)
    if (!val) return
    this.$nextTick(() => {
      // console.log(global.setBorder)
      let picData = this.dialogForceOut.data.inPic
      $('.image-fullImage').each(function (i, e) {
        window.util.setBorder(e, {
          x1: parseInt(picData[i].imgPosition.leftTopX),
          y1: parseInt(picData[i].imgPosition.leftTopY),
          x2: parseInt(picData[i].imgPosition.rightBottomX),
          y2: parseInt(picData[i].imgPosition.rightBottomX),
          width: parseInt(picData[i].imgPosition.imgWidth),
          height: parseInt(picData[i].imgPosition.imgHeight)
        })
      })
    })
  }
}
