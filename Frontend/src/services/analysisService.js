import api from "./api"

function getAuthConfig(extraHeaders = {}) {
  const token = localStorage.getItem("nextmove_token")

  return {
    headers: {
      Authorization: `Bearer ${token}`,
      ...extraHeaders
    }
  }
}

export async function uploadResumeApi(formData) {
  const { data } = await api.post(
    "/analyzer/upload",
    formData,
    getAuthConfig({
      "Content-Type": "multipart/form-data"
    })
  )
  return data
}

export async function analyzeResumeApi(payload) {
  const { data } = await api.post("/analyzer/analyze", payload, getAuthConfig())
  return data
}

export async function getAnalysisHistoryApi() {
  const { data } = await api.get("/analyzer/history", getAuthConfig())
  return data
}

export async function getAnalysisByIdApi(id) {
  const { data } = await api.get(`/analyzer/${id}`, getAuthConfig())
  return data
}