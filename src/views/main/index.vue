<template>
  <div class="main">
    <!-- <h2>main:{{ counterStore.counter }}--{{ counterStore.doubleCounter }}</h2> -->
    <button @click="outLoginClick">退出登录</button>
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
.main {
}
</style>
