export let props = {}
export let data = {
  sidebarVisible: false,
  tableSpan: 24,
  total: 0,
  page: {
    page: 1,
    pageSize: 10
  },
  nexusListItem: {},
  berthSidebar: {
    berthArr: [],
    berthCodeArr: [],
    parkingName: '三美',
    parkingCode: '400',
    deviceCode: 'VSCAM-600-LS17010194',
    deviceType: '枪球'
  },
  tableData: [],
  columns: [
    {
      prop: 'parkingName',
      label: '停车点（编号）',
      slot: 'parking',
      hideLevel: 5
    }, {
      prop: 'deviceCode',
      label: '抓拍设备SN',
      hideLevel: 4
    }, {
      prop: 'deviceType',
      label: '抓拍设备类型',
      hideLevel: 3
    }, {
      prop: 'name',
      label: '名称',
      hideLevel: 2
    }, {
      prop: 'mac',
      label: '设备mac地址',
      hideLevel: 1
    }
  ]
}
export let computed = {}
