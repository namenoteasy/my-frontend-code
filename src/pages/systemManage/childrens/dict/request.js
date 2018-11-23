export default {
  /**
   * 获取字典分组
   */
  async getDictList (param) {
    let result = []
    await this.api('client.dict.listDictGroup', param).then(res => {
      if (res.data.code === '0') {
        result = res.data.data
      }
    })
    return result
  },
  /**
   * 获取字典分组详情
   */
  async getDictListDetails (dictId) {
    let result = []
    await this.api('client.dict.listDict', {
      dictGroupId: dictId
    }).then(res => {
      if (res.data.code === '0') {
        result = res.data.data
      }
    })
    return result
  },
  /**
   * 添加字典分组
   */
  addDict (param) {
    return this.api('client.dict.addDictGroup', param).then((res) => {
      return res
    })
  },
  /**
   * 修改字典分组
   */
  modifyDict (param) {
    return this.api('client.dict.editDictGroup', param).then((res) => {
      return res
    })
  },
  /**
   * 删除字典分组
   */
  removedict (param) {
    return this.api('client.dict.deleteDictGroup', param).then((res) => {
      return res
    })
  },
  /**
   * 添加字典分组详情
   */
  adddictDetails (param) {
    return this.api('client.dict.addDict', param).then((res) => {
      return res
    })
  },
  /**
   * 修改字典分组详情
   */
  modifydictDetails (param) {
    return this.api('client.dict.editDict', param).then((res) => {
      return res
    })
  },
  /**
   * 删除字典分组详情
   */
  removeDictDetails (param) {
    return this.api('client.dict.deleteDict', param).then((res) => {
      return res
    })
  },
  /**
   * 字典导入
   */
  dictImport (param) {
    return this.api('carBlackList/dictImport.json', param).then((res) => {
      return res
    })
  }
}
