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

    res.json({
      success: true,
      stats: {
        totalUsers,
        guestVisits,
        uploadedResumes,
        createdResumes,
        atsAnalyses,
        careerUsage
      }
    })
  } catch (error) {
    next(error)
  }
}

async function getAdminUsers(req, res, next) {
  try {
    const users = await User.find().select("-password").sort({ createdAt: -1 })

    res.json({
      success: true,
      users
    })
  } catch (error) {
    next(error)
  }
}

async function getAdminResumes(req, res, next) {
  try {
    const uploadedResumes = await UploadedResume.find().sort({ createdAt: -1 })
    const builtResumes = await BuiltResume.find().sort({ createdAt: -1 })

    res.json({
      success: true,
      uploadedResumes,
      builtResumes
    })
  } catch (error) {
    next(error)
  }
}

async function getAdminActivities(req, res, next) {
  try {
    const activities = await ActivityLog.find().sort({ createdAt: -1 }).limit(50)

    res.json({
      success: true,
      activities
    })
  } catch (error) {
    next(error)
  }
}

export {
  getAdminStats,
  getAdminUsers,
  getAdminResumes,
  getAdminActivities
}