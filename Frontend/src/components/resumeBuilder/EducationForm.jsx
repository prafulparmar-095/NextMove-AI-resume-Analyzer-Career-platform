import { useContext } from "react"
import { ResumeContext } from "../../context/ResumeContext"

function EducationForm() {
  const { resumeData, updateArraySection, addArrayItem, removeArrayItem } = useContext(ResumeContext)

  return (
    <div className="card-ui p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Education</h2>
        <button
          type="button"
          onClick={() =>
            addArrayItem("education", {
              degree: "",
              institution: "",
              year: "",
              score: ""
            })
          }
          className="px-4 py-2 rounded-lg bg-blue-600 text-white"
        >
          Add
        </button>
      </div>

      <div className="space-y-4">
        {resumeData.education.map((item, index) => (
          <div key={index} className="border rounded-2xl p-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Degree"
                value={item.degree}
                onChange={(e) => updateArraySection("education", index, "degree", e.target.value)}
                className="px-4 py-3 border rounded-xl"
              />

              <input
                type="text"
                placeholder="Institution"
                value={item.institution}
                onChange={(e) => updateArraySection("education", index, "institution", e.target.value)}
                className="px-4 py-3 border rounded-xl"
              />

              <input
                type="text"
                placeholder="Year"
                value={item.year}
                onChange={(e) => updateArraySection("education", index, "year", e.target.value)}
                className="px-4 py-3 border rounded-xl"
              />

              <input
                type="text"
                placeholder="CGPA / Percentage"
                value={item.score}
                onChange={(e) => updateArraySection("education", index, "score", e.target.value)}
                className="px-4 py-3 border rounded-xl"
              />
            </div>

            {resumeData.education.length > 1 && (
              <button
                type="button"
                onClick={() => removeArrayItem("education", index)}
                className="mt-4 px-4 py-2 rounded-lg bg-red-500 text-white"
              >
                Remove
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default EducationForm