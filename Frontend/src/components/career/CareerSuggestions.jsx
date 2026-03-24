function CareerSuggestions({ roles = [] }) {
  return (
    <div className="card-ui p-6">
      <h3 className="text-2xl font-bold mb-4">Best Career Suggestions</h3>

      <div className="grid md:grid-cols-2 gap-4">
        {roles.length > 0 ? (
          roles.map((role, index) => (
            <div key={index} className="border border-slate-200 rounded-2xl p-4">
              <h4 className="text-lg font-semibold">{role.title}</h4>
              <p className="text-sm text-gray-600 mt-2">{role.description}</p>
              <p className="mt-3 inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
                Match: {role.matchPercentage}%
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No career suggestions available yet.</p>
        )}
      </div>
    </div>
  )
}

export default CareerSuggestions