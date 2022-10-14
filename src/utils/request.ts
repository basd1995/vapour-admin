import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'
import { ElMessage } from 'element-plus'

const httpClient = axios.create({
  baseURL: 'https://www.fastmock.site/mock/1e7636d791da293aef2d3626c05b22b1/vp',
  timeout: 10000,
})

// 请求拦截器
httpClient.interceptors.request.use((config: AxiosRequestConfig) => {
  if (config.headers)
    config.headers.token = sessionStorage.getItem('token') || ''
  return config
}, (error: any) => {
  return Promise.reject(error)
})

// 响应拦截器
httpClient.interceptors.response.use((response: AxiosResponse) => {
  const data = response.data
  const code = data.code
  if (code !== 200) {
    ElMessage.error(data.msg)
    return Promise.reject(data)
  }
  return Promise.resolve(data.data)
}, (error: any) => {
  return Promise.reject(error)
})

export default httpClient
