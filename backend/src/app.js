import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

import authRoutes from "./routes/authRoutes.js"
import otpRoutes from "./routes/otpRoutes.js"
import resumeRoutes from "./routes/resumeRoutes.js"
import analyzerRoutes from "./routes/analyzerRoutes.js"
import careerRoutes from "./routes/careerRoutes.js"
import dashboardRoutes from "./routes/dashboardRoutes.js"
import adminRoutes from "./routes/adminRoutes.js"

import { notFoundHandler, errorHandler } from "./middleware/errorMiddleware.js"

const app = express()

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174"
]

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true)
      } else {
        callback(new Error("Not allowed by CORS"))
      }
    },
    credentials: true
  })
)

app.use(express.json({ limit: "10mb" }))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use("/uploads", express.static("src/uploads"))

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "NextMove backend API is running"
  })
})

app.use("/api/auth", authRoutes)
app.use("/api/otp", otpRoutes)
app.use("/api/resume", resumeRoutes)
app.use("/api/analyzer", analyzerRoutes)
app.use("/api/career", careerRoutes)
app.use("/api/dashboard", dashboardRoutes)
app.use("/api/admin", adminRoutes)

app.use(notFoundHandler)
app.use(errorHandler)

export default app