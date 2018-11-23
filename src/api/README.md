# 后台接口

为了避免不同的开发者在开发的过程中编辑同一个API接口文件，每一位前端开发者都需要在 src/api 文件夹中新建一个 js 文件，比如：


```
# 新建一个 Liangxy.js 的文件
export default {
  '/log/query/fields': {
    cache: false,
    host: '',
    method: 'post'
  }
}

```
