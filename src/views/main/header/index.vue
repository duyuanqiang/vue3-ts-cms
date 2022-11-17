<template>
  <div class="header">
    <div class="flod-area" @click="clickHandleFlod">
      <el-icon size="28px">
        <component :is="isFold ? 'Expand' : 'Fold'" />
      </el-icon>
    </div>
    <div class="info">
      <header-bread />
      <header-info />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HeaderBread from './c-cpns/header-bread.vue'
import HeaderInfo from './c-cpns/header-info.vue'
const isFold = ref(false)
const emit = defineEmits(['changeFlod'])
function clickHandleFlod() {
  isFold.value = !isFold.value
  emit('changeFlod', isFold.value)
}
</script>

<style scoped lang="less">
.header {
  display: flex;
  // justify-content: space-between;
  align-items: center;
  height: 100%;
  flex: 1;
  .flod-area {
    display: flex;
    align-items: center;
  }
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px;
    flex: 1;
  }
}
</style>
