export const getPriceByArray = (rates, price) => {
  const newRates = []
  for (const data of rates) {
    newRates.push({
      [Object.entries(data)[0][0]]: Math.round(price / Object.entries(data)[0][1])
    })
  }
  return newRates
}

export const getPrice = (rates, price) => {
  const newRates = {}
  for (const data in rates) {
    newRates[data] = price / rates[data]
  }
  return newRates
}

export const convertToMXN = (data) => {
  const { rates } = data
  const { MXN } = rates
  const newRates = getPrice(rates, MXN)
  return Object.entries(newRates)
}

export const convertToArray = (data) => {
  let symbols = Object.entries(data)
  symbols = symbols.map(s => {
    return {
      name: s[0],
      value: s[1]
    }
  });

  return symbols;
}