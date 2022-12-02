export function formatOptionsData(configValue, addOptions, keyWord) {
  const addData = addOptions.map((item) => ({
    value: item.id,
    name: item.name
  }))
  configValue.formItems.forEach((element) => {
    for (const key in element) {
      if (element[key] == keyWord) {
        element.options = addData
      }
    }
  })
  return configValue
}

export function mapMenuListToIds(menusList: []) {
  const ids: number[] = []
  function recurseGetId(menus) {
    for (const item of menus) {
      if (item.children) {
        recurseGetId(item.children)
      } else {
        if (item.id) {
          ids.push(item.id)
        }
      }
    }
  }
  recurseGetId(menusList)
  return ids
}
