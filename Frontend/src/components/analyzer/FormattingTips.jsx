function FormattingTips({ tips = [] }) {
  return (
    <div className="card-ui p-6">
      <h3 className="text-xl font-bold mb-4">Formatting Tips</h3>

      <ul className="space-y-3">
        {tips.length > 0 ? (
          tips.map((tip, index) => (
            <li key={index} className="border border-slate-200 rounded-xl p-3 text-gray-700">
              {tip}
            </li>
          ))
        ) : (
          <li className="text-gray-500">No formatting tips available.</li>
        )}
      </ul>
    </div>
  )
}

export default FormattingTips