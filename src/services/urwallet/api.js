import axios from 'axios'
import { endpoint } from './config'
import { getToken } from './auth'

const api = axios.create({
  baseURL: endpoint
})

api.interceptors.request.use(async config => {
  const token = getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default api
