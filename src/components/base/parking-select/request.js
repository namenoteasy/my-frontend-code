export default {
  async getParkingSpot () {
    let result = {}
    await this.api('client.common.listParkingSpot').then(res => {
      if (res.data.code === '0') {
        result = res.data.data
      }
    })
    return result
  }
}
