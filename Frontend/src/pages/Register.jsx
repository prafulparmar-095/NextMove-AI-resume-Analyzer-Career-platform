import RegisterForm from "../components/auth/RegisterForm"

function Register() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-slate-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <RegisterForm />
      </div>
    </div>
  )
}

export default Register