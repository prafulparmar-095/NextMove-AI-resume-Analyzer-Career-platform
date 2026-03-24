function ResumeList({ resumes = [] }) {
  return (
    <div className="card-ui p-6">
      <h3 className="text-xl font-bold mb-4">My Resumes</h3>

      <div className="space-y-3">
        {resumes.length > 0 ? (
          resumes.map((resume, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-xl p-4 flex items-center justify-between gap-4"
            >
              <div>
                <p className="font-semibold text-slate-800">{resume.title}</p>
                <p className="text-sm text-gray-500 mt-1">{resume.updatedAt}</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm">
                {resume.type}
              </span>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No resumes available yet.</p>
        )}
      </div>
    </div>
  )
}

export default ResumeList