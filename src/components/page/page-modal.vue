<template>
  <div class="user-modal">
    <el-dialog
      v-model="dialogVisible"
      :title="
        isNewUser ? configData.header.newTitle : configData.header.editTitle
      "
      width="30%"
      center
      :before-close="close"
    >
      <el-form label-width="80px" size="large" :model="formData" ref="formRef">
        <template v-for="item in configData.formItems" :key="item.label">
          <template v-if="item.type == 'input'">
            <el-form-item :label="item.label" :prop="item.prop"
              ><el-input
                :placeholder="item.placeholder"
                v-model="formData[item.prop]"
            /></el-form-item>
          </template>
          <template v-if="item.type == 'password'">
            <el-form-item :label="item.label" :prop="item.prop" v-if="isNewUser"
              ><el-input
                :type="item.type"
                :placeholder="item.placeholder"
                show-password
                v-model="formData[item.prop]"
            /></el-form-item>
          </template>
          <template v-if="item.type == 'select'">
            <el-form-item :label="item.label" :prop="item.prop">
              <el-select style="width: 100%" v-model="formData[item.prop]">
                <el-option
                  v-for="value in item.options"
                  :label="value.name"
                  :value="value.value"
                  :key="value.value"
                />
              </el-select>
            </el-form-item>
          </template>
        </template>
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
import useSysetmStore from '@/store/main/system/system'
import type { listDataType } from '@/types'
import type { modalType } from '@/types/pageConfigType'
import type { ElForm } from 'element-plus'
import { reactive, ref } from 'vue'
interface propsType {
  configData: modalType
}
const props = defineProps<propsType>()

const formData = reactive({})
for (const item of props.configData.formItems) {
  formData[item.prop] = ''
}

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
    formData['id'] = itemData.id + ''
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
    sysetmStore.addUserData(formData, props.configData.pageName)
  } else {
    sysetmStore.editUserData(
      +formData['id'],
      formData,
      props.configData.pageName
    )
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
