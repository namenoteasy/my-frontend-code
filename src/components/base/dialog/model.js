export let props = {
  top: {
    type: String,
    default: '7vh'
  },
  show: {
    type: Boolean,
    default: false
  },
  width: {
    type: String,
    default: '1278px'
  },
  title: {
    type: String,
    default: '弹窗标题'
  }
}
export let data = {
  visible: this.show
}
export let computed = {}
