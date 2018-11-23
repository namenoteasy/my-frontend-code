export default {
  switchValue () {
    let val = this.isExpand
    val = !val
    this.$emit('expand', val)
    this.$emit('update:value', val)
  }
}
