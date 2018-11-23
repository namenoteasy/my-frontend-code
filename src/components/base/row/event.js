export let life = {
  mounted () {
    let gutter = this.gutter || 20
    let childrens = $(this.$refs.row).children()
    childrens.each(function () {
      $(this).css({'padding-left': (gutter / 2) + 'px', 'padding-right': (gutter / 2) + 'px'})
    })
  }
}
export let event = {}
export let watch = {}
