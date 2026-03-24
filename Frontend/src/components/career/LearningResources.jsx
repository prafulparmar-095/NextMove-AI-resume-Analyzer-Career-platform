function LearningResources({ resources = [] }) {
  return (
    <div className="card-ui p-6">
      <h3 className="text-xl font-bold mb-4">Learning Recommendations</h3>

      <div className="space-y-3">
        {resources.length > 0 ? (
          resources.map((resource, index) => (
            <a
              key={index}
              href={resource.url}
              target="_blank"
              rel="noreferrer"
              className="block border border-slate-200 rounded-xl p-4 hover:bg-slate-50"
            >
              <p className="font-semibold text-slate-800">{resource.title}</p>
              <p className="text-sm text-gray-600 mt-1">{resource.platform}</p>
            </a>
          ))
        ) : (
          <p className="text-gray-500">No learning resources available yet.</p>
        )}
      </div>
    </div>
  )
}

export default LearningResources