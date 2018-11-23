export let props = {}
export let data = {
  tableData: [],
  search: {
    searchOperationObject: undefined,
    time: undefined,
    searchOperationActive: undefined
  },
  reset: {
    searchOperationObject: undefined,
    time: undefined,
    searchOperationActive: undefined
  },
  total: 0,
  page: {
    page: 1,
    pageSize: 10
  },
  operationLogs: {
    operationParams: undefined,
    operationObject: undefined,
    userPhone: undefined,
    userAddress: undefined,
    userRoleName: undefined,
    operationIp: undefined,
    operationActive: undefined,
    operationTime: undefined,
    userRealName: undefined
  }
}
export let computed = {}
