import { useContext } from "react"
import { ResumeContext } from "../../context/ResumeContext"

function SkillsForm() {
  const { resumeData, updateArraySection, addArrayItem, removeArrayItem } = useContext(ResumeContext)

  return (
    <div className="card-ui p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Skills</h2>
        <button
          type="button"
          onClick={() => addArrayItem("skills", "")}
          className="px-4 py-2 rounded-lg bg-blue-600 text-white"
        >
          Add
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {resumeData.skills.map((skill, index) => (
          <div key={index} className="flex gap-2">
            <input
              type="text"
              placeholder="Enter skill"
              value={skill}
              onChange={(e) => updateArraySection("skills", index, null, e.target.value)}
              className="flex-1 px-4 py-3 border rounded-xl"
            />

            {resumeData.skills.length > 1 && (
              <button
                type="button"
                onClick={() => removeArrayItem("skills", index)}
                className="px-4 py-2 rounded-lg bg-red-500 text-white"
              >
                X
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillsForm