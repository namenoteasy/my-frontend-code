export let props = {}
export let data = {
  tableData: [],
  columns: [
    {prop: 'authName', label: '显示名'},
    {prop: 'authKey', label: '权限名称'},
    {prop: 'authType', label: '类型'},
    {prop: 'authRoute', label: '前端路由'},
    {prop: 'authSort', label: '排序'},
    {prop: 'authParent', label: '父级'},
    {prop: 'authCommand', label: '后端命令字'},
    {prop: 'authIcon', label: '图标'}
  ],
  search: {
    searchAuthKey: undefined,
    searchAuthName: undefined
  },
  reset: {
    searchAuthKey: undefined,
    searchAuthName: undefined
  },
  total: 0,
  page: {
    page: 1,
    pageSize: 10
  },
  permission: {
    visible: false,
    title: '添加',
    type: undefined,
    formData: {
      authId: undefined,
      authName: undefined,
      authParent: undefined,
      authIcon: undefined,
      authKey: undefined,
      authType: undefined,
      authRoute: undefined,
      authCommand: undefined,
      authSort: undefined
    }
  },
  permissionImport: {
    visible: false,
    data: undefined
  },
  permissionExport: {
    visible: false,
    data: undefined
  },
  rules: {
    authKey: [
      { required: true, message: '请输入权限名称', trigger: 'blur' }
    ],
    authType: [
      { required: true, message: '请输入类型', trigger: 'blur' }
    ]
  }
}
export let computed = {}
