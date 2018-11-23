export let life = {
  mounted () {
    this.$nextTick(() => {
      document.querySelector('body').addEventListener('click', this.handleBodyClick)
    })
    this.currentColorIndex = this.value
  },
  beforeDestroy () {
    document.querySelector('body').removeEventListener('click', this.handleBodyClick)
  }
}
export let event = {
  handleSelectClick () {
    this.methods('showSelectColor')
  },
  handleBodyClick () {
    this.methods('hideSelectColor')
  },
  handleConfirmColor (colorName, colorIndex) {
    this.methods('ConfirmColor', colorName, colorIndex)
  }
}
export let watch = {}
