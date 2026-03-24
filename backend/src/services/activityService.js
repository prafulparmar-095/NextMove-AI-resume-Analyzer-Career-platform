import ActivityLog from "../models/ActivityLog.js"

async function logActivity({ userId = null, action, role = "guest", meta = {} }) {
  try {
    await ActivityLog.create({
      userId,
      action,
      role,
      meta
    })
  } catch (error) {
    console.error("Activity log error:", error.message)
  }
}

export { logActivity }