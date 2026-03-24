import express from "express"
import { protect } from "../middleware/authMiddleware.js"
import {
  generateCareer,
  getMyCareerSuggestions
} from "../controllers/careerController.js"

const router = express.Router()

router.post("/generate", protect, generateCareer)
router.get("/my-suggestions", protect, getMyCareerSuggestions)

export default router