import { useContext, useMemo, useState } from "react"
import { ResumeContext } from "../../context/ResumeContext"

const skillOptions = [
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Python",
  "Java",
  "C++",
  "TypeScript",
  "Redux",
  "Next.js",
  "Tailwind CSS",
  "Bootstrap",
  "REST API",
  "Git",
  "GitHub",
  "Docker",
  "System Design",
  "Firebase",
  "Mongoose",
  "JWT",
  "Problem Solving",
  "DSA"
]

function SkillsForm() {
  const { resumeData, updateArraySection, addArrayItem, removeArrayItem } =
    useContext(ResumeContext)

  const [activeIndex, setActiveIndex] = useState(null)

  const suggestions = useMemo(() => {
    if (activeIndex === null) return []

    const currentValue = resumeData.skills[activeIndex] || ""
    if (!currentValue.trim()) return []

    const selectedSkills = resumeData.skills
      .map((skill) => skill?.toLowerCase().trim())
      .filter(Boolean)

    return skillOptions.filter((skill) => {
      const lowerSkill = skill.toLowerCase()
      const lowerValue = currentValue.toLowerCase().trim()

      return (
        lowerSkill.includes(lowerValue) &&
        !selectedSkills.includes(lowerSkill)
      )
    })
  }, [activeIndex, resumeData.skills])

  function handleInputChange(index, value) {
    updateArraySection("skills", index, null, value)
    setActiveIndex(index)
  }

  function handleSuggestionClick(index, skill) {
    updateArraySection("skills", index, null, skill)
    setActiveIndex(null)
  }

  function handleAddSkill() {
    addArrayItem("skills", "")
    setActiveIndex(resumeData.skills.length)
  }

  return (
    <div className="card-ui p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Skills</h2>
        <button
          type="button"
          onClick={handleAddSkill}
          className="px-4 py-2 rounded-lg bg-blue-600 text-white"
        >
          Add
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {resumeData.skills.map((skill, index) => (
          <div key={index} className="relative flex gap-2">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Enter skill"
                value={skill}
                onFocus={() => setActiveIndex(index)}
                onChange={(e) => handleInputChange(index, e.target.value)}
                className="w-full px-4 py-3 border rounded-xl"
              />

              {activeIndex === index && suggestions.length > 0 && (
                <div className="absolute left-0 right-0 top-full mt-1 bg-white border rounded-xl shadow-lg z-20 max-h-44 overflow-y-auto">
                  {suggestions.map((item, i) => (
                    <button
                      key={i}
                      type="button"
                      onMouseDown={() => handleSuggestionClick(index, item)}
                      className="w-full text-left px-4 py-2 hover:bg-slate-100 text-sm"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>

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