import express from "express"
import { body } from "express-validator"
import { sendOtp, verifyOtp } from "../controllers/otpController.js"
import { validateRequest } from "../middleware/validationMiddleware.js"

const router = express.Router()

router.post(
  "/send",
  [body("email").isEmail().withMessage("Valid email required")],
  validateRequest,
  sendOtp
)

router.post(
  "/verify",
  [
    body("email").isEmail(),
    body("otp").isLength({ min: 4 })
  ],
  validateRequest,
  verifyOtp
)

export default router