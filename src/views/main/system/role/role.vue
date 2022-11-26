<template>
  <div class="role">
    <page-header
      :configData="searchConfig"
      @query-click="handleQureyClick"
      @reset-click="handleResetClick"
    />
    <page-content
      :configData="contentConfig"
      :otherInfo="otherInfo"
      ref="contentRef"
      @new-click="handleNewClick"
      @edit-click="handleEditClick"
    />
    <page-modal :configData="modalConfig" ref="modalRef">
      <template #menulist>
        <el-tree
          :data="menusData"
          show-checkbox
          node-key="id"
          :props="{
            children: 'children',
            label: 'name'
          }"
          @check="handleElTreeCheck"
        />
      </template>
    </page-modal>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { ref, nextTick } from 'vue'
import type { ElTree } from 'element-plus'

import pageHeader from '@/components/page/page-header.vue'
import pageContent from '@/components/page/page-content.vue'
import pageModal from '@/components/page/page-modal.vue'
import { searchConfig, contentConfig, modalConfig } from './config/role.config'

import { usePageContent, usePageModal } from '@/hooks/usePageHooks'
import useMainStore from '@/store/main/system/main'
// import { mapMenuListToIds } from '@/utils/map-menus'

// 逻辑关系
const { contentRef, handleQureyClick, handleResetClick } = usePageContent()
const { modalRef, handleNewClick, handleEditClick } = usePageModal()
// newCallback,
// editCallback
// 获取完整的菜单
const mainStore = useMainStore()
const { menusData } = storeToRefs(mainStore)
const otherInfo = ref({})
function handleElTreeCheck(data1: any, data2: any) {
  const menuList = [...data2.checkedKeys, ...data2.halfCheckedKeys]
  console.log(data2.checkedKeys)
  otherInfo.value = { menuList }
}

const treeRef = ref<InstanceType<typeof ElTree>>()
// function newCallback() {
//   nextTick(() => {
//     treeRef.value?.setCheckedKeys([])
//   })
// }
// function editCallback(itemData: any) {
//   // nextTick(() => {
//   //   const menuIds = mapMenuListToIds(itemData.menuList)
//   //   treeRef.value?.setCheckedKeys(menuIds)
//   // })
// }
</script>

<style lang="less" scoped></style>
