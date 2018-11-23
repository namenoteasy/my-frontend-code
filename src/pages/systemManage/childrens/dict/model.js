export let props = {}
export let data = {
  dictList: [],
  dict: {
    visible: false,
    title: '添加',
    type: undefined,
    formData: {
      dictGroupId: undefined,
      dictGroupName: undefined
    }
  },
  dictDetails: {
    visible: false,
    title: '添加',
    type: undefined,
    data: [],
    formData: {
      dictKey: undefined,
      dictName: undefined,
      dictValue: undefined,
      dictSecondValue: undefined,
      dictDescription: undefined,
      dictEnabled: undefined
    }
  },
  dictImport: {
    visible: false,
    data: undefined
  },
  dictRules: {
    dictGroupId: [
      { required: true, message: '请输入分组编码', trigger: 'blur' }
    ],
    dictGroupName: [
      { required: true, message: '请输入分组名称', trigger: 'blur' }
    ]
  },
  dictDetailsRules: {
    dictKey: [
      { required: true, message: '请输入识别码', trigger: 'blur' }
    ],
    dictName: [
      { required: true, message: '请输入字典名', trigger: 'blur' }
    ],
    dictValue: [
      { required: true, message: '请输入字典值', trigger: 'blur' }
    ],
    dicSort: [
      { required: true, message: '请输入排序', trigger: 'blur' }
    ],
    dictSecondValue: [
      { required: true, message: '请输入附加值', trigger: 'blur' }
    ]
  }
}
export let computed = {}
