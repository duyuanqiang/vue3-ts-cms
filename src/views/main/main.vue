<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isFold ? '60px' : '210px'" class="aside">
        <main-menus :is-fold="isFold" />
      </el-aside>
      <el-container>
        <el-header height="50px"
          ><main-header @change-flod="handleFlod"
        /></el-header>
        <el-main> <router-view></router-view> </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import MainMenus from './menus/index.vue'
import MainHeader from './header/index.vue'
import MainContent from './content/index.vue'
import { ref } from 'vue'
const isFold = ref(false)
function handleFlod(flag: boolean) {
  isFold.value = flag
}
</script>

<style scoped lang="less">
.main {
  height: 100%;
  .main-content {
    height: 100%;
    .aside {
      overflow-x: hidden;
      overflow-y: auto;
      cursor: pointer;
      background: #001529;
      scrollbar-width: none; /*firefox*/
      -ms-overflow-style: none;
      transition: width 0.3s ease;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
}
</style>
