function AdminStats({ stats }) {
  const items = [
    { label: "Total Users", value: stats?.totalUsers ?? 0 },
    { label: "Guest Visits", value: stats?.guestVisits ?? 0 },
    { label: "Uploaded Resumes", value: stats?.uploadedResumes ?? 0 },
    { label: "Created Resumes", value: stats?.createdResumes ?? 0 },
    { label: "ATS Analyses", value: stats?.atsAnalyses ?? 0 },
    { label: "Career Usage", value: stats?.careerUsage ?? 0 }
  ]

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
      {items.map((item) => (
        <div key={item.label} className="card-ui p-5">
          <p className="text-sm text-gray-500">{item.label}</p>
          <h3 className="text-3xl font-bold mt-2">{item.value}</h3>
        </div>
      ))}
    </div>
  )
}

export default AdminStats