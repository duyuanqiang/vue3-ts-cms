<template>
  <div class="user">
    <div class="user-header">
      <user-header
        @reset-click="handleResetClick"
        @search-click="hanleQureyClick"
      />
    </div>
    <div class="content">
      <user-content
        ref="contentRef"
        @new-click="handleNewClick"
        @edit-click="hanleEditClick"
      />
    </div>
  </div>
  <user-modal ref="modalRef" />
</template>

<script setup lang="ts">
import userHeader from './c-cnps/user-header.vue'
import userContent from './c-cnps/user-content.vue'
import userModal from './c-cnps/user-modal.vue'

import { ref } from 'vue'
import type { listDataType } from '@/types'
const contentRef = ref<InstanceType<typeof userContent>>()
function handleResetClick() {
  contentRef.value?.fetchQueryData()
}
function hanleQureyClick(formData: any) {
  contentRef.value?.fetchQueryData(formData)
}
const modalRef = ref<InstanceType<typeof userModal>>()
function handleNewClick() {
  modalRef.value?.changeDialogVisable(true)
}
function hanleEditClick(row: listDataType) {
  modalRef.value?.changeDialogVisable(true, row)
}
</script>

<style scoped></style>
