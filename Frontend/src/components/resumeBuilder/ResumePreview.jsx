import { useContext } from "react"
import { ResumeContext } from "../../context/ResumeContext"

function ResumePreview() {
  const { resumeData } = useContext(ResumeContext)
  const { personalDetails, education, skills, projects, experience } = resumeData

  return (
    <div id="resume-preview" className="bg-white rounded-2xl shadow-lg p-8 min-h-[700px]">
      <div className="border-b pb-4 mb-6">
        <h1 className="text-3xl font-bold">{personalDetails.fullName || "Your Name"}</h1>
        <p className="text-gray-600 mt-2">
          {personalDetails.email} | {personalDetails.phone} | {personalDetails.city}
        </p>
        <p className="text-gray-600 mt-1">
          {personalDetails.linkedin} {personalDetails.github ? `| ${personalDetails.github}` : ""}
        </p>
      </div>

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2">Summary</h2>
        <p className="text-gray-700">{personalDetails.summary || "Your professional summary will appear here."}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2">Education</h2>
        <div className="space-y-3">
          {education.map((item, index) => (
            <div key={index}>
              <p className="font-semibold">{item.degree}</p>
              <p className="text-gray-700">{item.institution}</p>
              <p className="text-sm text-gray-500">{item.year} | {item.score}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span key={index} className="px-3 py-1 bg-slate-100 rounded-full text-sm">
              {skill || "Skill"}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2">Projects</h2>
        <div className="space-y-4">
          {projects.map((item, index) => (
            <div key={index}>
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-blue-600">{item.techStack}</p>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-2">Experience</h2>
        <div className="space-y-4">
          {experience.map((item, index) => (
            <div key={index}>
              <p className="font-semibold">{item.role} {item.company ? `- ${item.company}` : ""}</p>
              <p className="text-sm text-gray-500">{item.duration}</p>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ResumePreview