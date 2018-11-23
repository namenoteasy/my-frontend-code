export default function () {
  $(window).on('beforeRequest', (event, config) => {
    config.host = '/static/mock-api/'
    config.method = 'get'
    config.url += '.json'
  })
  $(window).on('errorRequest', (event, response) => {
    this.$message.error('网络错误')
  })
  /* $(window).on('requestInterceptors', (event, config) => {
   // config.headers = {'sessionid': localStorage.sessionid}
   })
   $(window).on('responseInterceptors', (event, response) => {
   if (response.data.code === '10003') {
   this.$router.push({
   path: '/login'
   })
   }
   })
   $(window).on('errorRequest', (event, response) => {
   this.$message.error('网络错误')
   })
   // window.DEBUG = function () {
   //   $(window)
   //   .on('beforeEvent', (e, data) => console.log('beforeEvent', data.vm.$vnode.tag, data))
   //   .on('afterEvent', (e, data) => console.log('afterEvent', data.vm.$vnode.tag, data))
   //   .on('beforeMethods', (e, data) => console.log('beforeMethods', data.vm.$vnode.tag, data))
   //   .on('afterMethods', (e, data) => console.log('afterMethods', data.vm.$vnode.tag, data))
   // }
   }
   /* function mock (config) {
   config.host = 'http://172.18.20.148:10009/mock/'
   } */
  /* function production (config) {
    config.params = {
      id: Math.random().toString().replace('0.', ''), // 请求的唯一标识符
      sessionId: localStorage.sessionId || '', // 用户登录的 sessionId
      requestTime: new Date().getTime().toString(), // 客户端请求时间的时间戳
      command: config.url, // 接口的唯一标识符
      params: config.params
    }
    // config.host = 'http://172.18.20.148:10002/mock/'
    // config.host = 'http://172.18.121.59:8080/cmsClientEntry/'
    // config.host = 'http://172.18.10.245:8087/cms/'
    // config.host = 'http://172.18.121.8:8080/cms/'
    // config.host = 'http://172.18.10.245:8087/highwayClientEntry/'
    // config.host = 'http://172.18.121.42:8080/highwayClientEntry/'
    config.url = 'http/client.htm'
    // config.url = 'platform/client.htm'
  } */
}
