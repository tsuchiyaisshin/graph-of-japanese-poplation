import service from '../utils/service'

export const api = {
    async getPrefectures() {
        return await service
            .get('@resas/api/v1/prefectures')
            .then(result => {
                return result.data
            })
            .catch(result => {})
    },
}