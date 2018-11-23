export let props = {
  swiperOption: {
    type: Object,
    default: () => ({})
  },
  swiperData: {
    type: Array,
    default: function () {
      return []
    }
  }
}
export let data = {}
export let computed = {
  swiper () {
    this.$nextTick(() => {
      console.log(this)
      return this.$refs.timerSwiper.swiper
    })
  }
}
