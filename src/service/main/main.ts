import hyRequest from '..'

export function getAllListsData(name: string) {
  return hyRequest.post({
    url: `/${name}/list`
  })
}
