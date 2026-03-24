import { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { loginApi } from "../../services/authService"

function LoginForm() {
  const navigate = useNavigate()
  const { setUser } = useContext(AuthContext)

  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setLoading(true)
      setError("")

      const data = await loginApi(form)

      setUser(data.user)
      localStorage.setItem("nextmove_user", JSON.stringify(data.user))
      localStorage.setItem("nextmove_token", data.token)

      navigate("/dashboard")
    } catch (err) {
      setError(err?.response?.data?.message || "Invalid credentials")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto card-ui p-8">
      <h2 className="text-3xl font-bold text-center mb-2">Welcome Back</h2>
      <p className="text-center text-gray-600 mb-6">
        Login to access your AI resume insights
      </p>

      <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
        <div>
          <label className="block mb-2 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            autoComplete="off"
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            autoComplete="new-password"
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl"
            required
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-70"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <div className="mt-5 flex flex-col gap-3 text-sm text-center">
        <Link to="/forgot-password" className="text-blue-600 hover:underline">
          Forgot Password?
        </Link>
        <Link to="/otp-login" className="text-blue-600 hover:underline">
          Login with OTP
        </Link>
        <p className="text-gray-600">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-600 font-semibold hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LoginForm