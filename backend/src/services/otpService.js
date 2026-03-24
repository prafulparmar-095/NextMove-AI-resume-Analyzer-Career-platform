import Otp from "../models/Otp.js"
import generateOtp from "../utils/generateOtp.js"
import { sendMail } from "./mailService.js"

async function createAndSendOtp(email) {
  await Otp.deleteMany({ email })

  const otp = generateOtp()
  const expiresAt = new Date(Date.now() + 10 * 60 * 1000)

  await Otp.create({
    email,
    otp,
    expiresAt
  })

  await sendMail({
    to: email,
    subject: "NextMove OTP Verification",
    text: `Your OTP for NextMove login is ${otp}. It will expire in 10 minutes.`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
        <h2>NextMove OTP Verification</h2>
        <p>Your OTP is:</p>
        <h1 style="letter-spacing: 4px;">${otp}</h1>
        <p>This OTP will expire in 10 minutes.</p>
      </div>
    `
  })

  return otp
}

async function verifyStoredOtp(email, otp) {
  const existingOtp = await Otp.findOne({ email, otp })

  if (!existingOtp) {
    return { valid: false, message: "Invalid OTP" }
  }

  if (existingOtp.expiresAt < new Date()) {
    await Otp.deleteOne({ _id: existingOtp._id })
    return { valid: false, message: "OTP expired" }
  }

  await Otp.deleteOne({ _id: existingOtp._id })

  return { valid: true, message: "OTP verified" }
}

export { createAndSendOtp, verifyStoredOtp }