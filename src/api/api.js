import axios from 'axios'

export const api = {
  async getPrefectures() {
    return axios
      .get('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
        headers: { 'X-API-KEY': 'llzNcHIHWUR6iYIZ8mvRvgmvwLGTA5bZxgZtRZc0' },
      })
      .then(result => {
        return result.data.result
      })
      .catch(result => {})
  },
  async getPopulation(code) {
    return axios
      .get(
        'https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear',
        {
          params: { cityCode: '-', prefCode: code },
          headers: { 'X-API-KEY': 'llzNcHIHWUR6iYIZ8mvRvgmvwLGTA5bZxgZtRZc0' },
        },
      )
      .then(result => {
        return result.data.result.data[0].data
      })
      .catch(result => {})
  },
}
