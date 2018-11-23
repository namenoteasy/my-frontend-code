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
  },
  slideHeight: {
    type: Number,
    defailt: () => {
      return 'auto'
    }
  }
}
export let data = {}
export let computed = {}
