import mongoose from "mongoose"

const activityLogSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null
    },
    action: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ["admin", "user", "guest"],
      default: "guest"
    },
    meta: {
      type: Object,
      default: {}
    }
  },
  {
    timestamps: true
  }
)

const ActivityLog = mongoose.model("ActivityLog", activityLogSchema)

export default ActivityLog