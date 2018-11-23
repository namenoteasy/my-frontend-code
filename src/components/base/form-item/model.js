export let props = {
  contentWidth: {
    type: String,
    default: ''
  },
  labelWidth: {
    type: String,
    default: ''
  },
  prop: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  },
  rules: {
    type: Object,
    default: null
  },
  error: {
    type: String,
    default: ''
  },
  showMessage: {
    type: Boolean,
    default: true
  },
  inlineMessage: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: ''
  }
}
export let data = {}
export let computed = {
  contentStyle () {
    return `width:${this.contentWidth}`
  }
}
