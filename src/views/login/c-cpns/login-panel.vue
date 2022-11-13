<template>
  <div class="panel">
    <h1>弘源后台管理系统</h1>
    <div class="tabs">
      <el-tabs
        type="border-card"
        stretch
        v-model="activeName"
        @tab-change="changePanelName"
      >
        <el-tab-pane label="account" name="account">
          <template #label>
            <span class="custom-tabs-label">
              <el-icon class="icon"><UserFilled /></el-icon>
              <span>账号登录</span>
            </span>
          </template>
          <!-- <panel-account @func="getAccMessage"  /> -->
          <panel-account ref="accountRef" />
        </el-tab-pane>
        <el-tab-pane name="phone">
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
    <el-button type="primary" class="login-btn" @click="handleLoginBtnClick"
      >立即登录</el-button
    >
  </div>
</template>

<script setup lang="ts">
import type { TabPaneName } from 'element-plus'
import { ref, watch } from 'vue'
import PanelAccount from './panel-account.vue'
import panelPhone from './panel-phone.vue'
import { localCache } from '@/utils/cache'
import { localCacheType, loginType } from '@/constant'

let isRem = ref<boolean>(
  localCache.getCache(localCacheType.CHANGE_REMBER) ?? false
)
watch(isRem, (newValue) => {
  isRem.value = newValue
  localCache.setCache(localCacheType.CHANGE_REMBER, newValue)
  // accountRef.value?.isSaveAcc(newValue)
})

let activeName = ref<TabPaneName>(loginType.ACCOUNT)
function changePanelName(name: TabPaneName) {
  activeName = ref(name)
}
const accountRef = ref<InstanceType<typeof PanelAccount>>()
function handleLoginBtnClick() {
  if (activeName.value === loginType.ACCOUNT) {
    accountRef.value?.loginAction(isRem.value)
  } else if (activeName.value === loginType.PHONE) {
    console.log('手机登录')
  }
}
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
