import hyRequest from '../..'

export function postUsersListData(queryInfo: any) {
  return hyRequest.post({
    url: '/users/list',
    data: queryInfo
  })
}
export function deleteUserListData(useId: any) {
  return hyRequest.delete({
    url: `/users/${useId}`
  })
}
export function addUserListData(userInfo: any) {
  return hyRequest.post({
    url: '/users',
    data: userInfo
  })
}

export function editUserData(id: number, userInfo: any) {
  return hyRequest.patch({
    url: `/users/${id}`,
    data: userInfo
  })
}
