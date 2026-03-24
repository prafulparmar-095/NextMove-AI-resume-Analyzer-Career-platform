function UserStats({ stats }) {
  const items = [
    { label: "Uploaded Resumes", value: stats?.uploadedResumes ?? 0 },
    { label: "Created Resumes", value: stats?.createdResumes ?? 0 },
    { label: "ATS Analyses", value: stats?.atsAnalyses ?? 0 },
    { label: "Career Suggestions", value: stats?.careerSuggestions ?? 0 }
  ]

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
      {items.map((item) => (
        <div key={item.label} className="card-ui p-5">
          <p className="text-sm text-gray-500">{item.label}</p>
          <h3 className="text-3xl font-bold mt-2">{item.value}</h3>
        </div>
      ))}
    </div>
  )
}

export default UserStats