<template>
  <div class="content">
    <div class="title">
      <h3 class="name">{{ configData.header.title }}</h3>
      <div class="btn" v-if="isCreate">
        <el-button type="primary" size="large" @click="handleNewUserClick">
          {{ configData.header.newBtnName }}
        </el-button>
      </div>
    </div>
    <el-table
      :data="listData"
      v-bind="configData.childrenTree"
      border
      style="width: 100%"
    >
      <template v-for="item in configData.propsList" :key="item.label">
        <template v-if="item.type === 'selection'">
          <el-table-column
            align="center"
            :type="item.type"
            :label="item.label"
            :width="item.width"
          />
        </template>
        <template v-else-if="item.type === 'index'">
          <el-table-column
            align="center"
            :type="item.type"
            :label="item.label"
            :width="item.width"
          />
        </template>
        <template v-else-if="item.type === 'normal'">
          <el-table-column
            align="center"
            :type="item.type"
            :label="item.label"
            :width="item.width"
            :prop="item.prop"
          />
        </template>
        <template v-else-if="item.type === 'button'">
          <el-table-column
            align="center"
            :label="item.label"
            :width="item.width"
            :prop="item.prop"
            ><template #default="scope">
              <el-button :type="scope.row.enable ? 'primary' : 'danger'">{{
                scope.row.enable ? '启用' : '禁止'
              }}</el-button>
            </template></el-table-column
          >
        </template>
        <template v-else-if="item.type === 'timer'">
          <el-table-column align="center" :prop="item.prop" :label="item.label">
            <template #default="scope">
              {{ formatUTC(scope.row.createAt) }}
            </template>
          </el-table-column>
        </template>
        <template v-else-if="item.type === 'handle'">
          <el-table-column
            align="center"
            :prop="item.name"
            :label="item.label"
            :width="item.width"
          >
            <template #default="scope">
              <el-button
                type="primary"
                :icon="Edit"
                size="small"
                @click="handleEditClick(scope.row)"
                v-if="isUpdate"
                >编辑</el-button
              >
              <el-button
                type="danger"
                :icon="Delete"
                size="small"
                @click="handleDeleteClick(scope.row.id)"
                v-if="isDelete"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </template>
        <template v-else>
          <el-table-column align="center" v-bind="item" />
        </template>
      </template>
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
import { usePermissions } from '@/hooks/usePageHooks'

const props = defineProps(['configData'])
const sysetmStore = useSysetmStore()
const currentPage = ref(1)
const pageSize = ref(10)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)
fetchQueryData()
const isCreate = usePermissions(`${props.configData.pageName}:create`)
const isDelete = usePermissions(`${props.configData.pageName}:delete`)
const isUpdate = usePermissions(`${props.configData.pageName}:update`)
const emit = defineEmits(['newClick', 'editClick'])
function fetchQueryData(format = {}) {
  const offset = pageSize.value * (currentPage.value - 1)
  const size = pageSize.value
  const pageParam = { offset, size }
  const pageInfo = { ...pageParam, ...format }
  sysetmStore.getUserListData(pageInfo, props.configData.pageName)
}
sysetmStore.$onAction(({ name, after }) => {
  after(() => {
    console.log(name, '执行完成的回调')
  })
})
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
  sysetmStore.deleteUserData(id, props.configData.pageName)
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
