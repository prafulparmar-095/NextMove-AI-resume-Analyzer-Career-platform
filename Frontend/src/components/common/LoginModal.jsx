import { Link } from "react-router-dom"

function LoginModal({ isOpen, onClose, title = "Login Required" }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl text-gray-500 hover:text-gray-700"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold mb-3">{title}</h2>
        <p className="text-gray-600 mb-6">
          You need to login or create an account to unlock this feature.
        </p>

        <div className="flex gap-3">
          <Link
            to="/login"
            className="flex-1 text-center px-4 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="flex-1 text-center px-4 py-3 rounded-xl border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginModal