export let props = {}
export let data = {
  checkProof: {
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
  timeValue: '',
  search: {
    plateColor: 0,
    plateNumber: '',
    parkingCode: '',
    startTime: '',
    endTime: ''
  },
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
  tableData: [
    {}
  ],
  columns: [
    {
      prop: 'plateNumber',
      label: '车牌',
      slot: 'plate',
      add: 32,
      hideLevel: 6
    }, {
      prop: 'evt',
      label: '事件',
      hideLevel: 7
    }, {
      prop: 'parkingName',
      label: '停车点（编号）',
      slot: 'parking',
      hideLevel: 3
    }, {
      prop: 'berthCode',
      label: '泊位编号',
      hideLevel: 4
    }, {
      prop: 'deviceCode',
      label: '抓拍设备SN',
      hideLevel: 5
    }, {
      prop: 'deviceType',
      label: '抓拍设备类型',
      hideLevel: 2
    }, {
      prop: 'time',
      label: '时间',
      minWidth: '184',
      hideLevel: 1
    }, {
      prop: 'picCount',
      label: '证据图片数量',
      hideLevel: 8
    }, {
      prop: 'actionCredible',
      label: '车牌可信度/行为可信度',
      hideLevel: 9
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
  },
  swiperData: [
    {
      imgId: '[statusPhoto]d617adbc-88d9-434b-9f87-a4a7ebed646f',
      imgPath: '/static/image/test_img.png',
      time: '2018-09-21 07:43:19.289',
      isSnap: 1,
      position: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      }
    }, {
      imgId: '[statusPhoto]d617adbc-88d9-434b-9f87-a4a7ebed646f',
      imgPath: '/static/image/test_img.png',
      time: '2018-09-21 07:43:19.289',
      isSnap: 1,
      position: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      }
    }, {
      imgId: '[statusPhoto]d617adbc-88d9-434b-9f87-a4a7ebed646f',
      imgPath: '/static/image/test_img.png',
      time: '2018-09-21 07:43:19.289',
      isSnap: 1,
      position: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      }
    }, {
      imgId: '[statusPhoto]d617adbc-88d9-434b-9f87-a4a7ebed646f',
      imgPath: '/static/image/test_img.png',
      time: '2018-09-21 07:43:19.289',
      isSnap: 1,
      position: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      }
    },
    {
      imgId: '[statusPhoto]d617adbc-88d9-434b-9f87-a4a7ebed646f',
      imgPath: '/static/image/test_img.png',
      time: '2018-09-21 07:43:19.289',
      isSnap: 1,
      position: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      }
    },
    {
      imgId: '[statusPhoto]d617adbc-88d9-434b-9f87-a4a7ebed646f',
      imgPath: '/static/image/test_img.png',
      time: '2018-09-21 07:43:19.289',
      isSnap: 1,
      position: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      }
    },
    {
      imgId: '[statusPhoto]d617adbc-88d9-434b-9f87-a4a7ebed646f',
      imgPath: '/static/image/test_img.png',
      time: '2018-09-21 07:43:19.289',
      isSnap: 1,
      position: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      }
    }
  ]
}
export let computed = {}
