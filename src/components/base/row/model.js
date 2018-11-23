export let props = ['gutter']
export let data = {}
export let computed = {
  rowStyle () {
    return `margin-left:${-this.gutter / 2}px;margin-right:${-this.gutter / 2}px;`
  }
}
