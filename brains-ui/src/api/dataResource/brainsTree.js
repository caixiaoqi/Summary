import request from '@/utils/request'
import qs from 'qs'
export function fetchBrainsTree(){
    return request({
        url:'/api/v1/catalog/tree',
        method:'get'
    })
}