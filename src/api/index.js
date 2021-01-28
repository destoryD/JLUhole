import request from '@/utils/request'

export function fetchGetIndex () {
  return request({
    url: '/index',
    method: 'get'
  })
}
