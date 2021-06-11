import rateState from '../state/rates.js'

const params = {
  access_key: "7ef242b73168a6fafe523b133384f748",
};

const createUrl = (endpoint) => {
  const url = new URL(`http://data.fixer.io/api/${endpoint}`);
  url.search = new URLSearchParams(params).toString();
  return url
}

export const getSymbols = async () => {
  const url = createUrl('symbols')
  const request = await fetch(url)
  const response = await request.json()
  return response
}

export const getLatest = async () => {
  const url = createUrl('latest')
  const request = await fetch(url)
  const response = await request.json()
  return response
}

export const compareRates = async () => {
  params['base'] = 'MXN'
  params['symbols'] = 'AED'
  const url = createUrl('2013-12-24')
  const request = await fetch(url)
  const response = await request.json()
  return response
}