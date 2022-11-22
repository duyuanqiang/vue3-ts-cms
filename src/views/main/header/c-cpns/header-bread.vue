<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <template v-for="item in breadcrumbData" :key="item.name">
      <el-breadcrumb-item :to="item.path">
        {{ item.name }}
      </el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { useLoginStore } from '@/store/login/login'
import { mapPathToBreadcrumbs } from '@/utils/map-menus'
import { ArrowRight } from '@element-plus/icons-vue'
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const loginStore = useLoginStore()
let breadcrumbData: any = computed(() => {
  return mapPathToBreadcrumbs(route.path, loginStore.userMenusInfo)
})
</script>

<style scoped lang="less">
.breadcrumb {
}
</style>
