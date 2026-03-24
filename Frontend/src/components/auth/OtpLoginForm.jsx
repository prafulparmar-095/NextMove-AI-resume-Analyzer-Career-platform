import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import { AuthContext } from "../../context/AuthContext"
import { sendOtpApi, verifyOtpApi } from "../../services/authService"

function OtpLoginForm() {
  const navigate = useNavigate()
  const { loginUser } = useContext(AuthContext)

  const [step, setStep] = useState(1)
  const [email, setEmail] = useState("")
  const [otp, setOtp] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSendOtp(e) {
    e.preventDefault()
    try {
      setLoading(true)
      await sendOtpApi({ email })
      toast.success("OTP sent to email")
      setStep(2)
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to send OTP")
    } finally {
      setLoading(false)
    }
  }

  async function handleVerifyOtp(e) {
    e.preventDefault()
    try {
      setLoading(true)
      const data = await verifyOtpApi({ email, otp })
      loginUser(data.user, data.token)
      toast.success("OTP login successful")
      navigate("/dashboard")
    } catch (error) {
      toast.error(error?.response?.data?.message || "Invalid OTP")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto card-ui p-8">
      <h2 className="text-3xl font-bold text-center mb-2">OTP Login</h2>
      <p className="text-center text-gray-600 mb-6">
        Login securely using email OTP
      </p>

      {step === 1 ? (
        <form onSubmit={handleSendOtp} className="space-y-4">
          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your registered email"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-70"
          >
            {loading ? "Sending OTP..." : "Send OTP"}
          </button>
        </form>
      ) : (
        <form onSubmit={handleVerifyOtp} className="space-y-4">
          <div>
            <label className="block mb-2 font-medium">OTP</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-70"
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </form>
      )}
    </div>
  )
}

export default OtpLoginForm