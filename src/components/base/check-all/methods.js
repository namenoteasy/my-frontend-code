export default {
  handleChecked (value) {
    let checkedCount = value ? value.length : 0
    this.checkAll = checkedCount === this.list.length
    this.isIndeterminate = checkedCount > 0 && checkedCount < this.list.length
  },
  handleCheckedAll (event) {
    this.checkList = event ? this.list.map(item => {
      return item[this.label]
    }) : []
    this.isIndeterminate = false
  }
}
