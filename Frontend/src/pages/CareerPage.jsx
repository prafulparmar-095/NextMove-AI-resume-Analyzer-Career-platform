import { useState } from "react"
import Navbar from "../components/common/Navbar"
import Footer from "../components/common/Footer"
import CareerSuggestions from "../components/career/CareerSuggestions"
import SkillGapCard from "../components/career/SkillGapCard"
import RoadmapTimeline from "../components/career/RoadmapTimeline"
import LearningResources from "../components/career/LearningResources"
import { uploadResumeApi, analyzeResumeApi } from "../services/analysisService"
import { generateCareerSuggestionsApi } from "../services/careerService"

function CareerPage() {
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [careerData, setCareerData] = useState(null)
  const [error, setError] = useState("")

  async function handleCareerAI(e) {
    e.preventDefault()

    if (!file) {
      setError("Please upload your resume first")
      return
    }

    try {
      setLoading(true)
      setError("")
      setCareerData(null)

      const formData = new FormData()
      formData.append("resume", file)

      const uploadData = await uploadResumeApi(formData)
      const resumeId = uploadData?.resume?._id

      if (!resumeId) {
        throw new Error("Resume upload failed")
      }

      const analysisData = await analyzeResumeApi({ resumeId })
      const analysisId = analysisData?.analysis?._id

      if (!analysisId) {
        throw new Error("Resume analysis failed")
      }

      const careerResponse = await generateCareerSuggestionsApi({ analysisId })
      setCareerData(careerResponse.career)
    } catch (err) {
      setError(err?.response?.data?.message || err.message || "Failed to generate career suggestions")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="container-custom px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="card-ui p-8">
            <h1 className="text-3xl font-bold mb-3">Career AI</h1>
            <p className="text-gray-600 mb-6">
              Upload your resume and get AI-based career suggestions, skill gap analysis,
              roadmap, and learning resources.
            </p>

            <form onSubmit={handleCareerAI} className="space-y-4">
              <div>
                <label className="block mb-2 font-medium">Upload Resume</label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white"
                />
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-70"
              >
                {loading ? "Generating..." : "Get Career Suggestions"}
              </button>
            </form>
          </div>

          {careerData && (
            <div className="space-y-6">
              <CareerSuggestions roles={careerData.bestRoles || []} />

              <div className="grid lg:grid-cols-2 gap-6">
                <SkillGapCard missingSkills={careerData.skillGap || []} />
                <LearningResources resources={careerData.learningResources || []} />
              </div>

              <RoadmapTimeline steps={careerData.roadmap || []} />
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default CareerPage