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
    userInfo: localCache.getCache(localCacheType.USERINFO),
    userMenusInfo: localCache.getCache(localCacheType.USERMENUSINFO)
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
        localCache.setCache(localCacheType.USERINFO, this.userInfo)
        //角色信息
        const roleId = this.userInfo?.role.id
        const userMenusInfo = await getUserMenusByRoleId(roleId)
        this.userMenusInfo = userMenusInfo.data
        console.log('role', userMenusInfo)
        localCache.setCache(localCacheType.USERMENUSINFO, this.userMenusInfo)
        //跳转到主界面
        router.push('/main')
      }
    }
  }
})
