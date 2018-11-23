export let props = ['imgDefaultHeight', 'imgData']
export let data = {
  maxRowHeight: 300,
  minRowHeight: 180,
  wrapperWidth: 0
}
export let computed = {
  // 预设的图片高度
  rowHeight () {
    return this.imgDefaultHeight || 300
  }
}
