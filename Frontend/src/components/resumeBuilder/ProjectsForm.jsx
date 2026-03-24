import { useContext } from "react"
import { ResumeContext } from "../../context/ResumeContext"

function ProjectsForm() {
  const { resumeData, updateArraySection, addArrayItem, removeArrayItem } = useContext(ResumeContext)

  return (
    <div className="card-ui p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Projects</h2>
        <button
          type="button"
          onClick={() =>
            addArrayItem("projects", {
              title: "",
              techStack: "",
              description: ""
            })
          }
          className="px-4 py-2 rounded-lg bg-blue-600 text-white"
        >
          Add
        </button>
      </div>

      <div className="space-y-4">
        {resumeData.projects.map((item, index) => (
          <div key={index} className="border rounded-2xl p-4">
            <div className="grid gap-4">
              <input
                type="text"
                placeholder="Project Title"
                value={item.title}
                onChange={(e) => updateArraySection("projects", index, "title", e.target.value)}
                className="px-4 py-3 border rounded-xl"
              />

              <input
                type="text"
                placeholder="Tech Stack"
                value={item.techStack}
                onChange={(e) => updateArraySection("projects", index, "techStack", e.target.value)}
                className="px-4 py-3 border rounded-xl"
              />

              <textarea
                placeholder="Project Description"
                value={item.description}
                onChange={(e) => updateArraySection("projects", index, "description", e.target.value)}
                className="px-4 py-3 border rounded-xl min-h-28"
              />
            </div>

            {resumeData.projects.length > 1 && (
              <button
                type="button"
                onClick={() => removeArrayItem("projects", index)}
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

export default ProjectsForm