import { createStore } from 'vuex'

export default createStore({
  state: {
    series: [],
  },
  getters: {
    series(state) {
      return state.series
    },
  },
  mutations: {
    SET_SERIES(state, payload) {
      state.series = payload
    },
  },
  actions: {
    doUpdateSeries({ commit }, series) {
      commit('SET_SERIES', { series })
    },
  },
  modules: {},
})
