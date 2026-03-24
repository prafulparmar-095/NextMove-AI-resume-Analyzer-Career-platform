import axios from "axios"

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true
})

// attach token automatically
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("nextmove_token")
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// handle global errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("nextmove_user")
      localStorage.removeItem("nextmove_token")
    }
    return Promise.reject(error)
  }
)

export default api