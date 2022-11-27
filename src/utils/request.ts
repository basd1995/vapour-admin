import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'
import { ElMessage, ElMessageBox, ElNotification } from 'element-plus'

// 以下这些code需要重新登录
const reloadCodes = [401, 1011007, 1011008]
const errorCodeMap = {
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
}
// 重新登录弹出窗口
const loginBack = ref(false)

const httpClient = axios.create({
  baseURL: 'https://www.fastmock.site/mock/1e7636d791da293aef2d3626c05b22b1/vp',
  timeout: 10000,
})

// 请求拦截器
httpClient.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = localStorage.getItem('token')

  if (token)
    // 加!表示该属性一定存在
    config.headers!.token = sessionStorage.getItem('token')

  if (config.method === 'get') {
    config.params = config.params || {}
    config.params._ = new Date().getTime()
  }
  return config
}, (error: any) => {
  return Promise.reject(error)
})

// 保持重新登录Modal的唯一性
const error = () => {
  ElMessageBox.confirm(
    '登录已失效， 请重新登录',
    '提示：',
    {
      confirmButtonText: '重新登录',
      type: 'warning',
    },
  ).then(() => {
    window.location.reload()
  })
}

// 响应拦截器
httpClient.interceptors.response.use((response: AxiosResponse) => {
  const data = response.data
  const code = data.code
  if (reloadCodes.includes(code)) {
    if (!loginBack.value)
      error()
    return Promise.reject(data)
  }
  if (code !== 200) {
    ElMessage('this is a message.')
    return Promise.reject(data)
  }
  else {
    // 统一成功提示
    const responseUrl = response.config.url
    const apiNameArray = ['add', 'edit', 'delete', 'update', 'grant', 'reset', 'start', 'stop',
      'pass', 'disable', 'enable', 'revoke', 'suspend', 'active', 'turn', 'adjust', 'reject']
    apiNameArray.forEach((apiName) => {
      if (responseUrl!.includes(apiName))
        ElMessage.success(data.msg)
    })
  }
  return Promise.resolve(data.data)
}, (error) => {
  if (error) {
    const status = 503
    const message = errorCodeMap[status]
    ElNotification.error({
      title: '请求错误',
      message,
    })
    return Promise.reject(status)
  }
})

export default httpClient
