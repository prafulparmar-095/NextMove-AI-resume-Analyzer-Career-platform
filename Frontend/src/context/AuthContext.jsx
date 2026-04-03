import { createContext, useEffect, useState } from "react"

export const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  function clearAuth() {
    localStorage.removeItem("nextmove_user")
    localStorage.removeItem("nextmove_token")
    setUser(null)
  }

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("nextmove_user")
      const storedToken = localStorage.getItem("nextmove_token")

      if (storedUser && storedToken) {
        const parsedUser = JSON.parse(storedUser)
        setUser(parsedUser)
      } else {
        setUser(null)
      }
    } catch (error) {
      console.error("Auth load error:", error)
      clearAuth()
    } finally {
      setLoading(false)
    }
  }, [])

  function loginUser(userData, token) {
    localStorage.setItem("nextmove_user", JSON.stringify(userData))
    localStorage.setItem("nextmove_token", token)
    setUser(userData)
  }

  function logoutUser() {
    clearAuth()
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loginUser,
        logoutUser,
        loading,
        isAuthenticated: !!user
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}