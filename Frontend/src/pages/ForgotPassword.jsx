import Navbar from "../components/common/Navbar"
import Footer from "../components/common/Footer"
import ForgotPasswordForm from "../components/auth/ForgotPasswordForm"

function ForgotPassword() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="container-custom px-4 py-16">
        <ForgotPasswordForm />
      </div>
      <Footer />
    </div>
  )
}

export default ForgotPassword