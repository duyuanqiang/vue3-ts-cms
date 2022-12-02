import type { systemStoreType } from '@/types/common'
import { defineStore } from 'pinia'
import {
  deleteUserListData,
  postContentListData,
  addUserListData,
  editUserData
} from '@/service/main/system/system'
import useMainStore from './main'
const useSysetmStore = defineStore('system', {
  state: (): systemStoreType => ({
    listData: [],
    totalCount: 0
  }),
  actions: {
    async getUserListData(queryInfo: any, pageName = 'users') {
      const listData = await postContentListData(queryInfo, pageName)
      this.listData = listData.data.list
      this.totalCount = listData.data.totalCount
    },
    async deleteUserData(id: number, pageName = 'users') {
      const message = await deleteUserListData(id, pageName)
      console.log(message)
      this.getUserListData({ offset: 0, size: 10 }, pageName)
      //更新角色部门菜单数据
      const mainStore = useMainStore()
      mainStore.getAllListsData()
    },
    async addUserData(addInfo: any, pageName = 'users') {
      const message = await addUserListData(addInfo, pageName)
      console.log(pageName, message)
      this.getUserListData({ offset: 0, size: 10 }, pageName)
      //更新角色部门菜单数据
      const mainStore = useMainStore()
      mainStore.getAllListsData()
    },
    async editUserData(id: number, addInfo: any, pageName = 'users') {
      console.log(id, addInfo, pageName)

      const message = await editUserData(id, addInfo, pageName)
      this.getUserListData({ offset: 0, size: 10 }, pageName)
      //更新角色部门菜单数据
      const mainStore = useMainStore()
      mainStore.getAllListsData()
    }
  }
})
export default useSysetmStore
