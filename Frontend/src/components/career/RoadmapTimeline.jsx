function RoadmapTimeline({ steps = [] }) {
  return (
    <div className="card-ui p-6">
      <h3 className="text-xl font-bold mb-4">Career Roadmap</h3>

      <div className="space-y-4">
        {steps.length > 0 ? (
          steps.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shrink-0">
                {index + 1}
              </div>
              <div className="border border-slate-200 rounded-xl p-4 w-full bg-white">
                <p className="font-medium text-slate-800">{step}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No roadmap generated yet.</p>
        )}
      </div>
    </div>
  )
}

export default RoadmapTimeline