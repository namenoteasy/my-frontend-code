import md5 from '../../../../libs/md5.js'
export default {
  /**
   * 获取table列表
   */
  async getTableData (param) {
    let result = []
    await this.api('client.user.pageListUser', param).then(res => {
      if (res.data.code === '0') {
        result = res.data.data
      }
    })
    return result
  },
  /**
   * 获取用户已授权的角色数据
   */
  async getRoleList (param) {
    let result = []
    await this.api('client.user.role', param).then(res => {
      if (res.data.code === '0') {
        result = res.data.data
      }
    })
    return result
  },
  /**
   * 获取角色数据列表
   */
  async getListRole (param) {
    let result = []
    await this.api('client.user.listRole', param).then(res => {
      if (res.data.code === '0') {
        result = res.data.data
      }
    })
    return result
  },
  /**
   * 添加用户
   */
  addUser (param) {
    param.userPassword = md5(param.userPassword)
    param.organizationId = param.organizationId.id
    return this.api('client.user.addUser', param).then((res) => {
      return res
    })
  },
  /**
   * 修改用户
   */
  modifyUser (param) {
    if (param.userPassword) {
      param.userPassword = md5(param.userPassword)
    }
    param.organizationId = param.organizationId.id
    return this.api('client.user.editUser', param).then((res) => {
      return res
    })
  },
  /**
   * 修改用户所属角色、数据授权
   */
  modifyUserDetails (param) {
    return this.api('client.user.editRole', param).then((res) => {
      return res
    })
  },
  /**
   * 删除
   */
  handleUserRemove (userId) {
    return this.api('client.user.deleteUser', {
      userId: userId
    }).then((res) => {
      return res
    })
  }
}
