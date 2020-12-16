import axios from 'axios'
import { api } from '../config/api'

const service = axios.create({
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
    },
    emulateJSON: true,
    withCredentials: true,
})

service.interceptors.request.use(
    config => {
        Object.keys(api).some(key => {
            if (config.url.indexOf(key) === 0) {
                const target = typeof api[key] === 'string' ? api[key] : api[key].url
                config.url = config.url.replace(key, target)
                if (typeof api[key].headers === 'function') {
                    config.headers = { ...api[key].headers(config), ...config.headers }
                }
                return true
            }

            return false
        })

        config.params = {
            ...config.params,
        }

        return config
    },
    error => Promise.reject(error),
)

export default {
    async get(...options) {
        try {
            const res = await service.get(...options)
            return res
        } catch (e) {}
    },
    async post(...options) {
        try {
            const res = await service.post(...options)
            return res
        } catch (e) {}
    },
    async put(...options) {
        try {
            const res = await service.put(...options)
            return res
        } catch (e) {}
    },

    async delete(...options) {
        try {
            const res = await service.delete(...options)
            return res
        } catch (e) {}
    },
}
