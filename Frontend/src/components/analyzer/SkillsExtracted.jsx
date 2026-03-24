function SkillsExtracted({ skills = [] }) {
  return (
    <div className="card-ui p-6">
      <h3 className="text-xl font-bold mb-4">Extracted Skills</h3>

      <div className="flex flex-wrap gap-2">
        {skills.length > 0 ? (
          skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium"
            >
              {skill}
            </span>
          ))
        ) : (
          <p className="text-gray-500">No skills extracted yet.</p>
        )}
      </div>
    </div>
  )
}

export default SkillsExtracted