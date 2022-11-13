import hyRequest from '../index'
import type { accountType } from '@/types'

export function login(params: any) {
  return hyRequest.post({
    url: '/login',
    data: params
  })
}

export function getUserInfoById(id: string) {
  return hyRequest.get({
    url: `/users/${id}`
  })
}
export function getUserMenusByRoleId(id: string) {
  return hyRequest.get({
    url: `/role/${id}/menu`
  })
}
