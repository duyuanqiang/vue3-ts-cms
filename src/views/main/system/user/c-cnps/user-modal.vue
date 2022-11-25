<template>
  <div class="user-modal">
    <el-dialog
      v-model="dialogVisible"
      title="新建用户"
      width="30%"
      center
      :before-close="close"
    >
      <el-form label-width="80px" size="large" :model="formData" ref="formRef">
        <el-form-item label="用户名" prop="name"
          ><el-input placeholder="请输入用户名" v-model="formData.name"
        /></el-form-item>
        <el-form-item label="真实姓名" required prop="realname"
          ><el-input placeholder="请输入真实姓名" v-model="formData.realname"
        /></el-form-item>
        <el-form-item label="密码" prop="password" v-if="isNewUser"
          ><el-input
            type="password"
            placeholder="请输入密码"
            show-password
            v-model="formData.password"
        /></el-form-item>
        <el-form-item label="电话号码" prop="cellphone"
          ><el-input placeholder="请输入电话号码" v-model="formData.cellphone"
        /></el-form-item>
        <el-form-item label="选择角色" prop="roleId"
          ><el-select style="width: 100%" v-model="formData.roleId">
            <el-option
              v-for="item in roles"
              :label="item.name"
              :value="item.value"
              :key="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="选择部门" prop="departmentId"
          ><el-select style="width: 100%" v-model="formData.departmentId">
            <el-option
              v-for="item in departs"
              :label="item.name"
              :value="item.value"
              :key="item.value"
            />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="close">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick">
            确认
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import useMainStore from '@/store/main/system/main'
import useSysetmStore from '@/store/main/system/system'
import type { listDataType } from '@/types'
import type { ElForm } from 'element-plus'
import { reactive, ref } from 'vue'
const formData = reactive({
  name: '',
  realname: '',
  password: '',
  cellphone: '',
  roleId: '',
  departmentId: '',
  id: ''
})
const mainStore = useMainStore()
const roles = mainStore.rolesData.map((item) => ({
  value: item.id,
  name: item.intro
}))
const departs = mainStore.departmentsData.map((item) => ({
  value: item.id,
  name: item.name
}))
const formRef = ref<InstanceType<typeof ElForm>>()
const dialogVisible = ref(false)
function close() {
  formRef.value?.resetFields()
  dialogVisible.value = false
}
const isNewUser = ref(true)
const sysetmStore = useSysetmStore()
function changeDialogVisable(visable: boolean, itemData?: listDataType) {
  dialogVisible.value = visable
  if (itemData) {
    isNewUser.value = false
    for (const key in formData) {
      formData[key] = itemData[key]
    }
    formData.id = itemData.id + ''
  } else {
    isNewUser.value = true
    formRef.value?.resetFields()
    for (const key in formData) {
      formData[key] = ''
    }
  }
}
function handleConfirmClick() {
  if (isNewUser.value) {
    sysetmStore.addUserData(formData)
  } else {
    sysetmStore.editUserData(+formData.id, formData)
  }
  close()
}
defineExpose({
  changeDialogVisable
})
</script>

<style scoped lang="less">
.user-modal {
}
</style>
