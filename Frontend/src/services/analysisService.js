import api from "./api"

export async function uploadResumeApi(formData) {
  const { data } = await api.post("/analyzer/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  })
  return data
}

export async function analyzeResumeApi(payload) {
  const { data } = await api.post("/analyzer/analyze", payload)
  return data
}

export async function getAnalysisHistoryApi() {
  const { data } = await api.get("/analyzer/history")
  return data
}

export async function getAnalysisByIdApi(id) {
  const { data } = await api.get(`/analyzer/${id}`)
  return data
}