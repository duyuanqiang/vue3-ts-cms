<template>
  <div class="dashboard">
    <!-- 数量统计 -->
    <el-row :gutter="10">
      <template v-for="item in amountList" :key="item.amount">
        <el-col :span="6" :xs="24" :sm="12" :md="8" :lg="6">
          <counter-card v-bind="item" />
        </el-col>
      </template>
    </el-row>
    <!-- 中间图表 -->
    <el-row :gutter="10">
      <el-col :span="8">
        <chart-card><pie-echart :data="CategoryCount" /></chart-card>
      </el-col>
      <el-col :span="8">
        <chart-card><map-echart :data="addressSale" /></chart-card>
      </el-col>
      <el-col :span="8">
        <chart-card />
      </el-col>
    </el-row>
    <!-- 底层图表 -->
    <el-row :gutter="10">
      <el-col :span="12">
        <chart-card>饼图</chart-card>
      </el-col>
      <el-col :span="12">
        <chart-card />
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import counterCard from './c-cpns/counter-card.vue'
import chartCard from './c-cpns/chart-card.vue'
import { PieEchart, MapEchart } from '@/components/page-echarts'
import useAnalysisStore from '@/store/main/analysis/analysis'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
const analysisStore = useAnalysisStore()
analysisStore.fetchAnalysisDataAction()
const {
  amountList,
  goodsCategoryCount,
  goodsCategorySale,
  goodsCategoryFavor,
  goodsAddressSale
} = storeToRefs(analysisStore)

const CategoryCount = computed(() =>
  goodsCategoryCount.value.map((item) => ({
    value: item.goodsCount,
    name: item.name
  }))
)

const addressSale = computed<{ value: number; name: string }[]>(() =>
  goodsAddressSale.value.map((item) => ({
    value: item.count,
    name: item.address
  }))
)
</script>

<style scoped>
.echart {
  height: 200px;
}
</style>
