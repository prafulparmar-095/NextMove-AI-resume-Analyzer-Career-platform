function KeywordSuggestions({ suggestions = [] }) {
  return (
    <div className="card-ui p-6">
      <h3 className="text-xl font-bold mb-4">Keyword Suggestions</h3>

      <ul className="space-y-3">
        {suggestions.length > 0 ? (
          suggestions.map((item, index) => (
            <li key={index} className="border border-slate-200 rounded-xl p-3 text-gray-700">
              {item}
            </li>
          ))
        ) : (
          <li className="text-gray-500">No suggestions available.</li>
        )}
      </ul>
    </div>
  )
}

export default KeywordSuggestions