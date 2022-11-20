import { firstMenu } from './../utils/map-menus'
import { localCacheType } from '@/constant'
import { localCache } from '@/utils/cache'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/login',
      component: () => import('@/views/login/login.vue')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('@/views/main/main.vue')
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('@/views/not-found/not-found.vue')
    }
  ]
})
router.beforeEach((to) => {
  const token = localCache.getCache(localCacheType.TOKEN)
  if (to.path === '/main') {
    if (!token) {
      return '/login'
    } else {
      return firstMenu
    }
  }
})
export default router
