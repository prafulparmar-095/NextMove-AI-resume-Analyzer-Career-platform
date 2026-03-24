import User from "../models/User.js"
import generateToken from "../utils/generateToken.js"
import { createAndSendOtp, verifyStoredOtp } from "../services/otpService.js"

async function sendOtp(req, res, next) {
  try {
    const { email } = req.body

    await createAndSendOtp(email)

    res.json({
      success: true,
      message: "OTP sent successfully"
    })
  } catch (error) {
    next(error)
  }
}

async function verifyOtp(req, res, next) {
  try {
    const { email, otp } = req.body

    const result = await verifyStoredOtp(email, otp)

    if (!result.valid) {
      res.status(400)
      throw new Error(result.message)
    }

    let user = await User.findOne({ email })

    if (!user) {
      user = await User.create({
        name: email.split("@")[0],
        email,
        password: "otp_login_user"
      })
    }

    const token = generateToken(user._id, user.role)

    res.json({
      success: true,
      user,
      token
    })
  } catch (error) {
    next(error)
  }
}

export { sendOtp, verifyOtp }