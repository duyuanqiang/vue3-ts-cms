<template>
  <div class="base-echart">
    <div ref="baseRef" class="echart"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue'
import * as echarts from 'echarts'
import ChinaJson from '../data/china .json'
echarts.registerMap('china', ChinaJson as any)
interface IProps {
  option: echarts.EChartsCoreOption
}
const props = defineProps<IProps>()
const baseRef = ref<HTMLElement>()
onMounted(() => {
  const echartInstance = echarts.init(baseRef.value!, 'light', {
    renderer: 'canvas'
  })
  watchEffect(() => {
    if (props.option) echartInstance.setOption(props.option)
  })
  window.addEventListener('resize', () => echartInstance.resize())
})
</script>

<style scoped lang="less">
.base-echart {
  .echart {
    height: 200px;
  }
}
</style>
