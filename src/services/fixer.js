import axios from 'axios'
import rateState from '../state/rates.js'

const params = {
  access_key: "058cf96263fc7c6e04f6bd71e8637009",
};

const createUrl = (endpoint) => {
  const url = new URL(`http://data.fixer.io/api/${endpoint}`);
  url.search = new URLSearchParams(params).toString();
  return url
}

export const getSymbols = async () => {
  const url = createUrl('symbols')
  try {
    const response = axios.get(url)
    return response
  } catch (err) {
    console.log(err)
    return []
  }
}

export const getLatest = async () => {
  const url = createUrl('latest')
  try {
    const response = await axios.get(url)
    if (response.data.success) {
      return response.data
    } else {
      return {
        error: 'No se pudo obtener la data'
      }
    }
  } catch (err) {
    console.log(err.response.data.error)
    return []
  }
}

export const compareRates = async () => {
  params['base'] = 'MXN'
  params['symbols'] = 'AED'
  const url = createUrl('2013-12-24')
  try {
    const request = await fetch(url)
    const response = await request.json()
    return response
  } catch (err) {
    return []
  }
}