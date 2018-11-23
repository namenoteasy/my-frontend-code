export let props = {}
export let data = {
  tableData: [],
  currentRow: {},
  authorization: [],
  search: {
    searchUserRealName: undefined,
    searchUserLoginName: undefined,
    searchUserRoleId: undefined
  },
  reset: {
    searchUserRealName: undefined,
    searchUserLoginName: undefined,
    searchUserRoleId: undefined
  },
  total: 0,
  page: {
    page: 1,
    pageSize: 10
  },
  user: {
    visible: false,
    title: '添加',
    type: undefined,
    formData: {
      userProfilePhoto: undefined,
      userRealName: undefined,
      userLoginName: undefined,
      userPhone: undefined,
      userRoleIds: undefined,
      userAuthDataIds: undefined,
      userId: undefined
    }
  },
  role: {
    visible: false,
    data: [],
    checkAll: false,
    checkAllList: [],
    check: [],
    isIndeterminate: true
  },
  dataAuthorization: {
    visible: false,
    data: [],
    checkAll: false,
    checkAllList: [],
    check: [],
    isIndeterminate: true
  },
  rules: {
    userLoginName: [
      { required: true, message: '请输入登录名', trigger: 'blur' }
    ],
    userRealName: [
      { required: true, message: '请输入登录名', trigger: 'blur' }
    ],
    userPassword: [
      { required: true, message: '请输入密码', trigger: 'blur' }
    ],
    organizationId: [
      { required: true, message: '请选择所属组织机构', trigger: 'blur' }
    ]
  }
}
export let computed = {}
