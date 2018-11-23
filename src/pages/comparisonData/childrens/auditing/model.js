export let data = {
  details: {
    visible: false,
    title: '',
    data: {
      plateData: {
        plateColor: 0,
        plateImg: '',
        plateNumber: ''
      },
      conclusion: '',
      infoData: {
        time: '',
        berthCode: ''
      },
      time: {
        inTime: '',
        outTime: '',
        machineinTime: '',
        machineoutTime: '',
        deviceDuration: '',
        machineDuration: ''
      },
      picArr: []
    }
  },
  tableData: [],
  total: 0,
  page: {
    page: 1,
    pageSize: 10,
    no: 1
  },
  columns: [
    {
      prop: 'plateNumber',
      label: '车牌',
      slot: 'plate',
      add: 32,
      hideLevel: 9
    }, {
      prop: 'inTime',
      label: '自报入场时间',
      hideLevel: 8
    }, {
      prop: 'outTime',
      label: '自报出场时间',
      hideLevel: 7
    }, {
      prop: 'machineinTime',
      label: '机报入场时间',
      hideLevel: 6
    }, {
      prop: 'machineoutTime',
      label: '机报出场时间',
      hideLevel: 5
    }, {
      prop: 'parkingCode',
      label: '停车编号',
      hideLevel: 4
    }, {
      prop: 'berthCode',
      label: '泊位编号',
      hideLevel: 3
    }, {
      prop: 'reportTime',
      label: '报告形成时间',
      hideLevel: 2
    }, {
      prop: 'conclusion',
      label: '结论',
      hideLevel: 1
    }
  ],
  search: {
    plateColor: 0,
    conclusion: '',
    businessSystem: '',
    time: '',
    plateNumber: '',
    parkingCode: ''
  },
  swiperOption: {
    watchSlidesVisibility: true,
    slidesPerView: 'auto',
    spaceBetween: 10,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
      dragSize: 47
    },
    freeMode: true,
    lazy: {
      loadPrevNext: true,
      loadPrevNextAmount: 10,
      loadingClass: 'my-lazy-loading'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    on: {
      slideChange: function () {
        this.update(false)
      },
      lazyImageReady (slideEl, imageEl) {
        let zoom = $(slideEl).height() / $(imageEl).height()
        let picWidth = $(imageEl).width() * zoom
        $(slideEl).parent().find('.swiper-slide').width(picWidth)
        this.update(true)
      }
    }
  }
}
export let computed = {}
