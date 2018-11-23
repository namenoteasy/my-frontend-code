export let props = {
  rightWidth: {
    type: String,
    default: '200px'
  }
}
export let data = {}
export let computed = {
  styleRight () {
    return `width:${this.rightWidth}`
  }
}
