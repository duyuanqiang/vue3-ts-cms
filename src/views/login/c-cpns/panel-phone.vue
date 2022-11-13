<template>
  <div class="home">
    <el-form>
      <el-form-item label="手机号" prop="name" size="large" label-width="60px">
        <el-input />
      </el-form-item>
      <el-form-item
        label="验证码"
        prop="password"
        size="large"
        label-width="60px"
      >
        <div class="verify-code">
          <el-input show-password />
          <el-button type="primary" class="get-code">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.home {
  .verify-code {
    display: flex;
    .get-code {
      margin-left: 8px;
    }
  }
}
</style>
