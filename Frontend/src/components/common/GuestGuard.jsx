import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

function GuestGuard({ children, fallback }) {
  const { user } = useContext(AuthContext)

  if (!user) {
    return fallback || null
  }

  return children
}

export default GuestGuard