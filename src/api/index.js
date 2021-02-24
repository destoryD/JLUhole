import request from '@/utils/request'

export function fetchGetIndex (data) {
  return request({
    url: '/index',
    method: 'post',
    data
  })
}
