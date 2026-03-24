import { useState } from "react"
import toast from "react-hot-toast"
import { forgotPasswordApi } from "../../services/authService"

function ForgotPasswordForm() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setLoading(true)
      await forgotPasswordApi({ email })
      toast.success("Password reset link or instruction sent")
      setEmail("")
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to process request")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto card-ui p-8">
      <h2 className="text-3xl font-bold text-center mb-2">Forgot Password</h2>
      <p className="text-center text-gray-600 mb-6">
        Enter your email to receive reset instructions
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2 font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-70"
        >
          {loading ? "Submitting..." : "Send Request"}
        </button>
      </form>
    </div>
  )
}

export default ForgotPasswordForm