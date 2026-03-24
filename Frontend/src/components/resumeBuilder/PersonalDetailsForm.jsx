import { useContext } from "react"
import { ResumeContext } from "../../context/ResumeContext"

function PersonalDetailsForm() {
  const { resumeData, updatePersonalDetails } = useContext(ResumeContext)
  const details = resumeData.personalDetails

  return (
    <div className="card-ui p-6">
      <h2 className="text-2xl font-bold mb-4">Personal Details</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Full Name"
          value={details.fullName}
          onChange={(e) => updatePersonalDetails("fullName", e.target.value)}
          className="px-4 py-3 border rounded-xl"
        />

        <input
          type="email"
          placeholder="Email"
          value={details.email}
          onChange={(e) => updatePersonalDetails("email", e.target.value)}
          className="px-4 py-3 border rounded-xl"
        />

        <input
          type="text"
          placeholder="Phone"
          value={details.phone}
          onChange={(e) => updatePersonalDetails("phone", e.target.value)}
          className="px-4 py-3 border rounded-xl"
        />

        <input
          type="text"
          placeholder="City"
          value={details.city}
          onChange={(e) => updatePersonalDetails("city", e.target.value)}
          className="px-4 py-3 border rounded-xl"
        />

        <input
          type="text"
          placeholder="LinkedIn URL"
          value={details.linkedin}
          onChange={(e) => updatePersonalDetails("linkedin", e.target.value)}
          className="px-4 py-3 border rounded-xl"
        />

        <input
          type="text"
          placeholder="GitHub URL"
          value={details.github}
          onChange={(e) => updatePersonalDetails("github", e.target.value)}
          className="px-4 py-3 border rounded-xl"
        />
      </div>

      <textarea
        placeholder="Professional Summary"
        value={details.summary}
        onChange={(e) => updatePersonalDetails("summary", e.target.value)}
        className="w-full mt-4 px-4 py-3 border rounded-xl min-h-32"
      />
    </div>
  )
}

export default PersonalDetailsForm