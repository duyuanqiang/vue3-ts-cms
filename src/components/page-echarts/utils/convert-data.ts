import { coordinateData } from './coordinate-data'
export function convertData(data: any) {
  const citycoordinate: any = []
  for (const city of data) {
    const geoCoord = coordinateData[city.name]
    if (geoCoord) {
      citycoordinate.push({
        name: city.name,
        value: geoCoord.concat(city.value)
      })
    }
  }
  return citycoordinate
}

// export function convertData(data: any) {
//   const res: any[] = []
//   for (let i = 0; i < data.length; i++) {
//     const geoCoord = coordinateData[data[i].name]
//     if (geoCoord) {
//       res.push({
//         name: data[i].name,
//         value: geoCoord.concat(data[i].value)
//       })
//     }
//   }
//   console.log(res)
//   return res
// }
