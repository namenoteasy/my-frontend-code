export let props = ['span']
export let data = {}
export let computed = {
  colClass () {
    let span = this.span
    return `col-${span}`
  }
}
