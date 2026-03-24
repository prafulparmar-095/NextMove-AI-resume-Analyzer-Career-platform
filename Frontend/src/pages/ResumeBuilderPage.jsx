import { useContext, useState } from "react"
import Navbar from "../components/common/Navbar"
import Footer from "../components/common/Footer"
import BuilderForm from "../components/resumeBuilder/BuilderForm"
import ResumePreview from "../components/resumeBuilder/ResumePreview"
import DownloadResumeButton from "../components/resumeBuilder/DownloadResumeButton"
import BlurLockCard from "../components/common/BlurLockCard"
import LoginModal from "../components/common/LoginModal"
import { AuthContext } from "../context/AuthContext"

function ResumeBuilderPage() {
  const { user } = useContext(AuthContext)
  const [showLoginModal, setShowLoginModal] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="container-custom px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-8">
          <BuilderForm />

          <div className="space-y-4">
            {user ? (
              <>
                <ResumePreview />
                <DownloadResumeButton />
              </>
            ) : (
              <>
                <BlurLockCard
                  title="Login to Preview Resume"
                  description="Guests can fill the resume form, but preview and PDF download are available after login."
                >
                  <ResumePreview />
                </BlurLockCard>

                <button
                  onClick={() => setShowLoginModal(true)}
                  className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700"
                >
                  Login to Download Resume
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        title="Login to Unlock Resume Preview"
      />

      <Footer />
    </div>
  )
}

export default ResumeBuilderPage