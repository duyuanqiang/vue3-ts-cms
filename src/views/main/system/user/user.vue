<template>
  <div class="user">
    <div class="user-header">
      <user-header
        @reset-click="handleResetClick"
        @search-click="hanleQureyClick"
      />
    </div>
    <div class="content">
      <user-content ref="contentRef" />
    </div>
  </div>
</template>

<script setup lang="ts">
import userHeader from './c-cnps/user-header.vue'
import userContent from './c-cnps/user-content.vue'
import { ref } from 'vue'
const contentRef = ref<InstanceType<typeof userContent>>()
function handleResetClick() {
  contentRef.value?.fetchQueryData()
}
function hanleQureyClick(formData: any) {
  contentRef.value?.fetchQueryData(formData)
}
</script>

<style scoped></style>
