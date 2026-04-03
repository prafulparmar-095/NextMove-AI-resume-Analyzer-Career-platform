import { useContext } from "react"
import { ResumeContext } from "../../context/ResumeContext"
import PersonalDetailsForm from "./PersonalDetailsForm"
import EducationForm from "./EducationForm"
import SkillsForm from "./SkillsForm"
import ProjectsForm from "./ProjectsForm"
import ExperienceForm from "./ExperienceForm"

function BuilderForm() {
  const { resumeData } = useContext(ResumeContext)

  return (
    <div className="space-y-8">
      <div className="card-ui p-6">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div>
            <h2 className="text-2xl font-bold">ATS Resume Builder</h2>
            <p className="text-sm text-gray-600 mt-1">
              Build a clean, single-template ATS-friendly resume.
            </p>
          </div>

          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-100 text-green-700">
            ATS Optimized
          </span>
        </div>
      </div>

      <PersonalDetailsForm />
      <EducationForm />
      <SkillsForm />
      <ProjectsForm />

      <div className="card-ui p-6">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
          <div>
            <h2 className="text-xl font-bold">Experience</h2>
            <p className="text-sm text-gray-500">
              Optional for freshers. Leave it blank if you do not have work experience.
            </p>
          </div>

          <span className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 text-slate-700">
            Optional
          </span>
        </div>

        <ExperienceForm />
      </div>
    </div>
  )
}

export default BuilderForm