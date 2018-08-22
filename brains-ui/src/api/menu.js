import request from '@/utils/request'


export function menuList() {
  return request({
    url: '/uc/api/menu',
    method: 'get'
  })
}

export function fetchList(query) {
    return request({
      url: '/uc/api/menu',
      method: 'get',
      params: query
    })
}

export function getObj(id) {
    return request({
      url: '/uc/api/menu/' + id,
      method: 'get'
    })
  }

export function addObj(obj) {
    return request({
        url: 'uc/api/menu',
        method: 'post',
        params: obj
    })
}

export function putObj(obj) {
    return request({
      url: 'uc/api/menu',
      method: 'patch',
      params: obj
    })
  }

  export function putIsShowObj(id,isShow) {
    return request({
      url: 'uc/api/menu/' + id,
      method: 'patch',
      params: {
        isShow:isShow
      }
    })
  }

  export function putWeightObj(id,weight) {
    return request({
      url: 'uc/api/menu/' + id,
      method: 'patch',
      params:  {
        weight:weight
      }
    })
  }

export function delObj(id) {
    return request({
        url: 'uc/api/menu/' + id,
        method: 'delete'
    })
}

export function getUerMenu(userId) {
  return request({
    url: '/uc/api/userMenu/getMenuByUserId/' + userId,
    method: 'get'
  })
}

/**
 * 获取用户以及用户角色的菜单
 */
export function getUserRoleMenus(userId) {
  return request({
    url: '/uc/api/menu/userRole/' + userId,
    method: 'get'
  })
}

export function checkPerm(href,permission){
  return request({
    url: '/uc/api/menu/checkPerm',
    method: 'get',
    params:{
      href,
      permission
    }
  })
}