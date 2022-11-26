<template>
  <div class="content">
    <div class="title">
      <h3 class="name">用户列表</h3>
      <div class="btn">
        <el-button type="primary" size="large" @click="handleNewUserClick">
          新建用户
        </el-button>
      </div>
    </div>
    <el-table
      v-if="Object.keys(listData).length > 0"
      :data="listData"
      border
      style="width: 100%"
    >
      <el-table-column
        align="center"
        type="selection"
        width="60"
        label="选择"
      />
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
        width="180px"
      />
      <el-table-column align="center" prop="enable" label="状态" width="100px"
        ><template #default="scope">
          <el-button :type="scope.row.enable ? 'primary' : 'danger'">{{
            scope.row.enable ? '启用' : '禁止'
          }}</el-button>
        </template></el-table-column
      >
      <el-table-column align="center" prop="createAt" label="创建时间">
        <template #default="scope">
          {{ formatUTC(scope.row.createAt) }}
        </template>
      </el-table-column>
      <el-table-column align="center" prop="createAt" label="更新时间">
        <template #default="scope">
          {{ formatUTC(scope.row.createAt) }}
        </template>
      </el-table-column>
      <el-table-column align="center" prop="name" label="操作" width="180">
        <template #default="scope">
          <el-button
            type="primary"
            :icon="Edit"
            size="small"
            @click="handleEditClick(scope.row)"
            >编辑</el-button
          >
          <el-button
            type="danger"
            :icon="Delete"
            size="small"
            @click="handleDeleteClick(scope.row.id)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 30, 40]"
        :small="small"
        :disabled="disabled"
        :background="background"
        layout=" sizes, prev, pager, next, jumper,total"
        :total="totalCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import useSysetmStore from '@/store/main/system/system'
import { Delete, Edit } from '@element-plus/icons-vue'
import { storeToRefs } from 'pinia'
import { formatUTC } from '@/utils/format'
import { ref } from 'vue'
import type { listDataType } from '@/types'
const sysetmStore = useSysetmStore()

const currentPage = ref(1)
const pageSize = ref(10)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)
fetchQueryData()
const emit = defineEmits(['newClick', 'editClick'])
function fetchQueryData(format = {}) {
  const offset = pageSize.value * (currentPage.value - 1)
  const size = pageSize.value
  const pageParam = { offset, size }
  const pageInfo = { ...pageParam, ...format }
  sysetmStore.getUserListData(pageInfo)
}
const handleSizeChange = () => {
  fetchQueryData()
}
const handleCurrentChange = () => {
  fetchQueryData()
}
function handleNewUserClick() {
  emit('newClick')
}
function handleDeleteClick(id: number) {
  sysetmStore.deleteUserData(id)
}
function handleEditClick(row: listDataType) {
  emit('editClick', row)
}
defineExpose({
  fetchQueryData
})
const { listData, totalCount } = storeToRefs(sysetmStore)
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
  .pagination {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
    .demo-pagination-block + .demo-pagination-block {
      margin-top: 10px;
    }
    .demo-pagination-block .demonstration {
      margin-bottom: 16px;
    }
    :deep(.el-pagination__total) {
      margin: 20px !important;
    }
  }
}
</style>
