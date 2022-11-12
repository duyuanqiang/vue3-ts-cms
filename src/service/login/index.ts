import hyRequest from '../index'
import type { accountType } from '@/types'

export function login(params: any) {
  console.log(params)
  return hyRequest.post({
    url: '/login',
    data: params
  })
}
