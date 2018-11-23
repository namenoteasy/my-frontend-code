export default {
  expandMenu () {
    let menu = this.$refs.subMenu
    let submenus = menu.submenus
    for (let key in submenus) {
      menu.open(parseInt(key))
    }
  }
}
