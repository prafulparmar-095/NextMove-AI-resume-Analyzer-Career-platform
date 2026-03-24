function ActivityLogs({ logs = [] }) {
  return (
    <div className="card-ui p-6">
      <h3 className="text-xl font-bold mb-4">Recent Activity Logs</h3>

      <div className="space-y-3">
        {logs.length > 0 ? (
          logs.map((log, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-xl p-4 flex items-center justify-between gap-4"
            >
              <div>
                <p className="font-medium text-slate-800">{log.action}</p>
                <p className="text-sm text-gray-500 mt-1">{log.time}</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm capitalize">
                {log.role}
              </span>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No recent logs available.</p>
        )}
      </div>
    </div>
  )
}

export default ActivityLogs