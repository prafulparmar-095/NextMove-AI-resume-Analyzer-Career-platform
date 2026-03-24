function ResumeTable({ resumes = [] }) {
  return (
    <div className="card-ui p-6 overflow-x-auto">
      <h3 className="text-xl font-bold mb-4">Resume Records</h3>

      <table className="w-full min-w-[700px] border-collapse">
        <thead>
          <tr className="border-b border-slate-200 text-left">
            <th className="py-3 px-2">Title / File</th>
            <th className="py-3 px-2">User</th>
            <th className="py-3 px-2">Type</th>
            <th className="py-3 px-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {resumes.length > 0 ? (
            resumes.map((resume, index) => (
              <tr key={index} className="border-b border-slate-100">
                <td className="py-3 px-2 font-medium">{resume.title}</td>
                <td className="py-3 px-2 text-gray-600">{resume.user}</td>
                <td className="py-3 px-2">{resume.type}</td>
                <td className="py-3 px-2 text-gray-500">{resume.date}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="py-4 px-2 text-gray-500">
                No resume records found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default ResumeTable