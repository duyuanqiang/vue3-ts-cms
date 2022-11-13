<template>
  <div class="panel-account">
    <el-form
      ref="accFormRef"
      :model="accMessage"
      label-width=""
      size="large"
      :rules="rules"
    >
      <el-form-item label="帐号" prop="name" required>
        <el-input v-model="accMessage.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password" required>
        <el-input show-password v-model="accMessage.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { localCache } from '@/utils/cache'
import { ElMessage } from 'element-plus'
import type { FormRules, ElForm } from 'element-plus'
import { ref, reactive } from 'vue'
import type { accountType } from '@/types'
import { localCacheType } from '@/constant'
import { useLoginStore } from '@/store/login/login'
const accMessage = reactive<accountType>({
  name: localCache.getCache(localCacheType.NAME) ?? '',
  password: localCache.getCache(localCacheType.PASSWORD) ?? ''
})

//验证规则
const rules = reactive<FormRules>({
  name: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{6,20}$/,
      message: '请输入6到20位的数字或者字母',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      // pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      // message: '至少八个字符，至少一个字母和一个数字',
      pattern: /^[a-z0-9]{3,}$/,
      message: '至少三个字符或者数字',
      trigger: 'blur'
    }
  ]
})
function isSaveAcc(isRem: boolean) {
  if (isRem) {
    const name = accMessage.name
    const password = accMessage.password
    localCache.setCache(localCacheType.NAME, name)
    localCache.setCache(localCacheType.PASSWORD, password)
  } else {
    localCache.setCache(localCacheType.NAME, '')
    localCache.setCache(localCacheType.PASSWORD, '')
  }
}
const accFormRef = ref<InstanceType<typeof ElForm>>()
function loginAction(isRem: boolean) {
  accFormRef.value?.validate((valid) => {
    if (valid) {
      const name = accMessage.name
      const password = accMessage.password
      const loginStore = useLoginStore()
      loginStore.loginAction({ name, password }).then(() => {
        isSaveAcc(isRem)
        localCache.setCache(localCacheType.CHANGE_REMBER, isRem)
      })
    } else {
      ElMessage.error('Oops, this is a error message.')
    }
  })
}
defineExpose({
  isSaveAcc,
  loginAction
})
</script>
<style lang="less" scoped>
.panel-account {
  color: red;
}
</style>
