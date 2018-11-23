export default {
  async getParkingSpot () {
    this.parkingArr = await this.request('getParkingSpot')
    // 初始需要手动赋值一次
    this.parkingCode = this.value
  }
}
