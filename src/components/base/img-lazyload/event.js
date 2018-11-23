export let life = {
  created () {
    this.methods('downloadImg')
  }
}
export let event = {

}
export let watch = {
  src (val) {
    this.methods('downloadImg')
  }
}
