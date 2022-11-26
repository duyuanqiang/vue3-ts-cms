<template>
  <div class="header">
    <el-form
      label-width="80px"
      size="large"
      :model="searchForm"
      ref="userFormRef"
    >
      <el-row>
        <template v-for="item in configData.formItems" :key="item.name">
          <el-col :span="item.span">
            <el-form-item :label="item.label" :prop="item.prop">
              <template v-if="item.type === 'input'">
                <el-input
                  v-model="searchForm[item.prop]"
                  :placeholder="item.placeholder"
                ></el-input>
              </template>

              <template v-else-if="item.type === 'date-picker'">
                <el-date-picker
                  v-model="searchForm[item.prop]"
                  :type="item.dateType"
                  :range-separator="item.rangeSeparator"
                  :start-placeholder="item.startPlaceholder"
                  :end-placeholder="item.endPlaceholder"
                  :size="item.size"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select placeholder="选择状态" v-model="searchForm.enable">
                  <template v-for="opt in item.options" :key="opt.value">
                    <el-option :label="opt.label" :value="opt.value" />
                  </template>
                </el-select>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="btns">
      <el-button
        type="primary"
        :icon="Refresh"
        size="large"
        @click="handleResetClick()"
      >
        重置
      </el-button>
      <el-button
        type="primary"
        :icon="Search"
        size="large"
        @click="hanleQureyClick()"
      >
        搜索
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Refresh, Search } from '@element-plus/icons-vue'
import type { ElForm } from 'element-plus'
import { reactive, ref } from 'vue'
const props = defineProps(['configData'])
const searchForm: any = reactive({})
for (const item of props.configData.formItems) {
  searchForm[item.prop] = item.initvalue
}
const emit = defineEmits(['resetClick', 'searchClick'])
const userFormRef = ref<InstanceType<typeof ElForm>>()
function handleResetClick() {
  userFormRef.value?.resetFields()
  emit('resetClick')
}
function hanleQureyClick() {
  emit('searchClick', searchForm)
  console.log('提交数据')
}
</script>

<style scoped lang="less">
.header {
  .el-form-item {
    padding: 0 40px;
  }
  .el-select--large {
    width: 100%;
  }
  .el-date--large {
    width: 100%;
  }
  .btns {
    display: flex;
    justify-content: flex-end;
    margin-right: 40px;
    .el-button {
      height: 42px !important;
    }
  }
}
</style>
