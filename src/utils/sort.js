import { getPriceByArray } from '../utils/convert.js'

export const sortRates = (items) => {
  const { MXN } = items
  let data = Object.entries(items)
  data = data.map(r => {
    return {
      [r[0]]: r[1]
    }
  })

  data = data.sort(function (a, b) {
    return Object.entries(a)[0][1] - Object.entries(b)[0][1]
  })

  data = data.slice(0, 10)
  data = getPriceByArray(data, MXN)

  return data
}