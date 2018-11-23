export default {
  data () {
    return Mixins.defaultData(this, {
      setInterval: {}
    })
  },
  destroyed () {
    for (let key in this.setInterval) {
      clearInterval(this.setInterval[key])
    }
  }
}
