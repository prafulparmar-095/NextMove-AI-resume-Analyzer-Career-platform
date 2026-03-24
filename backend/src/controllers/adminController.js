import User from "../models/User.js"
import UploadedResume from "../models/UploadedResume.js"
import BuiltResume from "../models/BuiltResume.js"
import Analysis from "../models/Analysis.js"
import CareerSuggestion from "../models/CareerSuggestion.js"
import ActivityLog from "../models/ActivityLog.js"

async function getAdminStats(req, res, next) {
  try {
    const totalUsers = await User.countDocuments()
    const uploadedResumes = await UploadedResume.countDocuments()
    const createdResumes = await BuiltResume.countDocuments()
    const atsAnalyses = await Analysis.countDocuments()
    const careerUsage = await CareerSuggestion.countDocuments()
    const guestVisits = await ActivityLog.countDocuments({ role: "guest" })

    const recentActivities = await ActivityLog.find()
      .sort({ createdAt: -1 })
      .limit(10)

    const users = await User.find().select("-password").sort({ createdAt: -1 }).limit(20)
    const resumes = await UploadedResume.find().sort({ createdAt: -1 }).limit(20)

    res.json({
      success: true,
      stats: {
        totalUsers,
        guestVisits,
        uploadedResumes,
        createdResumes,
        atsAnalyses,
        careerUsage
      },
      recentActivities,
      users,
      resumes
    })
  } catch (error) {
    next(error)
  }
}

export { getAdminStats }