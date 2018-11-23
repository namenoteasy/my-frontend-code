export let props = {
  value: {
    type: Boolean,
    default: false
  }
}
export let data = {
}
export let computed = {
  isExpand () {
    return this.value
  }
}
