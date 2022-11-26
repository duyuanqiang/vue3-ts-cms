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
