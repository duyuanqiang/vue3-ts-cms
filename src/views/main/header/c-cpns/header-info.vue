<template>
  <div class="header-info">
    <div class="tips">
      <div class="item message">
        <el-icon size="20px"><Message /></el-icon>
      </div>
      <div class="item chat">
        <el-icon size="20px"><ChatDotRound /></el-icon>
      </div>
      <div class="item search">
        <el-icon size="20px"><Search /></el-icon>
      </div>
    </div>
    <div class="user">
      <el-dropdown>
        <span class="user-info">
          <el-avatar
            size="default"
            src="https://upload.jianshu.io/users/upload_avatars/1102036/c3628b478f06.jpeg"
          />
          <span class="user-name">{{ userInfo.name }} </span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handleExitClick">
              <el-icon><CircleClose /></el-icon>
              <span>退出系统</span>
            </el-dropdown-item>
            <el-dropdown-item divided>
              <el-icon><InfoFilled /></el-icon>
              <span>个人信息</span>
            </el-dropdown-item>
            <el-dropdown-item>
              <el-icon><Unlock /></el-icon>
              <span>修改密码</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'
import { useLoginStore } from '@/store/login/login'
const loginStore = useLoginStore()
const userInfo = loginStore.userInfo

function handleExitClick() {
  loginStore.outlogin()
}
</script>

<style scoped lang="less">
.header-info {
  display: flex;
  justify-self: center;
  align-content: center;
  .tips {
    display: flex;
    align-items: center;
    margin-right: 30px;
    .item {
      padding: 0 8px;
      cursor: pointer;
    }
  }
  .user {
    .user-info {
      display: flex;
      align-items: center;
      .user-name {
        padding: 0 5px;
      }
    }
  }
  :global(.el-dropdown-menu__item) {
    line-height: 36px !important;
    padding: 6px 22px;
  }
}
</style>
