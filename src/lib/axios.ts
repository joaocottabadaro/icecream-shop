import axios from 'axios'

import { env } from '@/env'
export const api = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: true, // envia os cookies para o backend
})

if (env.VITE_ENABLE_API_DELAY) {
  api.interceptors.request.use(async (config) => {
    await new Promise((resolve) => setTimeout(resolve, Math.random() * 1000))
    return config
  })
}
