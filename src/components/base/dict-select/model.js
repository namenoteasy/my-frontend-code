export let props = {
  value: {
    type: String,
    default: ''
  },
  defaultOption: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: ''
  }
}
export let data = {
  dictArr: []
}
export let computed = {
  dictCode: {
    get () {
      return this.value
    },
    set (val) {
      this.$emit('input', val)
    }
  }
}
