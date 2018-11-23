export let life = {
  mounted () {
    this.methods('bindResizeEvent')
    setTimeout(() => {
      this.methods('resizeWidth')
    }, 0)
  },
  beforeDestroyed () {
    this.methods('offResizeEvent')
  }
}
export let event = {
}
export let watch = {}
