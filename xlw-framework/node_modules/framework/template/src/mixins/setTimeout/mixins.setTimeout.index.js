export default {
  data () {
    return Mixins.defaultData(this, {
      setTimeout: {}
    })
  },
  destroyed () {
    for (let key in this.setTimeout) {
      clearInterval(this.setTimeout[key])
    }
  }
}
