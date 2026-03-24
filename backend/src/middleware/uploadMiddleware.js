import multer from "multer"
import path from "path"
import fs from "fs"

const uploadDir = "src/uploads/resumes"

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true })
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir)
  },
  filename: function (req, file, cb) {
    const uniqueName = `${Date.now()}-${file.originalname.replace(/\s+/g, "-")}`
    cb(null, uniqueName)
  }
})

function fileFilter(req, file, cb) {
  const allowedTypes = [".pdf", ".doc", ".docx"]
  const ext = path.extname(file.originalname).toLowerCase()

  if (allowedTypes.includes(ext)) {
    cb(null, true)
  } else {
    cb(new Error("Only PDF, DOC, and DOCX files are allowed"))
  }
}

const uploadResume = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024
  },
  fileFilter
})

export default uploadResume