function ATSScoreCard({ score = 0 }) {
  return (
    <div className="card-ui p-6">
      <h3 className="text-xl font-bold mb-4">ATS Score</h3>

      <div className="flex items-center gap-6">
        <div className="w-28 h-28 rounded-full border-[10px] border-blue-600 flex items-center justify-center text-2xl font-bold text-blue-700">
          {score}
        </div>

        <div>
          <p className="text-lg font-semibold text-slate-800">
            {score >= 80 ? "Excellent" : score >= 60 ? "Good" : "Needs Improvement"}
          </p>
          <p className="text-gray-600 mt-2">
            This score shows how ATS-friendly your resume is based on structure, skills, and keyword relevance.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ATSScoreCard