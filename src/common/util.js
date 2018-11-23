import Vue from 'vue'
window.UTILS = {
  // 检查密码字符是否合法
  checkPassword (password = '') {
    return new Promise(resolve => {
      if (!password) {
        resolve()
        return
      }
      // 支持大小写、全角和半角英文字母、数字和如下键盘符号
      // 特殊：不支持中括号
      let reg = /^[Ａ-Ｚａ-ｚA-Za-z0-9`~!@#$%^&*()_+\-+{}\\|;:'",<.>/?｀～！＠＃＄％＾＆＊（）－＿＝＋［｛］｝＼｜；：＇＂，＜．＞／？·~！@#￥%……&*（）\-——=+【{】}、|；：‘“，《。》、？·～！＠＃￥％……＆×（）－——＝＋【｛】｝＼｜；：‘“，《。》、？]+$/
      let isLegitimate = reg.test(password)
      if (isLegitimate) {
        resolve()
      } else {
        let overlayOcx = window.UTILS.overlayOcx.start()
        let illegal = ''
        Array.prototype.forEach.call(password, chart => {
          if (!reg.test(chart)) {
            illegal += chart
          }
        })
        window.APP.$alert('Your password contains characters that are not valid：' + illegal, window.APP.$t('app.tips'), {
          closeOnClickModal: false,
          confirmButtonText: window.APP.$t('app.comfirm'),
          type: 'info',
          showCancelButton: false
        }).then(() => {
          overlayOcx.end()
        }).catch(e => {
          overlayOcx.end()
        })
      }
    })
  },
  // 计算字符串的字节数
  byteLength (str) {
    return str.replace(/[^\u0000-\u00ff]/g, 'aa').length
  },
  /**
   * 为某 DOM 元素监听 window 大小改变
   * @param id DOM元素的id
   * @param callback 回调函数
   * @returns {{off: (function())}} 取消监听
   */
  onWindowResize (id, callback) {
    $(window).on('resize', dispatchResize)
    function dispatchResize () {
      let target = document.getElementById(id)
      if (target) { // 触发那个元素的 resize 事件
        callback($(target).width(), $(target).height())
      } else { // 如果那个元素已经被干掉了，就取消监听事件，以免内存泄漏
        $(window).off('resize', dispatchResize)
      }
    }
    return {
      off () {
        $(window).off('resize', dispatchResize)
      }
    }
  },
  async nextTick () {
    return new Promise(resolve => {
      Vue.nextTick(resolve)
    })
  },
  /**
   * @function escapeHTML 转义html脚本 < > & " '
   * @param a -
   *            字符串
   */
  escapeHTML: function (a) {
    try {
      a = '' + a
      let replaceSTR = function replaceSTR (arr, str) {
        for (let i = 0, len = arr.length; i < len; i++) {
          let r = new RegExp(arr[i][0], 'g')
          str = str.replace(r, arr[i][1])
        }
        return str
      }
      let ASCIIArr = [
          [/&/, '&amp;'],
          [/</, '&lt;'],
          [/>/, '&gt;'],
          [/"/, '&quot;'],
          [/'/, '&#39;'],
          [/-/, '&#45;'],
          [/_/, '&#95;'],
          [/\./, '&#46;'],
          [/!/, '&#33;'],
          [/~/, '&#126;'],
          [/\*/, '&#42;'],
          [/\(/, '&#40;'],
          [/\)/, '&#41;']
      ]
      a = replaceSTR(ASCIIArr, a)
      a = encodeURIComponent(a)
    } catch (e) {

    }
    return a
  },
  /**
   * @function unescapeHTML 还原html脚本 < > & " '
   * @param a -
   *            字符串
   */
  unescapeHTML: function (a) {
    try {
      a = '' + a
      let replaceSTR = function replaceSTR (arr, str) {
        arr.forEach(item => {
          let r = new RegExp(item[1], 'g')
          str = str.replace(r, item[0])
        })
        return str
      }
      let ASCIIArr = [
        ['&', '&amp;'],
        ['<', '&lt;'],
        ['>', '&gt;'],
        ['"', '&quot;'],
        ["'", '&#39;'],
        ['-', '&#45;'],
        ['_', '&#95;'],
        ['.', '&#46;'],
        ['!', '&#33;'],
        ['~', '&#126;'],
        ['*', '&#42;'],
        ['(', '&#40;'],
        [')', '&#41;']
      ]
      a = decodeURIComponent(a)
      a = replaceSTR(ASCIIArr, a)
    } catch (e) {

    }
    return a
  }
}
window.log = console.log

// 添加到Date的原型的方法，把时间按照格式输出字符
window.Date.prototype.format = function (fmt) {
  let o = {
    'M+': this.getMonth() + 1,                 // 月份
    'd+': this.getDate(),                    // 日
    'h+': this.getHours(),                   // 小时
    'm+': this.getMinutes(),                 // 分
    's+': this.getSeconds(),                 // 秒
    'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
    'S': this.getMilliseconds()             // 毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}
