import express from "express"
import { protect } from "../middleware/authMiddleware.js"
import { allowRoles } from "../middleware/roleMiddleware.js"
import { getAdminStats } from "../controllers/adminController.js"

const router = express.Router()

router.get("/stats", protect, allowRoles("admin"), getAdminStats)
router.get("/users", protect, allowRoles("admin"), getAdminStats)
router.get("/resumes", protect, allowRoles("admin"), getAdminStats)
router.get("/activities", protect, allowRoles("admin"), getAdminStats)

export default router