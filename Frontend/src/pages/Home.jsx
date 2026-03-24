import { Link } from "react-router-dom"
import Navbar from "../components/common/Navbar"
import Footer from "../components/common/Footer"

function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="section-padding">
        <div className="container-custom px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium mb-4">
              AI Resume Analyzer & Career Platform
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Build Smarter Resumes and Unlock Your
              <span className="gradient-text"> Next Move</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Upload your resume, get AI-powered ATS score, discover missing skills,
              generate better resumes, and find the right career path.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/register"
                className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700"
              >
                Get Started
              </Link>

              <Link
                to="/resume-analyzer"
                className="px-6 py-3 rounded-xl border border-slate-300 bg-white font-semibold hover:bg-slate-100"
              >
                Analyze Resume
              </Link>
            </div>
          </div>

          <div className="card-ui p-6">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
              alt="Resume analysis"
              className="w-full h-[420px] object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose NextMove?</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-ui p-6">
              <h3 className="text-xl font-semibold mb-3">AI Resume Analysis</h3>
              <p className="text-gray-600">
                Get skills extracted, keyword suggestions, formatting tips, and smart ATS evaluation.
              </p>
            </div>

            <div className="card-ui p-6">
              <h3 className="text-xl font-semibold mb-3">ATS-Friendly Resume Builder</h3>
              <p className="text-gray-600">
                Build a professional resume with structured sections and ready-to-use modern templates.
              </p>
            </div>

            <div className="card-ui p-6">
              <h3 className="text-xl font-semibold mb-3">Career Recommendations</h3>
              <p className="text-gray-600">
                Find best-fit job roles, identify skill gaps, and follow a roadmap for career growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom px-4">
          <div className="card-ui p-8 md:p-12 text-center bg-gradient-to-r from-blue-600 to-violet-600 text-white">
            <h2 className="text-3xl md:text-4xl font-bold">Start your career journey today</h2>
            <p className="mt-4 text-lg text-blue-100">
              Create your account and unlock AI-powered resume intelligence.
            </p>
            <Link
              to="/register"
              className="inline-block mt-6 px-6 py-3 rounded-xl bg-white text-blue-700 font-semibold hover:bg-slate-100"
            >
              Create Account
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home