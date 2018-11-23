export default {
  /** *缩放图片****/
  zoomPitrue () {

  },
  /** *获取图片列表****/
  async getImgList () {
    let res = await this.request('listDeviceImg', this.requestData)
    this.imgList = res
  },
  /** *点击自动刷新****/
  clickAutoRefresh () {
    this.timeout = true
    this.countdown = 10

    let timeCountdown = () => {
      setTimeout(() => {
        this.countdown--
        if (!this.autoFresh) {
          return
        }
        if (this.countdown === 0) {
          this.methods('getImgList')

          // 变为0后延迟一秒再重新计时
          new Promise((resolve) => {
            setTimeout(() => {
              resolve()
            }, 1000)
          }).then(() => {
            this.countdown = 10
            timeCountdown()
          })
        } else {
          timeCountdown()
        }
      }, 1000)
    }

    timeCountdown()
  },
  /** *停止自动刷新****/
  stopAutoRefresh () {
    this.timeout = false
    this.countdown = 10
  },
  /** *选择图片，显示第一张的大图****/
  clickSelectImg (event, scope) {
    let currentTarget = event.currentTarget
    let currentIndex = this.imgList.indexOf(scope)

    // 显示图片
    this.bigImgShow = true
    this.bigImgPath = scope.imgPath

    let arr = []
    arr.push(this.imgList[currentIndex])
    if (this.imgList[currentIndex + 1]) {
      arr.push(this.imgList[currentIndex + 1])
    }
    if (this.imgList[currentIndex + 2]) {
      arr.push(this.imgList[currentIndex + 2])
    }

    this.simulator.picArr = arr

    // 寻找相邻的两个节点，添加选中样式
    let $parentWr = $(currentTarget).parents('.img-card')
    $parentWr.parent().find('.img-wrapper').removeClass('img-select')
    $(currentTarget).parent().addClass('img-select')
    $parentWr.next().find('.img-wrapper').addClass('img-select')
    $parentWr.next().next().find('.img-wrapper').addClass('img-select')
  },
  /** *确认****/
  async clickConfirm () {
    this.$refs.elForm.validate(async (valid) => {
      if (valid) {
        let res = await this.request('confirmSimulate', this.simulator)
        if (res) { // 告警成功
          this.$message.success('设置成功')
        } else {
          this.$message.success('设置失败')
        }
      } else {
        return false
      }
    })
  }
}
