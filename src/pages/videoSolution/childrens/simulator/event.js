export let life = {
  created () {
    this.methods('getImgList')
  }
}
export let event = {
  /** *选中图片的大图，鼠标滚轮可以直接放大****/
  onMouseWheel (scope) {

  },
  /** *根据条件刷新图像列表****/
  clickGetImgList () {
    this.methods('getImgList')
  },
  /** *点击自动刷新****/
  clickRefresh (event) {
    if (event === true) {
      this.methods('clickAutoRefresh')
    } else {
      this.methods('stopAutoRefresh')
    }
  },
  /** *选择图片，显示第一张的大图****/
  clickSelectImg (event, scope) {
    this.methods('clickSelectImg', event, scope)
  },
  /** *确认****/
  clickConfirm () {
    this.methods('clickConfirm')
  }
}
export let watch = {}
