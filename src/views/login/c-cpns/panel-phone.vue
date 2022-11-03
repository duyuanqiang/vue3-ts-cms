<template>
  <div class="home">
    <el-form>
      <el-form-item label="手机号码" prop="name" required>
        <el-input />
      </el-form-item>
      <el-form-item label="验证码" prop="password" required>
        <el-input show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.home {
}
</style>
