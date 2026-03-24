import UploadedResume from "../models/UploadedResume.js"
import BuiltResume from "../models/BuiltResume.js"
import Analysis from "../models/Analysis.js"
import CareerSuggestion from "../models/CareerSuggestion.js"
import ActivityLog from "../models/ActivityLog.js"

async function getDashboardData(req, res, next) {
  try {
    const userId = req.user._id

    const uploadedResumes = await UploadedResume.countDocuments({ userId })
    const createdResumes = await BuiltResume.countDocuments({ userId })
    const atsAnalyses = await Analysis.countDocuments({ userId })
    const careerSuggestions = await CareerSuggestion.countDocuments({ userId })

    const recentActivities = await ActivityLog.find({ userId })
      .sort({ createdAt: -1 })
      .limit(5)

    res.json({
      success: true,
      stats: {
        uploadedResumes,
        createdResumes,
        atsAnalyses,
        careerSuggestions
      },
      recentActivities
    })
  } catch (error) {
    next(error)
  }
}

export { getDashboardData }