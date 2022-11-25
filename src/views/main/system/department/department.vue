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
    <page-modal ref="modalRef" :configData="departModalConfig" />
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
import { ref } from 'vue'
import type { listDataType } from '@/types'
const contentRef = ref<InstanceType<typeof pageContent>>()
function handleResetClick() {
  contentRef.value?.fetchQueryData()
}
function hanleQureyClick(formData: any) {
  contentRef.value?.fetchQueryData(formData)
}
const modalRef = ref<InstanceType<typeof pageModal>>()
function handleNewClick() {
  modalRef.value?.changeDialogVisable(true)
}
function hanleEditClick(row: listDataType) {
  modalRef.value?.changeDialogVisable(true, row)
}
</script>

<style scoped></style>
