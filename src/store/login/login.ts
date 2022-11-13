import type { loginStoreType } from '@/types/common'
import { defineStore } from 'pinia'
import { getUserInfoById, login, getUserMenusByRoleId } from '@/service/login'
import type { accountType } from '@/types/common'
import { localCache } from '@/utils/cache'
import { localCacheType } from '@/constant'
import router from '@/router'

export const useLoginStore = defineStore('login', {
  state: (): loginStoreType => ({
    id: '',
    token: localCache.getCache(localCacheType.TOKEN),
    name: '',
    userInfo: {},
    userMenusInfo: []
  }),
  actions: {
    async loginAction(account: accountType) {
      // 1.账号登录, 获取token等信息
      const logindata = await login(account)
      if (logindata && logindata.data) {
        this.id = logindata.data?.id ?? ''
        this.name = logindata.data?.name ?? ''
        this.token = logindata.data?.token ?? ''
        localCache.setCache(localCacheType.TOKEN, this.token)
        //用户信息
        const userInfo = await getUserInfoById(this.id)
        this.userInfo = userInfo.data
        //用户权限
        const userMenusInfo = await getUserMenusByRoleId(this.id)
        this.userMenusInfo = userMenusInfo.data
        //跳转到主界面
        router.push('/main')
      }
    }
  }
})
