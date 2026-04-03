import { useContext, useMemo, useState } from "react"
import { ResumeContext } from "../../context/ResumeContext"

const degreeOptions = [
  "10th",
  "12th",
  "Bachelor of Arts (BA)",
  "Master of Arts (MA)",
  "Bachelor of Science (BSc)",
  "Master of Science (MSc)",
  "BSc IT",
  "MSc IT",
  "Bachelor of Computer Applications (BCA)",
  "Master of Computer Applications (MCA)",
  "Bachelor of Business Administration (BBA)",
  "Master of Business Administration (MBA)",
  "Bachelor of Technology (B.Tech)",
  "Master of Technology (M.Tech)",
  "Bachelor of Commerce (B.Com)",
  "Master of Commerce (M.Com)"
]

function EducationForm() {
  const { resumeData, updateArraySection, addArrayItem, removeArrayItem } =
    useContext(ResumeContext)

  const [activeIndex, setActiveIndex] = useState(null)

  const suggestions = useMemo(() => {
    if (activeIndex === null) return []

    const currentValue = resumeData.education[activeIndex]?.degree || ""
    if (!currentValue.trim()) return degreeOptions

    return degreeOptions.filter((degree) =>
      degree.toLowerCase().includes(currentValue.toLowerCase())
    )
  }, [activeIndex, resumeData.education])

  function handleDegreeChange(index, value) {
    updateArraySection("education", index, "degree", value)
    setActiveIndex(index)
  }

  function handleSuggestionClick(index, degree) {
    updateArraySection("education", index, "degree", degree)
    setActiveIndex(null)
  }

  return (
    <div className="card-ui p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold">Education</h2>
          <p className="text-sm text-gray-500 mt-1">
            </p>
        </div>

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

      <div className="space-y-4 max-h-[420px] overflow-y-auto pr-2">
        {resumeData.education.map((item, index) => (
          <div key={index} className="border rounded-2xl p-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Degree"
                  value={item.degree}
                  onFocus={() => setActiveIndex(index)}
                  onChange={(e) => handleDegreeChange(index, e.target.value)}
                  className="w-full px-4 py-3 border rounded-xl"
                />

                {activeIndex === index && suggestions.length > 0 && (
                  <div className="absolute left-0 right-0 top-full mt-1 bg-white border rounded-xl shadow-lg z-20 max-h-48 overflow-y-auto">
                    {suggestions.map((degree, i) => (
                      <button
                        key={i}
                        type="button"
                        onMouseDown={() => handleSuggestionClick(index, degree)}
                        className="w-full text-left px-4 py-2 hover:bg-slate-100 text-sm"
                      >
                        {degree}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <input
                type="text"
                placeholder="Institution"
                value={item.institution}
                onChange={(e) =>
                  updateArraySection("education", index, "institution", e.target.value)
                }
                className="px-4 py-3 border rounded-xl"
              />

              <input
                type="text"
                placeholder="Year"
                value={item.year}
                onChange={(e) =>
                  updateArraySection("education", index, "year", e.target.value)
                }
                className="px-4 py-3 border rounded-xl"
              />

              <input
                type="text"
                placeholder="CGPA / Percentage"
                value={item.score}
                onChange={(e) =>
                  updateArraySection("education", index, "score", e.target.value)
                }
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