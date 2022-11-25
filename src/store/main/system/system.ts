import type { systemStoreType } from '@/types/common'
import { defineStore } from 'pinia'
import {
  deleteUserListData,
  postUsersListData,
  addUserListData,
  editUserData
} from '@/service/main/system/system'
const useSysetmStore = defineStore('system', {
  state: (): systemStoreType => ({
    listData: [],
    totalCount: 0
  }),
  actions: {
    async getUserListData(queryInfo: any, pageName = 'user') {
      const listData = await postUsersListData(queryInfo, pageName)
      this.listData = listData.data.list
      this.totalCount = listData.data.totalCount
    },
    async deleteUserData(id: number, pageName = 'users') {
      const message = await deleteUserListData(id, pageName)
      console.log(message)
      this.getUserListData({ offset: 0, size: 10 }, pageName)
    },
    async addUserData(addInfo: any, pageName = 'users') {
      const message = await addUserListData(addInfo, pageName)
      console.log(pageName, message)
      this.getUserListData({ offset: 0, size: 10 }, pageName)
    },
    async editUserData(id: number, addInfo: any, pageName = 'users') {
      console.log(id, addInfo, pageName)

      const message = await editUserData(id, addInfo, pageName)
      this.getUserListData({ offset: 0, size: 10 }, pageName)
    }
  }
})
export default useSysetmStore
