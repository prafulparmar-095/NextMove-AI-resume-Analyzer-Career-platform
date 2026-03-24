import { useContext, useState } from "react"
import toast from "react-hot-toast"
import { AnalysisContext } from "../../context/AnalysisContext"
import { uploadResumeApi } from "../../services/analysisService"

function ResumeUpload() {
  const { setUploadedResume } = useContext(AnalysisContext)
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)

  async function handleUpload(e) {
    e.preventDefault()

    if (!file) {
      toast.error("Please select a PDF or DOCX file")
      return
    }

    try {
      setLoading(true)
      const formData = new FormData()
      formData.append("resume", file)

      const data = await uploadResumeApi(formData)
      setUploadedResume(data)
      toast.success("Resume uploaded successfully")
    } catch (error) {
      toast.error(error?.response?.data?.message || "Upload failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="card-ui p-6">
      <h2 className="text-2xl font-bold mb-4">Upload Resume</h2>

      <form onSubmit={handleUpload} className="space-y-4">
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white"
        />

        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-70"
        >
          {loading ? "Uploading..." : "Upload Resume"}
        </button>
      </form>
    </div>
  )
}

export default ResumeUpload