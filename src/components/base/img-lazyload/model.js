export let props = ['src']
export let data = {
  loading: true,
  lazySrc: '',
  loadError: false
}
export let computed = {
  targetSrc () {
    return this.lazySrc
  }
}
