export let props = {}
export let data = {
  timeValue: '',
  search: {
    plateColor: 0,
    plateNumber: '',
    parkingCode: '',
    startTime: '',
    endTime: ''
  },
  activeName: 'inSite',
  total: 0,
  page: {
    page: 1,
    pageSize: 10,
    no: 1
  },
  oldPage: {
    page: 1,
    pageSize: 10,
    no: 1
  },
  tableData: [],
  detailsSnap: {
    visible: false,
    title: '',
    data: {
      plateData: {
        plateColor: 0,
        plateImg: '',
        plateNumber: ''
      },
      infoData: {
        time: '',
        berthCode: ''
      },
      picArr: []
    }
  },
  columns: [
    {
      prop: 'plateNumber',
      label: '车牌',
      slot: 'plate',
      add: 32,
      hideLevel: 7
    }, {
      prop: 'inTime',
      label: '入场时间',
      hideLevel: 6
    }, {
      prop: 'outTime',
      label: '出场时间',
      hideLevel: 5
    }, {
      prop: 'parkingName',
      label: '停车点（编号）',
      slot: 'parking',
      hideLevel: 4
    }, {
      prop: 'berthCode',
      label: '泊位编号',
      hideLevel: 3
    }, {
      prop: 'deviceCode',
      label: '抓拍设备SN',
      hideLevel: 2
    }, {
      prop: 'deviceType',
      label: '抓拍设备类型',
      hideLevel: 1
    }
  ],
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
      loadOnTransitionStart: true,
      loadPrevNextAmount: 10
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
