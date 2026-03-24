import mongoose from "mongoose"

const analysisSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null
    },
    resumeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UploadedResume",
      required: true
    },
    extractedSkills: {
      type: [String],
      default: []
    },
    missingSkills: {
      type: [String],
      default: []
    },
    keywordsFound: {
      type: [String],
      default: []
    },
    atsScore: {
      type: Number,
      default: 0
    },
    suggestions: {
      type: [String],
      default: []
    },
    summary: {
      type: String,
      default: ""
    },
    predictedRoles: {
      type: [String],
      default: []
    },
    formattingTips: {
      type: [String],
      default: []
    }
  },
  {
    timestamps: true
  }
)

const Analysis = mongoose.model("Analysis", analysisSchema)

export default Analysis