<template>
  <div class="menu">
    <page-content :config-data="contentConfig" />
  </div>
</template>

<script setup lang="ts">
import pageContent from '@/components/page/page-content.vue'
import contentConfig from './config/menuConfig'
</script>

<style scoped></style>
