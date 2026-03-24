import express from "express"
import { protect } from "../middleware/authMiddleware.js"
import {
  uploadResumeFile,
  createBuiltResume,
  getMyCreatedResumes,
  getResumeById,
  deleteResume
} from "../controllers/resumeController.js"
import uploadResume from "../middleware/uploadMiddleware.js"

const router = express.Router()

router.post("/upload", uploadResume.single("resume"), uploadResumeFile)
router.post("/build", protect, createBuiltResume)
router.get("/my-created", protect, getMyCreatedResumes)
router.get("/:id", protect, getResumeById)
router.delete("/:id", protect, deleteResume)

export default router