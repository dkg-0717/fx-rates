import { reactive, readonly } from 'vue'

const state = reactive({
  error: '',
  showToast: false,
  rawData: [],
  rates: [],
  ranking: [],
  compare: ['MXN']
})

const actions = {
  setRawData(data) {
    state.rawData = data
  },
  setRates(data) {
    state.rates = data
  },
  setRanking(data) {
    state.ranking = data
  },
  addRateToCompare(rate) {
    if (!state.compare.includes(rate)) {
      state.compare.push(rate)
      return true
    } else {
      return false
    }
  },
  removeRate(rate) {
    state.compare = state.compare.filter(r => r !== rate)
  },
  setError(error) {
    state.error = error
  },
  showToast(value) {
    state.showToast = value
  }
}

const getters = {
  dataToCompare() {
    state.rates = state.rates.filter(r => {
      if (state.compare.includes(r[0]))
        return r
    })
    return state.rates
  },
  lastRate(rate) {
    return state.rawData.filter(r => {
      if (r[0] === rate) {
        return r
      }
    })
  },
  validRate(rate) {
    let isValid = false
    const data = state.rawData
    for (let d = 0; d < data.length; d++) {
      if (data[d].includes(rate)) {
        isValid = true
      }
    }
    return isValid
  }
}

export default { state: readonly(state), actions, getters }