export default {
  bindResizeEvent () {
    $(window).on('resize', this.methodList.resizeWidth)
  },
  offResizeEvent () {
    $(window).off('resize', this.methodList.resizeWidth)
  },
  resizeWidth () {
    this.wrapperWidth = $(this.$refs.imgScroller).width()
    new Promise((resolve, reject) => {
      this.methods('ajustImgSize', 0, resolve)
    }).then(() => {
      let $scroller = $(this.$refs.imgScroller)
      let a = $scroller.height()
      let b = $scroller.parent().height()
      if (a > b) {
        this.wrapperWidth = $scroller.width()
        this.methods('ajustImgSize', 0)
      }
    }).catch(() => {

    })
  },
  ajustImgSize (index, resolve) {
    let wrapper = this.$refs.imgScroller
    let h = this.rowHeight // 预设高度
    let rowWidth = 0 // 每行成员占用的总宽
    let lastIndex = 0 // 行末序号
    let beginIndex = index // 行首序号
    let childrens = $(wrapper).children()
    for (let i = beginIndex, len = this.imgData.length; i < len; i++) {
      let item = this.imgData[i]
      let w = item.width * h / item.height// 根据预设的高度算出相应比例的宽度
      childrens.eq(i).attr('w', w).css({'margin-right': '17px'})// 把去掉的margin补上
      if (i === beginIndex) { // 单独一个不用加17
        rowWidth = rowWidth + w
      } else {
        rowWidth = rowWidth + w + 17
      }
      if (rowWidth > this.wrapperWidth && i !== beginIndex) { // 超出容器宽度并且数量大于1
        lastIndex = i - 1
        break
      }
      lastIndex = i
    }
    if (lastIndex >= this.imgData.length - 1) { // 判断如果是最后一行的结束循环
      for (let i = beginIndex, len = lastIndex; i <= len; i++) {
        let item = childrens.eq(i)
        let width = item.attr('w')// 根据比例重设宽度以铺满容器
        item.attr('w', width).width(width) // 保存
        item.find('img').css({width: width + 'px', height: h + 'px'})
        if (i === lastIndex) {
          item.css({'margin-right': '0'}) // 去掉行尾一个容器的margin-right
        }
      }

      resolve()// 结束调整，转回promise
    } else {
      // 重算需要缩放的宽度
      let rowScaleWidth = 0
      for (let i = beginIndex, len = lastIndex; i <= len; i++) {
        let item = childrens.eq(i)
        rowScaleWidth += +item.attr('w')
      }
      // 总长 / 实际长度
      let scale = (this.wrapperWidth - 17 * (lastIndex - beginIndex)) / rowScaleWidth
      h = h * scale
      for (let i = beginIndex, len = lastIndex; i <= len; i++) {
        let item = childrens.eq(i)
        let width = Math.floor(item.attr('w') * scale)// 根据比例重设宽度以铺满容器
        item.attr('w', width).width(width) // 保存
        item.find('img').css({width: width + 'px', height: h + 'px'})
        if (i === lastIndex) {
          item.css({'margin-right': '0'}) // 去掉行尾一个容器的margin-right
        }
      }
      this.methods('ajustImgSize', lastIndex + 1, resolve) // 继续循环
    }
  }
}
