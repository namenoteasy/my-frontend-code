export default {
  BeforeClose (done) {
    this.$emit('closeDialog', false)
  }
}
