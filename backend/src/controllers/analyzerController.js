import UploadedResume from "../models/UploadedResume.js"
import Analysis from "../models/Analysis.js"
import parsePdf from "../utils/parsePdf.js"
import parseDocx from "../utils/parseDocx.js"
import extractSkills from "../utils/extractSkills.js"
import keywordMatcher from "../utils/keywordMatcher.js"
import calculateATSScore from "../utils/atsScoreCalculator.js"
import predictRoles from "../utils/rolePredictor.js"
import { logActivity } from "../services/activityService.js"

async function uploadAndStoreResume(req, res, next) {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded"
      })
    }

    const filePath = req.file.path
    const fileName = req.file.filename
    const originalName = req.file.originalname || fileName
    const lowerName = originalName.toLowerCase()

    let extractedText = ""

    if (lowerName.endsWith(".pdf")) {
      extractedText = await parsePdf(filePath)
    } else if (lowerName.endsWith(".docx")) {
      extractedText = await parseDocx(filePath)
    } else {
      return res.status(400).json({
        success: false,
        message: "Only PDF and DOCX files are supported"
      })
    }

    if (!extractedText || !extractedText.trim()) {
      return res.status(400).json({
        success: false,
        message: "Could not extract text from the uploaded file"
      })
    }

    const resume = await UploadedResume.create({
      userId: req.user?._id || null,
      fileName,
      fileUrl: `/uploads/resumes/${fileName}`,
      extractedText
    })

    await logActivity({
      userId: req.user?._id || null,
      action: "Resume uploaded for analysis",
      role: req.user?.role || "guest",
      meta: { fileName }
    })

    return res.status(201).json({
      success: true,
      message: "Resume uploaded successfully",
      resume
    })
  } catch (error) {
    console.error("uploadAndStoreResume error:", error)
    return next(error)
  }
}

async function analyzeResume(req, res, next) {
  try {
    const { resumeId } = req.body

    if (!resumeId) {
      return res.status(400).json({
        success: false,
        message: "resumeId is required"
      })
    }

    const resume = await UploadedResume.findById(resumeId)

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: "Resume not found"
      })
    }

    const text = resume.extractedText || ""
    const extractedSkills = extractSkills(text)

    const targetKeywords = [
      "react",
      "node.js",
      "mongodb",
      "javascript",
      "express",
      "api"
    ]

    const keywordsFound = keywordMatcher(text, targetKeywords)

    const requiredSkills = ["react", "node.js", "mongodb", "javascript"]

    const normalizedSkills = extractedSkills.map((skill) => skill.toLowerCase())

    const missingSkills = requiredSkills.filter(
      (skill) => !normalizedSkills.includes(skill.toLowerCase())
    )

    const atsScore = calculateATSScore({
      extractedSkills,
      requiredSkills,
      keywordsFound
    })

    const predictedRoleData = predictRoles(extractedSkills) || []
    const predictedRoles = predictedRoleData.slice(0, 3).map((item) => item.title)

    const suggestions = [
      "Add more role-specific keywords based on your target job",
      "Include measurable achievements in projects and experience",
      "Improve summary section with stronger professional language"
    ]

    const formattingTips = [
      "Use bullet points for projects and experience",
      "Keep headings and spacing consistent",
      "Try to keep resume length within 1 to 2 pages"
    ]

    const analysis = await Analysis.create({
      userId: req.user?._id || null,
      resumeId,
      extractedSkills,
      missingSkills,
      keywordsFound,
      atsScore,
      suggestions,
      formattingTips,
      predictedRoles,
      summary:
        "Your resume has a good foundation, but adding stronger keywords and quantified achievements can improve ATS performance."
    })

    await logActivity({
      userId: req.user?._id || null,
      action: "Resume analyzed",
      role: req.user?.role || "guest",
      meta: { resumeId, atsScore }
    })

    return res.json({
      success: true,
      analysis
    })
  } catch (error) {
    console.error("analyzeResume error:", error)
    return next(error)
  }
}

async function getAnalysisHistory(req, res, next) {
  try {
    const history = await Analysis.find({ userId: req.user._id })
      .populate("resumeId", "fileName fileUrl")
      .sort({ createdAt: -1 })

    return res.json({
      success: true,
      history
    })
  } catch (error) {
    console.error("getAnalysisHistory error:", error)
    return next(error)
  }
}

async function getAnalysisById(req, res, next) {
  try {
    const analysis = await Analysis.findOne({
      _id: req.params.id,
      userId: req.user._id
    }).populate("resumeId", "fileName fileUrl")

    if (!analysis) {
      return res.status(404).json({
        success: false,
        message: "Analysis not found"
      })
    }

    return res.json({
      success: true,
      analysis
    })
  } catch (error) {
    console.error("getAnalysisById error:", error)
    return next(error)
  }
}

export {
  uploadAndStoreResume,
  analyzeResume,
  getAnalysisHistory,
  getAnalysisById
}