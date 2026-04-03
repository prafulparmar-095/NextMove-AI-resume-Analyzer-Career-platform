import CareerSuggestion from "../models/CareerSuggestion.js"
import Analysis from "../models/Analysis.js"
import generateCareerSuggestions from "../services/careerService.js"
import { logActivity } from "../services/activityService.js"

function generateLearningRecommendations(missingSkills = []) {
  const courseMap = {
    react: {
      title: "React Full Course",
      platform: "YouTube",
      type: "Frontend Development",
      link: "https://www.youtube.com/results?search_query=react+full+course"
    },
    "node.js": {
      title: "Node.js Full Course",
      platform: "YouTube",
      type: "Backend Development",
      link: "https://www.youtube.com/results?search_query=nodejs+full+course"
    },
    mongodb: {
      title: "MongoDB Tutorial",
      platform: "YouTube",
      type: "Database",
      link: "https://www.youtube.com/results?search_query=mongodb+tutorial"
    },
    docker: {
      title: "Docker Tutorial for Beginners",
      platform: "YouTube",
      type: "DevOps",
      link: "https://www.youtube.com/results?search_query=docker+tutorial+for+beginners"
    },
    "system design": {
      title: "System Design Full Course",
      platform: "YouTube",
      type: "Architecture",
      link: "https://www.youtube.com/results?search_query=system+design+full+course"
    },
    express: {
      title: "Express.js Crash Course",
      platform: "YouTube",
      type: "Backend Development",
      link: "https://www.youtube.com/results?search_query=expressjs+crash+course"
    },
    javascript: {
      title: "JavaScript Full Course",
      platform: "YouTube",
      type: "Programming",
      link: "https://www.youtube.com/results?search_query=javascript+full+course"
    },
    api: {
      title: "REST API Tutorial",
      platform: "YouTube",
      type: "Backend Development",
      link: "https://www.youtube.com/results?search_query=rest+api+tutorial"
    }
  }

  if (!missingSkills.length) {
    return [
      {
        title: "Advanced DSA Course",
        platform: "YouTube",
        type: "Problem Solving",
        link: "https://www.youtube.com/results?search_query=advanced+dsa+course"
      },
      {
        title: "Advanced System Design",
        platform: "YouTube",
        type: "Architecture",
        link: "https://www.youtube.com/results?search_query=advanced+system+design"
      }
    ]
  }

  return missingSkills.map((skill) => {
    const key = skill.toLowerCase()

    return (
      courseMap[key] || {
        title: `${skill} Course`,
        platform: "YouTube",
        type: "Skill Development",
        link: `https://www.youtube.com/results?search_query=${encodeURIComponent(skill + " course")}`
      }
    )
  })
}

async function generateCareer(req, res, next) {
  try {
    const { analysisId } = req.body

    if (!analysisId) {
      return res.status(400).json({
        success: false,
        message: "Analysis ID is required"
      })
    }

    if (!req.user || !req.user._id) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized user"
      })
    }

    const analysis = await Analysis.findOne({
      _id: analysisId,
      userId: req.user._id
    })

    if (!analysis) {
      return res.status(404).json({
        success: false,
        message: "Analysis not found"
      })
    }

    const data = generateCareerSuggestions(analysis)

    const missingSkills = analysis.missingSkills || data.skillGap || []
    const learningRecommendations = generateLearningRecommendations(missingSkills)

    const existingCareer = await CareerSuggestion.findOne({
      userId: req.user._id,
      analysisId
    })

    if (existingCareer) {
      existingCareer.bestMatches = data.bestMatches || existingCareer.bestMatches
      existingCareer.skillGap = missingSkills
      existingCareer.learningRecommendations = learningRecommendations
      existingCareer.roadmap = data.roadmap || existingCareer.roadmap

      await existingCareer.save()

      return res.status(200).json({
        success: true,
        message: "Career suggestions fetched successfully",
        career: existingCareer
      })
    }

    const career = await CareerSuggestion.create({
      userId: req.user._id,
      analysisId,
      ...data,
      skillGap: missingSkills,
      learningRecommendations
    })

    await logActivity({
      userId: req.user._id,
      action: "Career suggestions generated",
      role: req.user.role || "user"
    })

    return res.status(200).json({
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
      return res.status(401).json({
        success: false,
        message: "Unauthorized user"
      })
    }

    const suggestions = await CareerSuggestion.find({
      userId: req.user._id
    })
      .populate("analysisId")
      .sort({ createdAt: -1 })

    return res.status(200).json({
      success: true,
      suggestions
    })
  } catch (error) {
    next(error)
  }
}

export { generateCareer, getMyCareerSuggestions }