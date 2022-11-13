<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { localCacheType } from '@/constant'
import router from '@/router'
import { localCache } from '@/utils/cache'

function outLoginClick() {
  localCache.removeCache(localCacheType.TOKEN)
  router.push('/login')
}
</script>

<style scoped lang="less">
.common-layout {
  width: 100vw;
  height: 100vh;
}
</style>
