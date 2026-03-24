import mongoose from "mongoose"

const careerSuggestionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null
    },
    analysisId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Analysis",
      required: true
    },
    bestRoles: [
      {
        title: String,
        description: String,
        matchPercentage: Number
      }
    ],
    skillGap: {
      type: [String],
      default: []
    },
    roadmap: {
      type: [String],
      default: []
    },
    learningResources: [
      {
        title: String,
        platform: String,
        url: String
      }
    ]
  },
  {
    timestamps: true
  }
)

const CareerSuggestion = mongoose.model("CareerSuggestion", careerSuggestionSchema)

export default CareerSuggestion