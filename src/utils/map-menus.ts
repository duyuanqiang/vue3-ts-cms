import type { RouteRecordRaw } from 'vue-router'
//获取本地文件中的路由
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
//查找本地与后端匹配的路由
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

export function clearFirst() {
  firstMenu = null
}
//获取当前的路由数据
export function mapMenu(curmenu: string, menus: any[]) {
  for (const menu of menus) {
    for (const submenu of menu.children) {
      if (submenu.url === curmenu) {
        return submenu
      }
    }
  }
  return undefined
}
//获取当前的面包屑组件的数据
export type breadMenu = { name: string; path: string }
//获取当前的路由数据
export function mapPathToBreadcrumbs(curmenu: string, menus: any[]) {
  const breadMenu: breadMenu[] = []
  for (const menu of menus) {
    for (const submenu of menu.children) {
      if (submenu.url === curmenu) {
        if (breadMenu.length == 0) {
          breadMenu.push({ name: menu.name, path: menu.children[0].url })
        }
        breadMenu.push({ name: submenu.name, path: submenu.url })
        return breadMenu
      }
    }
  }
  return undefined
}
//获取路由权限
export function mapPermissions(menus: any[]) {
  const permissions: any[] = []
  function recGetPermission(menu: any[]) {
    for (const item of menu) {
      if (item.type === 3) {
        permissions.push(item.permission)
      } else {
        recGetPermission(item.children ?? [])
      }
    }
  }
  recGetPermission(menus)
  return permissions
}
