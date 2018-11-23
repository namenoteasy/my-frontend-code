export default {
  showSelectColor () {
    this.showPlateColor = !this.showPlateColor
  },
  hideSelectColor () {
    this.showPlateColor = false
  },
  ConfirmColor (colorName, colorIndex) {
    this.currentColor = colorName
    console.log(colorIndex)
    this.$emit('input', colorIndex)
  }
}
