import { useContext, useState } from "react"
import Navbar from "../components/common/Navbar"
import Footer from "../components/common/Footer"
import ResumeUpload from "../components/analyzer/ResumeUpload"
import ATSScoreCard from "../components/analyzer/ATSScoreCard"
import SkillsExtracted from "../components/analyzer/SkillsExtracted"
import MissingSkills from "../components/analyzer/MissingSkills"
import KeywordSuggestions from "../components/analyzer/KeywordSuggestions"
import FormattingTips from "../components/analyzer/FormattingTips"
import BlurLockCard from "../components/common/BlurLockCard"
import LoginModal from "../components/common/LoginModal"
import { AnalysisContext } from "../context/AnalysisContext"
import { AuthContext } from "../context/AuthContext"

function ResumeAnalyzerPage() {
  const { user } = useContext(AuthContext)
  const { analysisResult, setAnalysisResult, uploadedResume } = useContext(AnalysisContext)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleMockAnalyze() {
    try {
      setLoading(true)

      const mockResult = {
        atsScore: 78,
        extractedSkills: ["React", "Node.js", "MongoDB", "JavaScript", "Express.js"],
        missingSkills: ["TypeScript", "Docker", "CI/CD"],
        suggestions: [
          "Add more job-specific keywords",
          "Mention measurable achievements in projects",
          "Improve summary with role-focused language"
        ],
        formattingTips: [
          "Keep section headings consistent",
          "Use bullet points for experience and projects",
          "Keep resume length within 1-2 pages"
        ]
      }

      setAnalysisResult(mockResult)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="container-custom px-4 py-16 space-y-8">
        <ResumeUpload />

        <div className="card-ui p-6">
          <h2 className="text-2xl font-bold mb-3">Analyze Resume</h2>
          <p className="text-gray-600 mb-4">
            Upload your resume and click analyze to generate AI-based ATS insights.
          </p>

          <button
            onClick={handleMockAnalyze}
            disabled={loading || !uploadedResume}
            className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-60"
          >
            {loading ? "Analyzing..." : "Analyze Resume"}
          </button>
        </div>

        {analysisResult && (
          user ? (
            <div className="grid lg:grid-cols-2 gap-6">
              <ATSScoreCard score={analysisResult.atsScore} />
              <SkillsExtracted skills={analysisResult.extractedSkills} />
              <MissingSkills skills={analysisResult.missingSkills} />
              <KeywordSuggestions suggestions={analysisResult.suggestions} />
              <div className="lg:col-span-2">
                <FormattingTips tips={analysisResult.formattingTips} />
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <BlurLockCard
                title="Login to View Full ATS Analysis"
                description="Guests can upload and analyze resumes, but detailed AI results are visible only after login."
              >
                <div className="grid lg:grid-cols-2 gap-6 p-2">
                  <ATSScoreCard score={analysisResult.atsScore} />
                  <SkillsExtracted skills={analysisResult.extractedSkills} />
                </div>
              </BlurLockCard>

              <button
                onClick={() => setShowLoginModal(true)}
                className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700"
              >
                Login to Unlock Results
              </button>
            </div>
          )
        )}
      </div>

      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        title="Login to Unlock ATS Results"
      />

      <Footer />
    </div>
  )
}

export default ResumeAnalyzerPage