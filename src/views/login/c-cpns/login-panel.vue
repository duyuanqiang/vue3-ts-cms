<template>
  <div class="panel">
    <h1>弘源后台管理系统</h1>
    <div class="tabs">
      <el-tabs type="card" stretch v-model="activeName">
        <el-tab-pane>
          <template #label>
            <span class="custom-tabs-label">
              <el-icon class="icon"><UserFilled /></el-icon>
              <span>账号登录</span>
            </span>
          </template>
          <panel-account />
        </el-tab-pane>
        <el-tab-pane>
          <template #label>
            <span class="custom-tabs-label">
              <el-icon class="icon"><Iphone /></el-icon>
              <span>手机登录</span>
            </span>
          </template>
          <panel-phone />
        </el-tab-pane>
      </el-tabs>
    </div>

    <div class="tips">
      <el-checkbox size="large" v-model="isRem">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn">立即登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PanelAccount from './panel-account.vue'
import panelPhone from './panel-phone.vue'

const isRem = ref<boolean>(false)
const activeName = ref('account')
// import PanelCount from './panel-count.vue'
// import PanelPhone from './panel-phone.vue'
</script>

<style scoped lang="less">
.panel {
  width: 360px;
  h1 {
    text-align: center;
  }
  .tabs {
    margin-top: 20px;
    .icon {
      vertical-align: middle;
      margin-right: 5px;
    }
  }
  .tips {
    display: flex;
    justify-content: space-between;
  }
  .login-btn {
    width: 100%;
    height: 40px;
  }
}
</style>
