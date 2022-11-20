import type { RouteRecordRaw } from 'vue-router'
function getLocalRoutes() {
  const localRoutes: RouteRecordRaw[] = []
  const files: Record<string, any> = import.meta.glob('@/router/main/**/*.ts', {
    eager: true
  })

  for (const key in files) {
    const module = files[key]
    localRoutes.push(module.default)
  }
  return localRoutes
}
export let firstMenu: any = null
export function getRoleRoutes(menus: any[]) {
  const localRoutes = getLocalRoutes()
  // 将本地路由映射成真实路由
  // console.log('role', userMenusInfo, localRoutes)
  const routes: RouteRecordRaw[] = []
  for (const menu of menus) {
    for (const submenu of menu.children) {
      const route = localRoutes.find((item) => item.path === submenu.url)

      if (route) {
        routes.push(route)
        if (!firstMenu) firstMenu = route
      }
    }
  }
  return routes
}

export function mapMenu(curmenu: string, menus: any[]) {
  for (const menu of menus) {
    for (const submenu of menu.children) {
      if (submenu.url === curmenu) return submenu
    }
  }
  return undefined
}
