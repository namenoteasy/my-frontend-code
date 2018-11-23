import Vue from 'vue'
// 注册一个全局自定义权限指令 `v-auth`
(function (w, d) {
  w.auth = {
    init (menu) {
      Vue.directive('auth', {
        // 当被绑定的元素插入到 DOM 中时……
        inserted: function (el, binding) {
          // 判断是否有权限

          function judgeAuth (arr) {
            arr.forEach(item => {
              if (item.authType === 'view' && binding.value === item.authKey && item.authHas !== true) {
                $(el).hide()
                return
              }
              if (item.children && item.authType !== 'view') {
                judgeAuth.call(this, item.children)
              }
            })
          }

          judgeAuth.call(this, menu)
        }
      })
    }
  }
})(window, document)
