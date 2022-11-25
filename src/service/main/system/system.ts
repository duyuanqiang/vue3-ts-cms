import hyRequest from '../..'

export function postUsersListData(queryInfo: any, pageName = 'users') {
  return hyRequest.post({
    url: `/${pageName}/list`,
    data: queryInfo
  })
}
export function deleteUserListData(useId: any, pageName = 'users') {
  return hyRequest.delete({
    url: `/${pageName}/${useId}`
  })
}
export function addUserListData(pageInfo: any, pageName = 'users') {
  return hyRequest.post({
    url: '/' + pageName,
    data: pageInfo
  })
}

export function editUserData(id: number, pageInfo: any, pageName = 'users') {
  return hyRequest.patch({
    url: `/${pageName}/${id}`,
    data: pageInfo
  })
}
