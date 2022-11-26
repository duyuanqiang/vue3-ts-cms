<template>
  <div class="department">
    <page-header
      :configData="departsHeaderConfig"
      @reset-click="handleResetClick"
      @search-click="hanleQureyClick"
    />
    <page-content
      :configData="departsContentConfig"
      ref="contentRef"
      @new-click="handleNewClick"
      @edit-click="hanleEditClick"
    />
    <page-modal ref="modalRef" :configData="modalConfigData" />
  </div>
</template>

<script lang="ts" setup>
import pageHeader from '@/components/page/page-header.vue'
import pageContent from '@/components/page/page-content.vue'
import pageModal from '@/components/page/page-modal.vue'
import {
  departsHeaderConfig,
  departsContentConfig,
  departModalConfig
} from './config/departments.config'
import { computed } from 'vue'
import useMainStore from '@/store/main/system/main'
import { usePageContent, usePageModal } from '@/hooks/usePageHooks'
import { formatOptionsData } from '@/utils/map-options'
const modalConfigData = computed(() => {
  const mainStore = useMainStore()
  return formatOptionsData(
    departModalConfig,
    mainStore.departmentsData,
    'parentId'
  )
})
const { contentRef, handleResetClick, hanleQureyClick } = usePageContent()
const { modalRef, handleNewClick, hanleEditClick } = usePageModal()
</script>

<style scoped></style>
