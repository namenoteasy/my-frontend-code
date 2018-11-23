export default {
  timeToArr () {
    let arr = []
    for (let i of this.time) {
      arr.push(i)
    }
    this.timeStrArr = arr
  }
}
