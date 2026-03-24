import Navbar from "../components/common/Navbar"
import Footer from "../components/common/Footer"
import RegisterForm from "../components/auth/RegisterForm"

function Register() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="container-custom px-4 py-16">
        <RegisterForm />
      </div>
      <Footer />
    </div>
  )
}

export default Register