export let props = {
  value: {
    type: String,
    default: ''
  },
  mapAside: {
    type: Boolean,
    default: false
  }
}
export let data = {
  dialogVisible: false
}
export let computed = {
  geoValue: {
    get () {
      return this.value
    },
    set (val) {
      this.$emit('update:value', val)
    }
  }
}
