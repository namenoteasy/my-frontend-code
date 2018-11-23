export default {
  loadPage () {
    let url = this.url
    this.$router.push(url)
    function findRouteObj (dataArr, parent) {
      /**
      *  FGTODO: 2018/11/2 16:54 Admin 目前写死了生成三级菜单的方式
      *
      */
      // 遍历菜单数据，返回数组，同时数组过滤掉无效值
      let res = _.compact(_.map(dataArr, (item) => {
        if (item.authRoute === url) {
          // 寻找子菜单绑定的数据
          if (parent && parent.authType === 'menu-leaf') {
            return parent // 父级对象
          } else if (parent.parent && parent.parent.authType === 'menu-leaf') {
            return parent.parent // 祖父对像
          } else {
            return null
          }
        } else if (item.children.length === 0) {
          return null
        } else if (item.children.length !== 0) {
          item.parent = parent
          let obj = findRouteObj(item.children, item)
          return obj
        }
      }))

      if (res.length !== 0) {
        return res[0] // 有且只有一项
      } else {
        return null
      }
    }

    this.$store.state.app.submenuData = findRouteObj(this.$store.state.app.data, null)
    this.$store.state.app.submenuVisible = true
  }
}
