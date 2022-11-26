<template>
  <div class="user">
    <div class="user-header">
      <page-header
        :configData="usersHeaderConfig"
        @reset-click="handleResetClick"
        @search-click="handleQureyClick"
      />
    </div>
    <div class="content">
      <page-content
        ref="contentRef"
        :configData="usersContentConfig"
        @new-click="handleNewClick"
        @edit-click="handleEditClick"
      />
    </div>
  </div>
  <page-modal ref="modalRef" :configData="modalConfigData" />
</template>

<script setup lang="ts">
import pageHeader from '@/components/page/page-header.vue'
import pageContent from '@/components/page/page-content.vue'
import pageModal from '@/components/page/page-modal.vue'
import {
  usersHeaderConfig,
  usersContentConfig,
  usersModalConfig
} from './config/users.config'

import { computed } from 'vue'
import { usePageContent, usePageModal } from '@/hooks/usePageHooks'
import useMainStore from '@/store/main/system/main'
import { formatOptionsData } from '@/utils/map-options'
const modalConfigData = computed(() => {
  const mainStore = useMainStore()
  const modalDepartData = formatOptionsData(
    usersModalConfig,
    mainStore.departmentsData,
    'departmentId'
  )
  return formatOptionsData(modalDepartData, mainStore.rolesData, 'roleId')
})
const { contentRef, handleResetClick, handleQureyClick } = usePageContent()
const { modalRef, handleNewClick, handleEditClick } = usePageModal()
</script>

<style scoped></style>
