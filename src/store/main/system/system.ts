import type { systemStoreType } from '@/types/common'
import { defineStore } from 'pinia'
import { postUsersListData } from '@/service/system/system'
const useSysetmStore = defineStore('system', {
  state: (): systemStoreType => ({
    listData: [],
    totalCount: 0
  }),
  actions: {
    async getUserListData(queryInfo) {
      const listData = await postUsersListData(queryInfo)
      this.listData = listData.data.list
      this.totalCount = listData.data.totalCount
    }
  }
})
export default useSysetmStore
