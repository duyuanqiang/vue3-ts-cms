<template>
  <div class="content">
    <div class="title">
      <h3 class="name">用户列表</h3>
      <div class="btn">
        <el-button type="primary" size="large"> 新建用户 </el-button>
      </div>
    </div>
    <el-table :data="listData" border style="width: 100%">
      <el-table-column align="center" type="selection" width="60" />
      <el-table-column align="center" type="index" label="序号" width="150px" />
      <el-table-column
        align="center"
        prop="name"
        label="用户名"
        width="150px"
      />
      <el-table-column
        align="center"
        prop="realname"
        label="真实姓名"
        width="150px"
      />
      <el-table-column
        align="center"
        prop="cellphone"
        label="手机号码"
        width="150px"
      />
      <el-table-column
        align="center"
        prop="enable"
        label="状态"
        width="100px"
      />
      <el-table-column align="center" prop="createAt" label="创建时间" />
      <el-table-column align="center" prop="createAt" label="更新时间" />
      <el-table-column align="center" prop="name" label="操作" width="180">
        <el-button type="primary" :icon="Edit" size="small">编辑</el-button>
        <el-button type="danger" :icon="Delete" size="small">删除</el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import useSysetmStore from '@/store/main/system/system'
import { Delete, Edit } from '@element-plus/icons-vue'
import { storeToRefs } from 'pinia'
const sysetmStore = useSysetmStore()
sysetmStore.getUserListData({
  name: 'w',
  cellphone: 4
})
const { listData } = storeToRefs(sysetmStore)
</script>

<style scoped lang="less">
.content {
  margin-top: 40px;
  .title {
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
  .el-button {
    height: 32px;
  }
}
</style>
