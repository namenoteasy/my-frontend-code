export let props = ['list', 'value', 'label', 'name']
export let data = {
  isIndeterminate: false,
  checkAll: false
}
export let computed = {
  checkList: {
    get () {
      return this.value
    },
    set (val) {
      this.$emit('input', val)
    }
  }
}
