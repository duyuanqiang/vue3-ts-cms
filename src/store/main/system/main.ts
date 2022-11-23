import { localCacheType } from '@/constant'
import { getAllDepartData, getAllRolesData } from '@/service/main/main'
import type { mainStoreType } from '@/types'
import { localCache } from '@/utils/cache'
import { defineStore } from 'pinia'
const useMainStore = defineStore('main', {
  state: (): mainStoreType => ({
    rolesData: localCache.getCache(localCacheType.ROLESINFO),
    rolesCount: 0,
    departmentsData: localCache.getCache(localCacheType.DEPARTSINFO),
    departCount: 0
  }),
  actions: {
    async getAllRolesData() {
      const rolesData = await getAllRolesData()
      this.rolesData = rolesData.data.list
      localCache.setCache(localCacheType.ROLESINFO, rolesData.data.list)
      this.rolesCount = rolesData.data.totalCount
      const departsData = await getAllDepartData()
      this.departmentsData = departsData.data.list
      localCache.setCache(localCacheType.DEPARTSINFO, departsData.data.list)
      this.departCount = departsData.data.totalCount
    }
  }
})
export default useMainStore
