import mongoose from "mongoose"

const uploadedResumeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null
    },
    fileName: {
      type: String,
      required: true
    },
    fileUrl: {
      type: String,
      required: true
    },
    extractedText: {
      type: String,
      default: ""
    }
  },
  {
    timestamps: true
  }
)

const UploadedResume = mongoose.model("UploadedResume", uploadedResumeSchema)

export default UploadedResume