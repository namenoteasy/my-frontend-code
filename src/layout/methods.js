import initInterceptors from './initInterceptors.js'
export default {
  removeWellCome () {
    $('#wellcome').remove() // 清除等待提示
  },
  initInterceptors () {
    initInterceptors.call(this)
  },
  loadSubMenu (data) {
    this.$store.state.app.submenuVisible = true
    this.$store.state.app.submenuData = data
  },
  async getInitialData () {
    let dict = await this.request('getDictData')
    window.util.dict.init(dict)
    // window.auth.init()
    this.isInit = true
  },
  loadPage (url) {
    this.$router.push(url)
  }
}
