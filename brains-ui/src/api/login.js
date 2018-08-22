import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: 'uc/api/auth',
    method: 'get',
    params:{
      username,
      password
    }
  })
}

export function register(obj) {
  return request({
    url: 'uc/api/auth',
    method: 'post',
    params:obj
  })
}

export function getInfo(currentUserToken) {
  return request({
    url: 'uc/api/user/current',
    method: 'get',
    params: { currentUserToken }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
