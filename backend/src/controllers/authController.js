import User from "../models/User.js"
import generateToken from "../utils/generateToken.js"
import { logActivity } from "../services/activityService.js"

async function registerUser(req, res, next) {
  try {
    const { name, email, password, role } = req.body

    const existingUser = await User.findOne({ email })
    if (existingUser) {
      res.status(400)
      throw new Error("User already exists")
    }

    const user = await User.create({
      name,
      email,
      password,
      role: role || "user"
    })

    const token = generateToken(user._id, user.role)

    await logActivity({
      userId: user._id,
      action: "User registered",
      role: user.role
    })

    res.status(201).json({
      success: true,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      },
      token
    })
  } catch (error) {
    next(error)
  }
}

async function loginUser(req, res, next) {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (!user || !(await user.matchPassword(password))) {
      res.status(401)
      throw new Error("Invalid credentials")
    }

    const token = generateToken(user._id, user.role)

    await logActivity({
      userId: user._id,
      action: "User logged in",
      role: user.role
    })

    res.json({
      success: true,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      },
      token
    })
  } catch (error) {
    next(error)
  }
}

function logoutUser(req, res) {
  res.json({
    success: true,
    message: "Logged out successfully"
  })
}

async function forgotPassword(req, res, next) {
  try {
    res.json({
      success: true,
      message: "Forgot password feature coming soon"
    })
  } catch (error) {
    next(error)
  }
}

export { registerUser, loginUser, logoutUser, forgotPassword }