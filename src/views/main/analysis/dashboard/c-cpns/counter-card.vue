<template>
  <div class="counter">
    <el-tooltip :content="subtitle" effect="dark" placement="top">
      <span>{{ title }}</span>
    </el-tooltip>
    <div ref="count1Ref">{{ number1 }}</div>
    <div>
      <span>{{ subtitle }}</span>
      <span ref="count2Ref">{{ number2 }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { CountUp } from 'countup.js'
interface IProps {
  amount?: string
  number1?: number
  number2?: number
  subtitle?: string
  tips?: string
  title?: string
}
const props = withDefaults(defineProps<IProps>(), {
  amount: '',
  number1: 509989,
  number2: 509989,
  subtitle: '商品总销量',
  tips: '所有商品的总销量',
  title: '商品总销量'
})
const count1Ref = ref<HTMLElement>()
const count2Ref = ref<HTMLElement>()
const countOptions = {
  prefix: props.amount === 'saleroom' ? '¥' : '',
  duration: 1
}
onMounted(() => {
  const count1Up = new CountUp(count1Ref.value!, props.number1, countOptions)
  count1Up.start()
  const count2Up = new CountUp(count2Ref.value!, props.number2, countOptions)
  count2Up.start()
})
</script>

<style scoped lang="less">
.counter {
}
</style>
