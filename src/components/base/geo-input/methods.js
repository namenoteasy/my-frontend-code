
export default {
  setLocation (payload) {
    this.geoValue = payload.longitude + ' ' + payload.latitude
    this.dialogVisible = false
  },
  showMap () {
    this.dialogVisible = true
  }
}
