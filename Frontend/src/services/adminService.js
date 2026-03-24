import api from "./api"

export async function getAdminStatsApi() {
  const { data } = await api.get("/admin/stats")
  return data
}

export async function getAdminUsersApi() {
  const { data } = await api.get("/admin/users")
  return data
}

export async function getAdminResumesApi() {
  const { data } = await api.get("/admin/resumes")
  return data
}

export async function getAdminActivitiesApi() {
  const { data } = await api.get("/admin/activities")
  return data
}