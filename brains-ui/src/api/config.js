import request from '@/utils/request'

export function fetchList(query) {
    return request({
      url: '/uc/api/config',
      method: 'get',
      params: query
    })
}

export function getObj(id) {
    return request({
      url: '/uc/api/config/' + id,
      method: 'get'
    })
  }

  export function getPwdLimitValue(confCode) {
    return request({
      url: '/uc/api/config/getPwdLimit/' + confCode,
      method: 'get'
    })
  }  

export function addObj(obj) {
    return request({
        url: 'uc/api/config',
        method: 'post',
        params: obj
    })
}

export function putObj(obj) {
    return request({
      url: 'uc/api/config',
      method: 'patch',
      params: obj
    })
  }

export function delObj(id) {
    return request({
        url: 'uc/api/config/' + id,
        method: 'delete'
    })
}