export let life = {
  created () {
    this.methods('getParkingSpot')
  }
}
export let event = {
}
export let watch = {
  value (newVal) {
    this.parkingCode = newVal
  },
  parkingCode (newVal) {
    this.$emit('input', newVal)
  }
}
