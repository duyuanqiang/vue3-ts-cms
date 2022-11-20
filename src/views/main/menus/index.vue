<template>
  <div class="logo">
    <img class="img" src="@/assets/img/logo.svg" alt="" />
    <div class="title" v-show="!isFold">弘源后台管理系统</div>
  </div>
  <div class="menu">
    <el-menu
      active-text-color="#fff"
      background-color="#001529"
      text-color="#b7bdc3"
      :collapse="isFold"
      :default-active="defaultActive"
    >
      <template v-for="item in menusInfo" :key="item.id">
        <el-sub-menu :index="item.id + ''">
          <template #title>
            <el-icon>
              <component :is="item.icon.split('-icon-')[1]" />
            </el-icon>
            <span>{{ defaultActive === item.id + '' }}{{ item.name }}</span>
          </template>
          <template v-for="subitem in item.children" :key="subitem.id">
            <el-menu-item
              :index="subitem.id + ''"
              @click="handleItemClick(subitem)"
            >
              {{ subitem.name }}
            </el-menu-item>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { useLoginStore } from '@/store/login/login'
import { mapMenu } from '@/utils/map-menus'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
defineProps({
  isFold: {
    type: Boolean,
    default: false
  }
})
//通过路由设置初始index
const loginStore = useLoginStore()
const menusInfo = loginStore.userMenusInfo
const curRoute = useRoute()
const route = mapMenu(curRoute.path, menusInfo)
const defaultActive = ref(route.id + '')
console.log(defaultActive.value)
//路由跳转
const router = useRouter()
function handleItemClick(item) {
  router.push(item.url)
}
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
