import { useContext } from "react"
import { ResumeContext } from "../../context/ResumeContext"
import PersonalDetailsForm from "./PersonalDetailsForm"
import EducationForm from "./EducationForm"
import SkillsForm from "./SkillsForm"
import ProjectsForm from "./ProjectsForm"
import ExperienceForm from "./ExperienceForm"
import TemplateCard from "./TemplateCard"

function BuilderForm() {
  const { resumeData, setTemplate } = useContext(ResumeContext)

  return (
    <div className="space-y-8">
      <div className="card-ui p-6">
        <h2 className="text-2xl font-bold mb-4">Choose Template</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <TemplateCard
            name="Modern"
            selected={resumeData.template === "modern"}
            onClick={() => setTemplate("modern")}
          />
          <TemplateCard
            name="Classic"
            selected={resumeData.template === "classic"}
            onClick={() => setTemplate("classic")}
          />
          <TemplateCard
            name="Professional"
            selected={resumeData.template === "professional"}
            onClick={() => setTemplate("professional")}
          />
        </div>
      </div>

      <PersonalDetailsForm />
      <EducationForm />
      <SkillsForm />
      <ProjectsForm />
      <ExperienceForm />
    </div>
  )
}

export default BuilderForm