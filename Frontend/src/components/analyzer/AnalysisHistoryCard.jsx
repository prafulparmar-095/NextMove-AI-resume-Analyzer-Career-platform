function AnalysisHistoryCard({ item }) {
  return (
    <div className="card-ui p-5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h4 className="text-lg font-bold">{item?.fileName || "Resume File"}</h4>
          <p className="text-sm text-gray-500 mt-1">
            {item?.createdAt || "Recent analysis"}
          </p>
        </div>

        <div className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-semibold">
          ATS: {item?.atsScore ?? 0}
        </div>
      </div>
    </div>
  )
}

export default AnalysisHistoryCard