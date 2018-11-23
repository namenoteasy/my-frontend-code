export let life = {
  created () {
    this.methods('handleChecked')
  }
}
export let event = {
  changeChecked (value) {
    this.methods('handleChecked', value)
  },
  changeCheckedAll (event) {
    this.methods('handleCheckedAll', event)
  }
}
export let watch = {}
