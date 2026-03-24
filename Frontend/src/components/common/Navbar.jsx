import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"

function Navbar() {
  const { user, logoutUser } = useContext(AuthContext)
  const navigate = useNavigate()

  function handleLogout() {
    logoutUser()
    navigate("/login")
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="container-custom px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold gradient-text">
          NextMove
        </Link>

        <div className="hidden md:flex items-center gap-6 font-medium">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/resume-builder" className="hover:text-blue-600">Resume Builder</Link>
          <Link to="/resume-analyzer" className="hover:text-blue-600">Resume Analyzer</Link>
          {user && <Link to="/dashboard" className="hover:text-blue-600">Dashboard</Link>}
          {user?.role === "admin" && <Link to="/admin" className="hover:text-blue-600">Admin</Link>}
        </div>

        <div className="flex items-center gap-3">
          {!user ? (
            <>
              <Link
                to="/login"
                className="px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <span className="hidden sm:block font-medium text-sm">
                Hi, {user.name}
              </span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar