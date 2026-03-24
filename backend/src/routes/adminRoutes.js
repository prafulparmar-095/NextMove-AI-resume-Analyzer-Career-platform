import express from "express"
import { protect } from "../middleware/authMiddleware.js"
import { allowRoles } from "../middleware/roleMiddleware.js"
import {
  getAdminStats,
  getAdminUsers,
  getAdminResumes,
  getAdminActivities
} from "../controllers/adminController.js"

const router = express.Router()

router.get("/stats", protect, allowRoles("admin"), getAdminStats)
router.get("/users", protect, allowRoles("admin"), getAdminUsers)
router.get("/resumes", protect, allowRoles("admin"), getAdminResumes)
router.get("/activities", protect, allowRoles("admin"), getAdminActivities)

export default router