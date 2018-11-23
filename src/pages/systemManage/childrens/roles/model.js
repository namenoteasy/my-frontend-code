export let props = {}
export let data = {
  rolesList: [],
  tableData: [],
  allAuthList: [],
  currentAuth: [],
  authTree: [],
  checkList: {},
  allCheckList: {},
  firstAuthList: [],
  check: [],
  roles: {
    visible: false,
    title: '添加',
    type: undefined,
    data: {},
    formData: {
      roleName: undefined,
      roleHomePage: undefined,
      roleDescription: undefined
    }
  },
  rolesDetails: {
    visible: false,
    data: [],
    formData: {
      userName: undefined
    },
    selections: [],
    search: {
      authKey: undefined,
      authName: undefined
    },
    reset: {
      authKey: undefined,
      authName: undefined
    }
  },
  rules: {
    roleName: [
      { required: true, message: '请输入角色名称', trigger: 'blur' }
    ],
    roleHomePage: [
      { required: true, message: '请输入角色初始页', trigger: 'blur' }
    ]
  }
}
export let computed = {}
