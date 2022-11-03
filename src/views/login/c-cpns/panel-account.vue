<template>
  <div class="panel-account">
    <el-form>
      <el-form-item label="帐号" prop="name" required>
        <el-input v-model="labelType.account" />
      </el-form-item>
      <el-form-item label="密码" prop="password" required>
        <el-input show-password v-model="labelType.psw" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
const labelType = reactive({
  account: '',
  psw: ''
})
</script>
<style lang="less" scoped>
.panel-account {
  color: red;
}
</style>
