<template>
  <div class="header">
    <h2>header</h2>
    <button @click="outLogin">退出登录</button>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'

function outLogin() {
  router.push('/login')
}
</script>

<style scoped lang="less">
.header {
}
</style>
