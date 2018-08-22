import request from '@/utils/request'

export function orgList(query) {
	return request({
			url: '/uc/api/org',
			method: 'get',
			params: query
	})
}

export function allOrgList() {
	return request({
			url: '/uc/api/org/all',
			method: 'get'
	})
}

export function roleList(query) {
  return request({
    url: '/uc/api/role/getRoleList4Org',
    method: 'get',
    params: query   
  })
}

export function getObj(id) {
  return request({
    url: '/uc/api/org/' + id,
    method: 'get'
  })
}

export function getOrg(id) {
  return request({
    url: '/uc/api/org/' + id,
    method: 'get'
  })
}

export function addObj(obj) {
  return request({
      url: 'uc/api/org',
      method: 'post',
      params: obj
  })
}

export function putObj(obj) {
  return request({
    url: 'uc/api/org',
    method: 'patch',
    params: obj
  })
}

export function putSomeObj(id,status) {
	return request({
		url: 'uc/api/org/status',
		method: 'patch',
		params: {
			id: id,
			status: status
		}
	})
}

export function delObj(id) {
  return request({
      url: 'uc/api/org/' + id,
      method: 'delete'
  })
}

export function getRoleByOrg(id) {
  return request({
      url: 'uc/api/orgRole/' + id,
      method: 'get'
  })
}

export function updateRoles(obj,ids){
  return request({
		url: 'uc/api/org',
		method: 'patch',
		params: {
			obj: obj,
			roleIds: ids
		}
	})
}
  