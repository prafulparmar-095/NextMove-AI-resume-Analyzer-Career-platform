import express from "express"
import { protect } from "../middleware/authMiddleware.js"
import {
  createBuiltResume,
  getMyCreatedResumes,
  getResumeById,
  deleteResume
} from "../controllers/resumeController.js"

const router = express.Router()

router.post("/build", protect, createBuiltResume)
router.get("/my-created", protect, getMyCreatedResumes)
router.get("/:id", protect, getResumeById)
router.delete("/:id", protect, deleteResume)

export default router