<template>
  <div class="logo">
    <img class="img" src="@/assets/img/logo.svg" alt="" />
    <div class="title">弘源后台管理系统</div>
  </div>
  <div class="menu">
    <el-menu
      active-text-color="#fff"
      background-color="#001529"
      text-color="#b7bdc3"
      :collapse="false"
      default-active="1"
    >
      <template v-for="item in userMenusInfo" :key="item.id">
        <el-sub-menu :index="item.id">
          <template #title>
            <el-icon>
              <component :is="item.icon.split('-icon-')[1]" />
            </el-icon>
            <span>{{ item.name }}</span>
          </template>
          <template v-for="val in item.children" :key="val.id">
            <el-menu-item :index="val.id">{{ val.name }}</el-menu-item>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { useLoginStore } from '@/store/login/login'
import { ref } from 'vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const loginStore = useLoginStore()
const userMenusInfo = loginStore.userMenusInfo
console.log(userMenusInfo)
</script>

<style scoped lang="less">
.logo {
  display: flex;
  padding: 12px 10px 8px 10px;
  justify-content: flex-start;
  align-content: center;
  height: 28px;
  overflow: hidden;
  .img {
    height: 100%;
    margin: 0 10px;
  }
  .title {
    line-height: 28px;
    font-size: 16px;
    font-weight: 700;
    color: white;
    white-space: nowrap;
  }
  .tac {
    .el-menu {
      border-right: 2px solid transparent;
    }
  }
}
</style>
