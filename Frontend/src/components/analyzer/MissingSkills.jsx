function MissingSkills({ skills = [] }) {
  return (
    <div className="card-ui p-6">
      <h3 className="text-xl font-bold mb-4">Missing Skills</h3>

      <div className="flex flex-wrap gap-2">
        {skills.length > 0 ? (
          skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-2 rounded-full bg-red-50 text-red-600 text-sm font-medium"
            >
              {skill}
            </span>
          ))
        ) : (
          <p className="text-gray-500">No major missing skills found.</p>
        )}
      </div>
    </div>
  )
}

export default MissingSkills