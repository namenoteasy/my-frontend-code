export default {
  /**
   * 获取table列表
   */
  async getTableData (param) {
    let result = []
    await this.api('client.auth.pageListAuth', param).then(res => {
      if (res.data.code === '0') {
        result = res.data.data
      }
    })
    return result
  },
  /**
   * 添加
   */
  addPermission (param) {
    return this.api('client.auth.addAuth', param).then((res) => {
      return res
    })
  },
  /**
   * 修改
   */
  modifyPermission (param) {
    return this.api('client.auth.editAuth', param).then((res) => {
      return res
    })
  },
  /**
   * 删除
   */
  handlePermissionRemove (authId) {
    return this.api('client.auth.deleteAuth', {
      authId: authId
    }).then((res) => {
      return res
    })
  },
  /**
   * 导入
   */
  permissionImport (param) {
    return this.api('carBlackList/permissionImport.json', param).then((res) => {
      return res
    })
  },
  /**
   * 导出
   */
  permissionExport (param) {
    this.api('carBlackList/permissionExport.json', param).then((res) => {
      return res
    })
  }
}
