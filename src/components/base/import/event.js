export let life = {}
export let event = {
  // 上传成功
  handleSuccess (response, file, fileList) {
    this.methods('handleSuccess', response, file, fileList)
  },
  // 上传失败
  handleError (err) {
    this.methods('handleError', err)
  },
  // 上传之前
  beforeUpload (file) {
    this.methods('beforeUpload', file)
  },
  // 上传中
  handleProgress (event, file, fileList) {
    this.methods('handleProgress', event, file, fileList)
  }
}
export let watch = {}
