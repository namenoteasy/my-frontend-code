export default {
  /**
   * 上传成功
   * @param response 响应数据
   * @param file 文件对象
   * @param fileList 文件对象列表
   */
  handleSuccess (response, file, fileList) {
    console.log('上传成功', response)
    this.uploadOne = false
    this.uploadTwo = false
    this.uploadThree = true
    // 广播给父组件处理,缝合时决定是否需要
    this.$emit('handleSuccess', response, file, fileList)
  },
  /**
   * 上传失败
   * @param err 错误原因
   */
  handleError (err) {
    // 弹窗显示错误原因
    this.$message.error(`上传错误,错误代号:${err}`)
    this.uploadOne = true
    this.uploadTwo = false
    this.uploadThree = false
  },
  /**
   * 上传之前 判断文件大小和文件格式
   * @param file 文件对象
   * @returns {boolean} 返回真或假
   */
  beforeUpload (file) {
    console.log('上传前', file)
    // 判断是否是excel文件
    const excelfileExtend = '.xls,.xlsx'
    const isLt2M = file.size / 1024 / 1024 < 2
    const fileExtend = file.name.substring(file.name.lastIndexOf('.')).toLowerCase()
    console.log('是否通过格式校验', fileExtend)
    if (excelfileExtend.indexOf(fileExtend) <= -1) {
      this.$message.error('文件格式错误')
      return false
    }
    // 限制上传文件大小
    if (!isLt2M) {
      this.$message.error('上传头像图片大小不能超过 2MB!')
      return false
    }
    this.uploadOne = false
    this.uploadTwo = true
  },
  /**
   * 上传中
   * @param event
   * @param file 文件对象
   * @param fileList 文件对象列表
   */
  handleProgress (event, file, fileList) {
    // 显示上传百分比
    console.log('上传中', file)
    this.progress = Math.floor(file.percentage)
  }
}
