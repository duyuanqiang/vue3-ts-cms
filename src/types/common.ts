export type accountType = {
  name: string
  password: string
}

export type loginStoreType = {
  id: string
  token: string
  name: string
  userInfo: any
  userMenusInfo: any[]
  permissions: any[]
}
export type systemStoreType = {
  listData: listDataType[]
  totalCount: number
}

export type listDataType = {
  cellphone: number
  createAt: string
  departmentId: number
  enable: number
  id: number
  name: string
  realname: string
  roleId: number
  updateAt: string
}
export type mainStoreType = {
  rolesData: roleType[]
  rolesCount: number
  departmentsData: departmentType[]
  departCount: number
  menusData: MenuList[]
}
export type departmentType = {
  id: number
  name: string
  parentId: number
  createAt: string
  updateAt: string
  leader: string
}

export type roleType = {
  id: number
  name: string
  intro: string
  createAt: string
  updateAt: string
  menuList: MenuList[]
}

export interface MenuList {
  id: number
  name: string
  type: number
  url: string
  icon: string
  sort: number
  children: Children[]
}

export interface Children {
  id: number
  url: string
  name: string
  sort: number
  type: number
  children: any
  parentId: number
}
