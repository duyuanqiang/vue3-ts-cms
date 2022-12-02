<template>
  <div class="pie">
    <base-echart :option="option" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseEchart from './base-echart.vue'
interface IEchartValueType {
  data: { xdata: string[]; ydata: number[] }
}
const props = defineProps<IEchartValueType>()
const option = computed(() => ({
  xAxis: {
    type: 'category',
    data: props.data.xdata
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: props.data.ydata,
      type: 'line'
    }
  ]
}))
</script>

<style scoped lang="less">
.pie {
}
</style>
