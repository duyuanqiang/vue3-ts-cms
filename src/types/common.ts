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
}
export type systemStoreType = {
  listData: listDataType[]
  allCount: number
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
