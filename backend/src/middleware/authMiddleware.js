import jwt from "jsonwebtoken"
import User from "../models/User.js"

async function protect(req, res, next) {
  try {
    let token

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer ")
    ) {
      token = req.headers.authorization.split(" ")[1]
    }

    if (!token) {
      res.status(401)
      throw new Error("Not authorized, token missing")
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    const user = await User.findById(decoded.userId).select("-password")
    if (!user) {
      res.status(401)
      throw new Error("User not found")
    }

    req.user = user
    next()
  } catch (error) {
    res.status(401)
    next(error)
  }
}

export { protect }