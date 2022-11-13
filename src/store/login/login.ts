import { defineStore } from 'pinia'
import { login } from '@/service/login'
import type { accountType } from '@/types/common'
import { localCache } from '@/utils/cache'
import { localCacheType } from '@/constant'
import router from '@/router'

export const useLoginStore = defineStore('login', {
  state: () => ({
    id: '',
    token: localCache.getCache(localCacheType.TOKEN),
    name: ''
  }),
  actions: {
    async loginAction(account: accountType) {
      // 1.账号登录, 获取token等信息
      const logindata = await login(account)
      this.id = logindata.data.id
      this.name = logindata.data.name
      this.token = logindata.data.token
      localCache.setCache(localCacheType.TOKEN, logindata.data.token)

      //跳转到主界面
      router.push('/main')
    }
  }
})
