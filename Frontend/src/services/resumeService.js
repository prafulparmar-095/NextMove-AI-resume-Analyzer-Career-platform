import api from "./api"

export async function createResumeApi(payload) {
  const { data } = await api.post("/resume/build", payload)
  return data
}

export async function getMyCreatedResumesApi() {
  const { data } = await api.get("/resume/my-created")
  return data
}

export async function getResumeByIdApi(id) {
  const { data } = await api.get(`/resume/${id}`)
  return data
}

export async function deleteResumeApi(id) {
  const { data } = await api.delete(`/resume/${id}`)
  return data
}