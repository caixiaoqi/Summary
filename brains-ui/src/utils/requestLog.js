import axios from 'axios'
import { Message } from 'element-ui'

// 创建axios实例
const service = axios.create({
  timeout: 60000 // 请求超时时间
})
service.interceptors.response.use((response) => {
  let status = response.status
  if (status !== 200) {
    let msg = '错误类型：' + response.type + '，错误描述： ' + response.reason
    Message({
      message: msg,
      type: 'error',
      duration: 5 * 1000,
      showClose: true
    })
    return Promise.reject(response)
  }
  return response
})
export default service
