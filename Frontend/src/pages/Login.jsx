import Navbar from "../components/common/Navbar"
import Footer from "../components/common/Footer"
import LoginForm from "../components/auth/LoginForm"

function Login() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="container-custom px-4 py-16">
        <LoginForm />
      </div>
      <Footer />
    </div>
  )
}

export default Login