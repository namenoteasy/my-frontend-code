export default {
  clickFirst () {
    if (this.hasClick) return
    let lis = $(this.$refs.list)
    if (lis.find('li').length < 1) return
    lis.on('click', 'li', function () {
      lis.find('li').removeClass('focus')
      $(this).addClass('focus')
    })
    this.$refs.list.querySelector('li').click()
    this.hasClick = true
  }
}
