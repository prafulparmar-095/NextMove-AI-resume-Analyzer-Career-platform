import api from "./api"

export async function generateCareerSuggestionsApi(payload) {
  const { data } = await api.post("/career/generate", payload)
  return data
}

export async function getMyCareerSuggestionsApi() {
  const { data } = await api.get("/career/my-suggestions")
  return data
}