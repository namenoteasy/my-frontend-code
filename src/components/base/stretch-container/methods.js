export default {
  ajustWrapperHeight () {
    let wrapper = this.$refs.imgWrapper
    let top = $(wrapper).offset().top
    $(wrapper).css('height', window.innerHeight - top - this.offset - 19)
  }
}
