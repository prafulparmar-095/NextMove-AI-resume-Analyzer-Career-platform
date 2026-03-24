import UploadedResume from "../models/UploadedResume.js"
import BuiltResume from "../models/BuiltResume.js"
import parsePdf from "../utils/parsePdf.js"
import parseDocx from "../utils/parseDocx.js"
import { logActivity } from "../services/activityService.js"

async function uploadResumeFile(req, res, next) {
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
      action: "Resume uploaded",
      role: req.user?.role || "guest",
      meta: { fileName }
    })

    res.json({
      success: true,
      resume
    })
  } catch (error) {
    next(error)
  }
}

async function createBuiltResume(req, res, next) {
  try {
    const builtResume = await BuiltResume.create({
      userId: req.user._id,
      ...req.body
    })

    await logActivity({
      userId: req.user._id,
      action: "Built resume created",
      role: req.user.role
    })

    res.status(201).json({
      success: true,
      resume: builtResume
    })
  } catch (error) {
    next(error)
  }
}

async function getMyCreatedResumes(req, res, next) {
  try {
    const resumes = await BuiltResume.find({ userId: req.user._id }).sort({ createdAt: -1 })

    res.json({
      success: true,
      resumes
    })
  } catch (error) {
    next(error)
  }
}

async function getResumeById(req, res, next) {
  try {
    const resume = await BuiltResume.findOne({
      _id: req.params.id,
      userId: req.user._id
    })

    if (!resume) {
      res.status(404)
      throw new Error("Resume not found")
    }

    res.json({
      success: true,
      resume
    })
  } catch (error) {
    next(error)
  }
}

async function deleteResume(req, res, next) {
  try {
    const resume = await BuiltResume.findOne({
      _id: req.params.id,
      userId: req.user._id
    })

    if (!resume) {
      res.status(404)
      throw new Error("Resume not found")
    }

    await resume.deleteOne()

    res.json({
      success: true,
      message: "Resume deleted successfully"
    })
  } catch (error) {
    next(error)
  }
}

export {
  uploadResumeFile,
  createBuiltResume,
  getMyCreatedResumes,
  getResumeById,
  deleteResume
}