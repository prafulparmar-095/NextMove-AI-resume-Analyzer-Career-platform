import { useContext } from "react"
import { ResumeContext } from "../../context/ResumeContext"

function ExperienceForm() {
  const { resumeData, updateArraySection, addArrayItem, removeArrayItem } = useContext(ResumeContext)

  return (
    <div className="card-ui p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Experience</h2>
        <button
          type="button"
          onClick={() =>
            addArrayItem("experience", {
              company: "",
              role: "",
              duration: "",
              description: ""
            })
          }
          className="px-4 py-2 rounded-lg bg-blue-600 text-white"
        >
          Add
        </button>
      </div>

      <div className="space-y-4">
        {resumeData.experience.map((item, index) => (
          <div key={index} className="border rounded-2xl p-4">
            <div className="grid gap-4">
              <input
                type="text"
                placeholder="Company Name"
                value={item.company}
                onChange={(e) => updateArraySection("experience", index, "company", e.target.value)}
                className="px-4 py-3 border rounded-xl"
              />

              <input
                type="text"
                placeholder="Role"
                value={item.role}
                onChange={(e) => updateArraySection("experience", index, "role", e.target.value)}
                className="px-4 py-3 border rounded-xl"
              />

              <input
                type="text"
                placeholder="Duration"
                value={item.duration}
                onChange={(e) => updateArraySection("experience", index, "duration", e.target.value)}
                className="px-4 py-3 border rounded-xl"
              />

              <textarea
                placeholder="Work Description"
                value={item.description}
                onChange={(e) => updateArraySection("experience", index, "description", e.target.value)}
                className="px-4 py-3 border rounded-xl min-h-28"
              />
            </div>

            {resumeData.experience.length > 1 && (
              <button
                type="button"
                onClick={() => removeArrayItem("experience", index)}
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

export default ExperienceForm