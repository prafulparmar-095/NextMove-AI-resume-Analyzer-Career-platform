function JobRoleCard({ role }) {
  return (
    <div className="card-ui p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="text-xl font-bold">{role?.title || "Job Role"}</h4>
          <p className="text-gray-600 mt-2">
            {role?.description || "Role description will appear here."}
          </p>
        </div>

        <div className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-semibold whitespace-nowrap">
          {role?.matchPercentage ?? 0}% Match
        </div>
      </div>
    </div>
  )
}

export default JobRoleCard