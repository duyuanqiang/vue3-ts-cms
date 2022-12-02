import { clearFirst } from './../../utils/map-menus'
import type { loginStoreType } from '@/types/common'
import { defineStore } from 'pinia'
import { getUserInfoById, login, getUserMenusByRoleId } from '@/service/login'
import type { accountType } from '@/types/common'
import { localCache } from '@/utils/cache'
import { localCacheType } from '@/constant'
import router from '@/router'
import { getRoleRoutes, mapPermissions } from '@/utils/map-menus'
import useMainStore from '../main/system/main'
import useAnalysisStore from '../main/analysis/analysis'

export const useLoginStore = defineStore('login', {
  state: (): loginStoreType => ({
    id: '',
    name: '',
    token: '',
    userInfo: {},
    userMenusInfo: [],
    permissions: []
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
        localCache.setCache(localCacheType.USERMENUSINFO, this.userMenusInfo)
        //获取权限
        this.permissions = mapPermissions(this.userMenusInfo)
        //获取角色具有的菜单路由。
        const routes = getRoleRoutes(this.userMenusInfo)
        routes.forEach((route) => {
          router.addRoute('main', route)
        })
        //获取所有角色和部门数据
        const mainStore = useMainStore()
        mainStore.getAllListsData()
        //获取商品信息
        const analysisStore = useAnalysisStore()
        analysisStore.fetchAnalysisDataAction()
        //跳转到主界面
        router.push('/main')
      }
    },
    localCacheAction() {
      this.token = localCache.getCache(localCacheType.TOKEN)
      this.userInfo = localCache.getCache(localCacheType.USERINFO)
      this.userMenusInfo = localCache.getCache(localCacheType.USERMENUSINFO)
      if (this.token && this.userInfo && this.userMenusInfo) {
        //获取角色具有的菜单路由。
        const routes = getRoleRoutes(this.userMenusInfo)
        routes.forEach((route) => {
          router.addRoute('main', route)
        })
        //获取所有角色和部门数据
        const mainStore = useMainStore()
        mainStore.getAllListsData()
        //获取角色权限
        this.permissions = mapPermissions(this.userMenusInfo)
        //获取商品信息
        const analysisStore = useAnalysisStore()
        analysisStore.fetchAnalysisDataAction()
      }
    },
    outlogin() {
      localCache.removeCache(localCacheType.TOKEN)
      router.push('/login')
      clearFirst()
    }
  }
})
