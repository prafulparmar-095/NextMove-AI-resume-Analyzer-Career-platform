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
      res.status(400)
      throw new Error("No file uploaded")
    }

    const filePath = req.file.path
    const fileName = req.file.filename

    let extractedText = ""

    if (fileName.toLowerCase().endsWith(".pdf")) {
      extractedText = await parsePdf(filePath)
    } else {
      extractedText = await parseDocx(filePath)
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

    res.json({
      success: true,
      message: "Resume uploaded successfully",
      resume
    })
  } catch (error) {
    next(error)
  }
}

async function analyzeResume(req, res, next) {
  try {
    const { resumeId } = req.body

    const resume = await UploadedResume.findById(resumeId)

    if (!resume) {
      res.status(404)
      throw new Error("Resume not found")
    }

    const text = resume.extractedText || ""
    const extractedSkills = extractSkills(text)

    const targetKeywords = ["react", "node.js", "mongodb", "javascript", "express", "api"]
    const keywordsFound = keywordMatcher(text, targetKeywords)

    const requiredSkills = ["react", "node.js", "mongodb", "javascript"]
    const missingSkills = requiredSkills.filter((skill) => !extractedSkills.includes(skill))

    const atsScore = calculateATSScore({
      extractedSkills,
      requiredSkills,
      keywordsFound
    })

    const predictedRoleData = predictRoles(extractedSkills)
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

    res.json({
      success: true,
      analysis
    })
  } catch (error) {
    next(error)
  }
}

async function getAnalysisHistory(req, res, next) {
  try {
    const history = await Analysis.find({ userId: req.user._id })
      .populate("resumeId", "fileName fileUrl")
      .sort({ createdAt: -1 })

    res.json({
      success: true,
      history
    })
  } catch (error) {
    next(error)
  }
}

async function getAnalysisById(req, res, next) {
  try {
    const analysis = await Analysis.findOne({
      _id: req.params.id,
      userId: req.user._id
    }).populate("resumeId", "fileName fileUrl")

    if (!analysis) {
      res.status(404)
      throw new Error("Analysis not found")
    }

    res.json({
      success: true,
      analysis
    })
  } catch (error) {
    next(error)
  }
}

export {
  uploadAndStoreResume,
  analyzeResume,
  getAnalysisHistory,
  getAnalysisById
}