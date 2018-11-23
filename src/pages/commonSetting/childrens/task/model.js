export let props = {}
export let data = {
  activeTab: '1',
  importTotal: 1000,
  exportTotal: 1000,
  timedTotal: 1000,
  pageSize: 20,
  importTable: [

  ],
  importColumns: [
    {
      prop: 'time',
      label: '时间',
      hideLevel: 4
    }, {
      prop: 'fileName',
      label: '文件名',
      hideLevel: 3
    }, {
      prop: 'importModule',
      label: '导入模块',
      hideLevel: 2
    }, {
      prop: 'people',
      label: '导入者',
      hideLevel: 1
    }
  ],
  exportTable: [

  ],
  exportColumns: [
    {
      prop: 'time',
      label: '时间',
      hideLevel: 4
    }, {
      prop: 'fileName',
      label: '文件名',
      hideLevel: 3
    }, {
      prop: 'exportModule',
      label: '导入模块',
      hideLevel: 2
    }, {
      prop: 'people',
      label: '导入者',
      hideLevel: 1
    }
  ],
  timedTable: [
  ],
  timedColumns: [
    {
      prop: 'taskName',
      label: '任务名称',
      hideLevel: 4
    }, {
      prop: 'nextCompleteTime',
      label: '下次执行时间',
      hideLevel: 3
    }, {
      prop: 'prevCompleteTime',
      label: '上次完成时间',
      hideLevel: 2
    }, {
      prop: 'desc',
      label: '说明',
      hideLevel: 1
    }
  ]
}
export let computed = {}
