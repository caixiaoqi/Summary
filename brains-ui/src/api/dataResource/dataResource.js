import request from '@/utils/request'
import qs from 'qs'

export function fetchTabelData3(id,query){
  return request({
    url: '/api/v1/catalog/resources/' + id,
    method: 'get',
    params: query
  })
}

export function previewResource(id) {
  return request({
    url: 'api/v1/dataresource/' + id,
    method: 'get',
  })
}

export function getResourceListById(id) {
  return request({
    url: 'api/v1/datasource/' + id + '/table',
    method: 'get'
  })
}

export function getResourceListByIdType(query) {
  return request({
    url:'api/v1/dataresource/database/preview',
    method: 'post',
    params: query
  })
}