import Navbar from "../components/common/Navbar"
import Footer from "../components/common/Footer"
import OtpLoginForm from "../components/auth/OtpLoginForm"

function OtpLogin() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="container-custom px-4 py-16">
        <OtpLoginForm />
      </div>
      <Footer />
    </div>
  )
}

export default OtpLogin