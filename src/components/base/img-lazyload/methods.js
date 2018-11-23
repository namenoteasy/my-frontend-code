export default {
  downloadImg () {
    let imgUrl = this.$options.propsData.src
    let img = document.createElement('img')
    img.onload = () => {
      this.lazySrc = imgUrl
      this.loading = false
    }
    img.onerror = () => {
      this.loadError = true
    }
    img.src = imgUrl
  }
}
