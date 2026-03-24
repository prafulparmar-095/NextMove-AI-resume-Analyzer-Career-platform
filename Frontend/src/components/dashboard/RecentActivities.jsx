function RecentActivities({ activities = [] }) {
  return (
    <div className="card-ui p-6">
      <h3 className="text-xl font-bold mb-4">Recent Activities</h3>

      <div className="space-y-4">
        {activities.length > 0 ? (
          activities.map((activity, index) => (
            <div
              key={index}
              className="flex items-start gap-3 border-b border-slate-200 pb-3 last:border-none"
            >
              <div className="w-2 h-2 mt-2 rounded-full bg-blue-600"></div>

              <div className="flex-1">
                <p className="text-slate-800 font-medium">
                  {activity.action}
                </p>
                <p className="text-sm text-gray-500">
                  {activity.time}
                </p>
              </div>

              {activity.type && (
                <span className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-600">
                  {activity.type}
                </span>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-500">No recent activity found.</p>
        )}
      </div>
    </div>
  )
}

export default RecentActivities