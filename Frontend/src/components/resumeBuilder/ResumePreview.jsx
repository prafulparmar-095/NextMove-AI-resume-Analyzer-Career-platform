import { useContext } from "react"
import { ResumeContext } from "../../context/ResumeContext"

function ResumePreview() {
  const { resumeData } = useContext(ResumeContext)
  const {
    personalDetails = {},
    education = [],
    skills = [],
    projects = [],
    experience = []
  } = resumeData

  function makeBulletPoints(text) {
    if (!text) return []

    return text
      .split("\n")
      .map((item) => item.trim())
      .filter((item) => item.length > 0)
  }

  const validEducation = education.filter(
    (item) =>
      item?.institution?.trim() ||
      item?.degree?.trim() ||
      item?.year?.trim() ||
      item?.score?.trim()
  )

  const validProjects = projects.filter(
    (item) =>
      item?.title?.trim() ||
      item?.techStack?.trim() ||
      item?.description?.trim()
  )

  const validExperience = experience.filter(
    (item) =>
      item?.role?.trim() ||
      item?.company?.trim() ||
      item?.duration?.trim() ||
      item?.description?.trim()
  )

  const validSkills = skills.filter((skill) => skill?.trim())

  return (
    <div
      id="resume-preview"
      className="w-[794px] min-h-[1123px] mx-auto bg-white text-black p-8 shadow-none rounded-none"
    >
      <div className="border-b border-gray-300 pb-4 mb-5">
        <h1 className="text-[22px] font-bold leading-tight">
          {personalDetails.fullName || "Your Name"}
        </h1>

        <div className="mt-2 text-[13px] text-gray-700 flex flex-wrap gap-x-2">
          {personalDetails.email && <span>{personalDetails.email}</span>}
          {personalDetails.phone && <span>| {personalDetails.phone}</span>}
          {personalDetails.city && <span>| {personalDetails.city}</span>}
        </div>

        <div className="mt-1 text-[13px] text-gray-700 flex flex-wrap gap-x-2">
          {personalDetails.linkedin && <span>{personalDetails.linkedin}</span>}
          {personalDetails.github && <span>| {personalDetails.github}</span>}
        </div>
      </div>

      {personalDetails.summary?.trim() && (
        <section className="mb-5">
          <h2 className="text-[15px] font-bold uppercase border-b border-gray-400 pb-1 mb-2">
            Summary
          </h2>
          <p className="text-[13px] leading-[1.5] text-gray-800">
            {personalDetails.summary}
          </p>
        </section>
      )}

      {validExperience.length > 0 && (
        <section className="mb-5">
          <h2 className="text-[15px] font-bold uppercase border-b border-gray-400 pb-1 mb-2">
            Experience
          </h2>

          <div className="space-y-4">
            {validExperience.map((item, index) => {
              const points = makeBulletPoints(item.description)

              return (
                <div key={index}>
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <p className="text-[14px] font-bold">
                        {item.company || ""}
                      </p>
                      <p className="text-[13px] italic text-gray-800">
                        {item.role || ""}
                      </p>
                    </div>

                    <div className="text-right text-[12px] text-gray-700 whitespace-nowrap">
                      <p>{item.duration || ""}</p>
                    </div>
                  </div>

                  {points.length > 0 ? (
                    <ul className="list-disc pl-5 mt-1 space-y-1 text-[12px] leading-[1.45] text-gray-800">
                      {points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  ) : item.description?.trim() ? (
                    <p className="text-[12px] mt-1 text-gray-800">
                      {item.description}
                    </p>
                  ) : null}
                </div>
              )
            })}
          </div>
        </section>
      )}

      {validProjects.length > 0 && (
        <section className="mb-5">
          <h2 className="text-[15px] font-bold uppercase border-b border-gray-400 pb-1 mb-2">
            Projects
          </h2>

          <div className="space-y-4">
            {validProjects.map((item, index) => {
              const points = makeBulletPoints(item.description)

              return (
                <div key={index}>
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <p className="text-[14px] font-bold">
                        {item.title || ""}
                      </p>
                      {item.techStack?.trim() && (
                        <p className="text-[12px] text-gray-700">
                          <span className="font-semibold">Tech Stack:</span>{" "}
                          {item.techStack}
                        </p>
                      )}
                    </div>
                  </div>

                  {points.length > 0 ? (
                    <ul className="list-disc pl-5 mt-1 space-y-1 text-[12px] leading-[1.45] text-gray-800">
                      {points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  ) : item.description?.trim() ? (
                    <p className="text-[12px] mt-1 text-gray-800">
                      {item.description}
                    </p>
                  ) : null}
                </div>
              )
            })}
          </div>
        </section>
      )}

      {validEducation.length > 0 && (
        <section className="mb-5">
          <h2 className="text-[15px] font-bold uppercase border-b border-gray-400 pb-1 mb-2">
            Education
          </h2>

          <div className="space-y-3">
            {validEducation.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <p className="text-[14px] font-bold">
                      {item.institution || ""}
                    </p>
                    <p className="text-[13px] italic text-gray-800">
                      {item.degree || ""}
                    </p>
                  </div>

                  <div className="text-right text-[12px] text-gray-700 whitespace-nowrap">
                    <p>{item.year || ""}</p>
                    <p>{item.score || ""}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {validSkills.length > 0 && (
        <section>
          <h2 className="text-[15px] font-bold uppercase border-b border-gray-400 pb-1 mb-2">
            Skills
          </h2>

          <p className="text-[13px] leading-[1.5] text-gray-800">
            <span className="font-semibold">Technical Skills:</span>{" "}
            {validSkills.join(", ")}
          </p>
        </section>
      )}
    </div>
  )
}

export default ResumePreview