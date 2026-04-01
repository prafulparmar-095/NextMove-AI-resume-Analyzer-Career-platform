import CareerSuggestion from "../models/CareerSuggestion.js"
import Analysis from "../models/Analysis.js"
import generateCareerSuggestions from "../services/careerService.js"
import { logActivity } from "../services/activityService.js"

async function generateCareer(req, res, next) {
  try {
    const { analysisId } = req.body

    if (!analysisId) {
      res.status(400)
      throw new Error("Analysis ID is required")
    }

    if (!req.user || !req.user._id) {
      res.status(401)
      throw new Error("Unauthorized user")
    }

    const analysis = await Analysis.findOne({
      _id: analysisId,
      userId: req.user._id
    })

    if (!analysis) {
      res.status(404)
      throw new Error("Analysis not found")
    }

    const data = generateCareerSuggestions(analysis)

    const career = await CareerSuggestion.create({
      userId: req.user._id,
      analysisId,
      ...data
    })

    await logActivity({
      userId: req.user._id,
      action: "Career suggestions generated",
      role: req.user.role || "user"
    })

    res.status(200).json({
      success: true,
      message: "Career suggestions generated successfully",
      career
    })
  } catch (error) {
    next(error)
  }
}

async function getMyCareerSuggestions(req, res, next) {
  try {
    if (!req.user || !req.user._id) {
      res.status(401)
      throw new Error("Unauthorized user")
    }

    const suggestions = await CareerSuggestion.find({
      userId: req.user._id
    })
      .populate("analysisId")
      .sort({ createdAt: -1 })

    res.status(200).json({
      success: true,
      suggestions
    })
  } catch (error) {
    next(error)
  }
}

export { generateCareer, getMyCareerSuggestions }