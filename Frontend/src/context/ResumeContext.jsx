import { createContext, useState } from "react"

export const ResumeContext = createContext()

const initialResume = {
  personalDetails: {
    fullName: "",
    email: "",
    phone: "",
    city: "",
    linkedin: "",
    github: "",
    summary: ""
  },
  education: [
    {
      degree: "",
      institution: "",
      year: "",
      score: ""
    }
  ],
  skills: [""],
  projects: [
    {
      title: "",
      techStack: "",
      description: ""
    }
  ],
  experience: [
    {
      company: "",
      role: "",
      duration: "",
      description: ""
    }
  ],
  template: "modern"
}

export function ResumeProvider({ children }) {
  const [resumeData, setResumeData] = useState(initialResume)

  function updatePersonalDetails(field, value) {
    setResumeData((prev) => ({
      ...prev,
      personalDetails: {
        ...prev.personalDetails,
        [field]: value
      }
    }))
  }

  function updateArraySection(section, index, field, value) {
    setResumeData((prev) => {
      const updated = [...prev[section]]
      if (typeof updated[index] === "string") {
        updated[index] = value
      } else {
        updated[index] = {
          ...updated[index],
          [field]: value
        }
      }

      return {
        ...prev,
        [section]: updated
      }
    })
  }

  function addArrayItem(section, newItem) {
    setResumeData((prev) => ({
      ...prev,
      [section]: [...prev[section], newItem]
    }))
  }

  function removeArrayItem(section, index) {
    setResumeData((prev) => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index)
    }))
  }

  function setTemplate(template) {
    setResumeData((prev) => ({
      ...prev,
      template
    }))
  }

  function resetResume() {
    setResumeData(initialResume)
  }

  return (
    <ResumeContext.Provider
      value={{
        resumeData,
        setResumeData,
        updatePersonalDetails,
        updateArraySection,
        addArrayItem,
        removeArrayItem,
        setTemplate,
        resetResume
      }}
    >
      {children}
    </ResumeContext.Provider>
  )
}