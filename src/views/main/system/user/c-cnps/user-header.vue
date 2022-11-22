<template>
  <div class="header">
    <el-form
      label-width="80px"
      size="large"
      :model="searchForm"
      ref="userFormRef"
    >
      <el-row>
        <el-col :span="8">
          <el-form-item label="用户名" prop="name">
            <el-input v-model="searchForm.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="真实姓名" prop="realname">
            <el-input v-model="searchForm.realname"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="电话号码" prop="cellphone">
            <el-input v-model="searchForm.cellphone"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="状态" prop="enable">
            <el-select placeholder="选择状态" v-model="searchForm.enable">
              <el-option label="启用" value="1" />
              <el-option label="禁止" value="0" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="创建时间" prop="createAt">
            <el-date-picker
              v-model="searchForm.createAt"
              type="daterange"
              range-separator="-"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              size="large"
            />
          </el-form-item>
        </el-col>
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

const searchForm = reactive({
  name: '',
  realname: '',
  cellphone: '',
  enable: '',
  createAt: ''
})
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
