(function (w, d) {
  let wsOnMessage = []
  let wsOnOpen = []
  w.util = {
    async setBorder (selector, point) {
      // 在没加载完真正的图片之前，就再等 500 ms
      if (!$(selector).find('img.onload').length) {
        setTimeout(() => {
          window.util.setBorder(...arguments)
        }, 500)
        return
      }
      await new Promise(resolve => setTimeout(resolve, 300))
      let $border = $('<div></div>')
        // 计算原图宽高与实际显示宽高的比例
      let parentWidth = parseInt($(selector).width())
        // parentHeight = parseInt($(selector).height()),
      let width = parseInt($(selector).find('img.onload').css('width'))
      let height = parseInt($(selector).find('img.onload').css('height'))
      let x1 = point.x1 / 100
      let y1 = point.y1 / 100
      let x2 = point.x2 / 100
      let y2 = point.y2 / 100

        // 放大倍数
      let scale = 2.5

        // 车牌宽度
      let widthPlate = (x2 - x1) * width

        // 车牌高度
      let heightPlate = (y2 - y1) * height

        // 边框宽度
      let widthWrap = widthPlate * scale

        // 边框高度
      let heightWrap = heightPlate * scale

        // 边框在图片中的绝对定位
      let left = width * x1 - (widthWrap - widthPlate) / 2
      let top = height * y1 - (heightWrap - heightPlate) / 2
      // 限制红线不超过图片本身大小
      widthWrap = widthWrap > width ? width : widthWrap
      heightWrap = heightWrap > height ? height : heightWrap
      top = top < 0 ? 0 : top
      left = left < 0 ? 0 : left
      // 让 photo-wrap 自适应图片的高度
      $(selector).parents('.carousel-h').eq(0).height(height + 70).find('.wrap').eq(0).find('.photo-wrap').height(height).find('.photo').height(height)
      $border.css({
        position: 'absolute',
        border: '5px solid #f00',
        //  + (parentHeight - height) / 2
        top: top + 'px',
        left: left + (parentWidth - width) / 2 + 'px',

        width: widthWrap + 'px',
        height: heightWrap + 'px'
      })
      $(selector).append($border)
      console.log($border)
    },
    // 字典类型存储转换
    // 使用方法
    // util.dict.get('car_no_colour',{
    //  dictionaries_name:<想搜索的名字>
    // }).dictionaries_value;
    dict: {
      /**
       * 根据(字典类型)、(字典值或字典名)获取(字典名或字典值)
       *
       * @param type {string} 字典类型
       * @param obj {object}  字典名的对象{dictionaries_name:<想搜索的字典名>}，或字典值的对象{dictionaries_value:<想搜索的字典值>}，或者回调函数
       * @param callback {function}  回调函数
       * @returns
       */
      get (type, obj, callback) {
        let data = w.util.dict.data
        if (!obj) return data[type] || []
        if (!data[type]) return []
        if (obj.dictName !== undefined) {
          return data[type].find(o => o.dictName === obj.dictName) || []
        }
        if (obj.dictValue !== undefined) {
          return data[type].find(o => o.dictValue === obj.dictValue) || []
        }
        return []
      },
      init (data) {
        // 初始化字典
        let result = {}
        data.forEach(item => {
          let key = item.dictKey
          if (result[key]) {
            result[key] = result[key].concat(item.dictList)
          } else {
            result[key] = item.dictList
          }
        })
        for (let key in result) {
          let item = result[key]

          // 给 item 排序，未知的都放最后
          let unknown = item.find(o => o.dictName === '未知')
          if (!unknown) continue
          item.splice(item.indexOf(unknown), 1)
          item.push(unknown)
        }
        w.util.dict.data = result
        return result
      },

      data: []
    },
    /**
     * 判断一个 rgb 颜色是否是深色
     * @param color {string} 16进制颜色或rgb颜色
     * @returns {boolean}
     */
    isDeepColor (color) {
      if (/^#/.test(color)) {
        color = color.colorRgb()
      } else if (!/^rgb\(.+\)$/.test(color)) {
        return false
      }
      let rgbValue = color.replace('rgb(', '').replace(')', '')
      let rgbArr = rgbValue.split(',')
      let grayLevel = rgbArr[0] * 0.299 + rgbArr[1] * 0.587 + rgbArr[2] * 0.114
      return grayLevel > 192
    },
    /**
     * 使用方法
     * 1、连接某个 websocket
     */
    websocket: {
      instance: undefined,
      async open (url) {
        if (window.util.websocket.instance) return
        window.util.websocket.instance = new WebSocket(url)
        window.util.websocket.instance.addEventListener('open', e => {
          if (!e.data) return
          let data = JSON.parse(e.data)
          if (!data.data) return
          wsOnOpen.forEach(item => {
            if (data.data.cmd === item.cmd) {
              item.callback(data.data.data, window.util.websocket.instance)
            }
          })
          // window.util.websocket.instance.send(`{
          //   sessionId: '${localStorage.sessionId}',
          //   id: '${localStorage.sessionId}',
          //   command: 'WS.LOGIN',
          //   params: {}
          // }`)
        })
        window.util.websocket.instance.addEventListener('message', e => {
          if (!e.data) return
          let data = JSON.parse(e.data)
          if (!data.data) return
          wsOnMessage.forEach(item => {
            if (data.data.cmd === item.cmd) {
              item.callback(data.data.data, window.util.websocket.instance)
            }
          })
        })
        window.util.websocket.instance.addEventListener('close', WSClose)
        // 断线重连
        function WSClose (e) {
          console.log(
            `%c websocket %c 断线了`,
            'background:#35495e;padding:1px;border-radius:3px 0 0 3px;color:#FFF',
            'background:#41b883;padding:1px;border-radius:0 3px 3px 0;color:#FFF'
          )
          if (!window.util.websocket.instance || window.util.websocket.instance.notReOpen) return
          window.util.websocket.instance.close()
          window.util.websocket.instance = undefined
          setTimeout(() => {
            console.log('试图重连', url)
            window.util.websocket.open(url)
          }, 2000)
        }
      },
      onMessage (cmd, callback) {
        let hasSame = wsOnMessage.find(item => item.callback === callback)
        if (hasSame) return // 不许重复绑定事件监听
        wsOnMessage.push({
          cmd: cmd,
          callback: callback
        })
      },
      offMessage (cmd, callback) {
        if (callback) {
          let that = wsOnMessage.find(item => item.callback === callback && item.cmd === cmd)
          if (!that) return
          let index = wsOnMessage.indexOf(that)
          wsOnMessage.splice(index, 1)
        } else {
          let those = wsOnMessage.filter(item => item.cmd === cmd)
          those.forEach(item => {
            let index = wsOnMessage.indexOf(item)
            wsOnMessage.splice(index, 1)
          })
        }
      },
      onOpen (cmd, callback) {
        let hasSame = wsOnOpen.find(item => item.callback === callback)
        if (hasSame) return // 不许重复绑定事件监听
        wsOnOpen.push({
          cmd: cmd,
          callback: callback
        })
      },
      offOpen (cmd, callback) {
        if (callback) {
          let that = wsOnOpen.find(item => item.callback === callback && item.cmd === cmd)
          if (!that) return
          let index = wsOnOpen.indexOf(that)
          wsOnOpen.splice(index, 1)
        } else {
          let those = wsOnOpen.filter(item => item.cmd === cmd)
          those.forEach(item => {
            let index = wsOnOpen.indexOf(item)
            wsOnOpen.splice(index, 1)
          })
        }
      },
      close () {
        if (!window.util.websocket.instance) return
        window.util.websocket.instance.notReOpen = true
        window.util.websocket.instance.close()
      }
    }
  }
})(window, document)
