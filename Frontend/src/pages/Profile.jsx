import { useContext } from "react"
import Navbar from "../components/common/Navbar"
import Footer from "../components/common/Footer"
import { AuthContext } from "../context/AuthContext"

function Profile() {
  const { user } = useContext(AuthContext)

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="container-custom px-4 py-16">
        <div className="max-w-2xl mx-auto card-ui p-8">
          <h1 className="text-3xl font-bold mb-6">My Profile</h1>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Name</p>
              <p className="text-lg font-medium">{user?.name || "N/A"}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-lg font-medium">{user?.email || "N/A"}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Role</p>
              <p className="text-lg font-medium capitalize">{user?.role || "user"}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Profile