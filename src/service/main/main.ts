import hyRequest from '..'

export function getAllRolesData() {
  return hyRequest.post({
    url: '/role/list'
  })
}
export function getAllDepartData() {
  return hyRequest.post({
    url: '/department/list'
  })
}
