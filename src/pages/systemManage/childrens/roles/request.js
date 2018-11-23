export default {
  /**
   * 获取角色列表
   */
  async getRolesList (param) {
    let result = []
    await this.api('client.role.listRole', param).then(res => {
      if (res.data.code === '0') {
        result = res.data.data
      }
    })
    return result
  },
  /**
   * 获取角色列表详情
   */
  async getRolesListDetails (param) {
    let result = []
    await this.api('client.role.auth', param).then(res => {
      if (res.data.code === '0') {
        result = res.data.data
      }
    })
    return result
  },
  /**
   * 获取所有权限
   */
  async getAllAuthList () {
    let result = []
    await this.api('client.role.listAuth').then(res => {
      if (res.data.code === '0') {
        result = res.data.data
      }
    })
    return result
  },
  /**
   * 添加角色列表
   */
  addRoles (param) {
    return this.api('client.role.addRole', param).then((res) => {
      return res
    })
  },
  /**
   * 修改角色列表
   */
  modifyRoles (param) {
    return this.api('client.role.editRole', param).then((res) => {
      return res
    })
  },
  /**
   * 修改角色权限
   */
  modifyRolesDetails (param) {
    return this.api('client.role.editRoleAuth', param).then((res) => {
      return res
    })
  },
  /**
   * 删除
   */
  removeRoles (roleId) {
    return this.api('client.role.deleteRole', {
      roleId: roleId
    }).then((res) => {
      return res
    })
  }
}
