import api from "./api"

export async function registerApi(payload) {
  const { data } = await api.post("/auth/register", payload)
  return data
}

export async function loginApi(payload) {
  const { data } = await api.post("/auth/login", payload)
  return data
}

export async function logoutApi() {
  const { data } = await api.post("/auth/logout")
  return data
}

export async function forgotPasswordApi(payload) {
  const { data } = await api.post("/auth/forgot-password", payload)
  return data
}

export async function sendOtpApi(payload) {
  const { data } = await api.post("/otp/send", payload)
  return data
}

export async function verifyOtpApi(payload) {
  const { data } = await api.post("/otp/verify", payload)
  return data
}