import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { registerApi } from "../../services/authService"

function RegisterForm() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user"
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match")
      return
    }

    try {
      setLoading(true)
      setError("")

      await registerApi({
        name: form.name,
        email: form.email,
        password: form.password,
        role: form.role
      })

      navigate("/login")
    } catch (err) {
      setError(err?.response?.data?.message || "Registration failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto card-ui p-8">
      <h2 className="text-3xl font-bold text-center mb-2">Create Account</h2>
      <p className="text-center text-gray-600 mb-6">
        Join NextMove and unlock full AI career tools
      </p>

      <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
        <div>
          <label className="block mb-2 font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            autoComplete="off"
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl"
            required
          />
        </div>

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
          <label className="block mb-2 font-medium">Role</label>
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white"
            required
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            autoComplete="new-password"
            onChange={handleChange}
            placeholder="Enter password"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            autoComplete="new-password"
            onChange={handleChange}
            placeholder="Confirm password"
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
          {loading ? "Registering..." : "Register"}
        </button>
      </form>

      <p className="text-center text-gray-600 mt-5 text-sm">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-600 font-semibold hover:underline">
          Login
        </Link>
      </p>
    </div>
  )
}

export default RegisterForm