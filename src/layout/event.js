import '../common/util'
export let life = {
  async created () {
    this.methods('removeWellCome')
    this.methods('initInterceptors') // 数据请求拦截器
    await this.methods('getInitialData')
  },
  mounted () {
    window.auth.init(this.data)
  }
}
export let event = {
  clickLoadSubMenu (data) {
    this.methods('loadSubMenu', data)
  },
  loadPage (url) {
    this.methods('loadPage', url)
  }
}
export let watch = {}
