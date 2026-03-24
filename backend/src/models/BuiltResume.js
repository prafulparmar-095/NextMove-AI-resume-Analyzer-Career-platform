import mongoose from "mongoose"

const builtResumeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    personalDetails: {
      fullName: String,
      email: String,
      phone: String,
      city: String,
      linkedin: String,
      github: String,
      summary: String
    },
    education: [
      {
        degree: String,
        institution: String,
        year: String,
        score: String
      }
    ],
    skills: [String],
    projects: [
      {
        title: String,
        techStack: String,
        description: String
      }
    ],
    experience: [
      {
        company: String,
        role: String,
        duration: String,
        description: String
      }
    ],
    template: {
      type: String,
      default: "modern"
    }
  },
  {
    timestamps: true
  }
)

const BuiltResume = mongoose.model("BuiltResume", builtResumeSchema)

export default BuiltResume