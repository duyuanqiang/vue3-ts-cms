import { systemChildType } from '@/constant'
import { getAllListsData } from '@/service/main/main'
import type { mainStoreType } from '@/types'
import { defineStore } from 'pinia'
const useMainStore = defineStore('main', {
  state: (): mainStoreType => ({
    rolesData: [],
    rolesCount: 0,
    departmentsData: [],
    departCount: 0,
    menusData: []
  }),
  actions: {
    async getAllListsData() {
      const rolesData = await getAllListsData(systemChildType.ROLE)
      this.rolesData = rolesData.data.list
      this.rolesCount = rolesData.data.totalCount
      const departsData = await getAllListsData(systemChildType.DEPARTMENT)
      this.departmentsData = departsData.data.list
      this.departCount = departsData.data.totalCount
      const menusData = await getAllListsData(systemChildType.MENU)
      this.menusData = menusData.data.list
    }
  }
})
export default useMainStore
