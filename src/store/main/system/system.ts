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
    async deleteUserData(id: number) {
      const message = await deleteUserListData(id)
      console.log(message)
      this.getUserListData({ offset: 0, size: 10 })
    },
    async addUserData(addInfo: any) {
      const message = await addUserListData(addInfo)
      console.log(message)
      this.getUserListData({ offset: 0, size: 10 })
    },
    async editUserData(id: number, addInfo: any) {
      const message = await editUserData(id, addInfo)
      console.log(addInfo, message)
      this.getUserListData({ offset: 0, size: 10 })
    }
  }
})
export default useSysetmStore
