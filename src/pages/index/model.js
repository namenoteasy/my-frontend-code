export let data = {
  systemInterval: null,
  reportList: {
    'deviceNum': 100,
    'receiveNum': 100,
    'sendNum': 100,
    'callbackTime': 100
  },
  systemTime: '',
  summaryData: {
    'deviceNum': 100,
    'unknownNum': 100,
    'berthNum': 100,
    'parkingNum': 100
  },
  realtimeData: {
    'deviceReportRate': 100,
    'APICallRate': 100,
    'alarmDeviceNum': 100,
    'eventPushRate': 100,
    'lowPlateNum': 100,
    'lowBehaviorNum': 100,
    'notSentNum': 100
  },
  inspectionTable: [

  ],
  inspectionColumns: [
    {
      prop: 'evtCode',
      label: '事件编号'
    }, {
      prop: 'desc',
      label: '说明'
    }, {
      prop: 'value',
      label: '值'
    }
  ],
  clearConfigTable: [

  ],
  clearConfigColumns: [
    {
      prop: 'cfgItem',
      label: '设置项'
    }, {
      prop: 'cfgDesc',
      label: '说明'
    }, {
      prop: 'cfgValue',
      label: '值'
    }
  ],
  apiSettingTable: [

  ],
  apiSettingColumns: [
    {
      prop: 'setting',
      label: '设置'
    }, {
      prop: 'desc',
      label: '说明'
    }, {
      prop: 'value',
      label: '值'
    }
  ],
  interfaceTable: [

  ],
  interfaceColumns: [
    {
      prop: 'setting',
      label: '设置'
    }, {
      prop: 'desc',
      label: '说明'
    }, {
      prop: 'value',
      label: '值'
    }
  ],
  autoCheckTable: [

  ],
  autoCheckColumns: [
    {
      prop: 'cfgItem',
      label: '设置'
    }, {
      prop: 'cfgDesc',
      label: '说明'
    }, {
      prop: 'cfgValue',
      label: '值'
    }
  ]
}
export let computed = {
}
