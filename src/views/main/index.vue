<template>
  <div class="main">
    <h2>main:{{ counterStore.counter }}--{{ counterStore.doubleCounter }}</h2>
    <button @click="changeCounter">修改counter</button>
  </div>
</template>

<script lang="ts" setup>
import useCounterStore from '@/store/counter'
const counterStore = useCounterStore()

function changeCounter() {
  counterStore.changeCounterAction(1)
}
</script>

<style scoped lang="less">
.main {
}
</style>
