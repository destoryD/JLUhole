import axios from 'axios'
import { getToken } from '@/utils/auth'
// 封装axios
const service = axios.create({
  baseURL: '/api', // url = base url + request url
  timeout: 5000 // 请求超时
})

service.interceptors.request.use(
  config => {
    if (getToken() !== 'none') {
      config.headers['Authorization'] = 'Bearer ' + getToken()
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 200) {
      // 403授权过期 401未认证
      if (res.code === 403 || res.code === 401) {
        // 转去登陆
      }
      return Promise.reject(new Error(res.msg || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // 服务器出现错误
    return Promise.reject(error)
  }
)

export default service
