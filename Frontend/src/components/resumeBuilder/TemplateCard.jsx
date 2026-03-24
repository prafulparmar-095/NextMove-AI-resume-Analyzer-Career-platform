function TemplateCard({ name, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`border rounded-2xl p-5 text-left transition ${
        selected
          ? "border-blue-600 bg-blue-50 shadow-md"
          : "border-slate-200 bg-white hover:border-blue-300"
      }`}
    >
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-sm text-gray-600 mt-2">
        Clean and ATS-friendly layout for professional resumes.
      </p>
    </button>
  )
}

export default TemplateCard