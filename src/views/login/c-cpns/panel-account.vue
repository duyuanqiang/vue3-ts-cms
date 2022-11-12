<template>
  <div class="panel-account">
    <el-form
      ref="accFormRef"
      :model="accMessage"
      label-width=""
      size="large"
      :rules="rules"
    >
      <el-form-item label="帐号" prop="account" required>
        <el-input v-model="accMessage.account" />
      </el-form-item>
      <el-form-item label="密码" prop="psw" required>
        <el-input show-password v-model="accMessage.psw" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { localCache } from '@/utils/cache'
import { ElMessage } from 'element-plus'
import type { FormRules, ElForm } from 'element-plus'
import { ref, reactive } from 'vue'
import { localCacheType } from '@/types'
import { login } from '@/service/login'
const accMessage = reactive({
  account: localCache.getCache(localCacheType.ACCOUNT) ?? '',
  psw: localCache.getCache(localCacheType.PASSWORD) ?? ''
})

//验证规则
const rules = reactive<FormRules>({
  account: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{6,20}$/,
      message: '请输入6到20位的数字或者字母',
      trigger: 'blur'
    }
  ],
  psw: [
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
    const account = accMessage.account
    const psw = accMessage.psw
    localCache.setCache(localCacheType.ACCOUNT, account)
    localCache.setCache(localCacheType.PASSWORD, psw)
  } else {
    localCache.setCache(localCacheType.ACCOUNT, '')
    localCache.setCache(localCacheType.PASSWORD, '')
  }
}
const accFormRef = ref<InstanceType<typeof ElForm>>()
function loginAction(isRem: boolean) {
  accFormRef.value?.validate((valid) => {
    if (valid) {
      const name = accMessage.account
      const password = accMessage.psw
      login({ name, password }).then((res) => {
        console.log(res)
      })
      console.log('验证成功')
    } else {
      ElMessage.error('Oops, this is a error message.')
    }
  })
  isSaveAcc(isRem)
}
defineExpose({
  loginAction
})
</script>
<style lang="less" scoped>
.panel-account {
  color: red;
}
</style>
