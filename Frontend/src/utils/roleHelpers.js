export function isAdmin(user) {
  return user?.role === "admin"
}

export function isUser(user) {
  return user?.role === "user"
}

export function isGuest(user) {
  return !user
}