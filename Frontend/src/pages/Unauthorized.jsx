import { Link } from "react-router-dom"

function Unauthorized() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="card-ui p-10 max-w-lg w-full text-center">
        <h1 className="text-4xl font-bold text-red-600">403</h1>
        <h2 className="text-2xl font-semibold mt-3">Unauthorized Access</h2>
        <p className="text-gray-600 mt-4">
          You do not have permission to access this page.
        </p>
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default Unauthorized