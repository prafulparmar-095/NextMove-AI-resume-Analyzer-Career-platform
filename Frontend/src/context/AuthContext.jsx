import { createContext, useEffect, useState } from "react"

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedUser = localStorage.getItem("nextmove_user")
    const storedToken = localStorage.getItem("nextmove_token")

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser))
    }

    setLoading(false)
  }, [])

  function loginUser(userData, token) {
    localStorage.setItem("nextmove_user", JSON.stringify(userData))
    localStorage.setItem("nextmove_token", token)
    setUser(userData)
  }

  function logoutUser() {
    localStorage.removeItem("nextmove_user")
    localStorage.removeItem("nextmove_token")
    setUser(null)
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