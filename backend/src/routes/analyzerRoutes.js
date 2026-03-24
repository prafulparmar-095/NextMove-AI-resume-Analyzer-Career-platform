import express from "express"
import { protect } from "../middleware/authMiddleware.js"
import uploadResume from "../middleware/uploadMiddleware.js"
import {
  uploadAndStoreResume,
  analyzeResume,
  getAnalysisHistory,
  getAnalysisById
} from "../controllers/analyzerController.js"

const router = express.Router()

router.post("/upload", uploadResume.single("resume"), uploadAndStoreResume)
router.post("/analyze", analyzeResume)
router.get("/history", protect, getAnalysisHistory)
router.get("/:id", protect, getAnalysisById)

export default router