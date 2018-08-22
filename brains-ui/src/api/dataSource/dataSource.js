import request from '@/utils/request'
import qs from 'qs'
export function fetchSourceList(query) {
	return request({
		url: '/api/v1/datasource/conn',
		method: 'get',
		params: query
	})
}

export function connTest(params) {
	let para = qs.stringify(params)
	return request({
		url: '/api/v1/datasource/conn_tables',
		method: 'post',
		data: para
	})
}

export function addSource(params) {
	let para = qs.stringify(params)
	return request({
		url:'/api/v1/datasource/conn',
		method: 'post',
		data: para
	})
}

export function delDataSource(id) {
  return request({
      url: '/api/v1/datasource/conn/' + id,
      method: 'delete'
  })
}