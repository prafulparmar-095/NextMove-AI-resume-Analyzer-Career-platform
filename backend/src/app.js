import express from "express"
import cors from "cors"
import authRoutes from "./routes/authRoutes.js"
import otpRoutes from "./routes/otpRoutes.js"
import resumeRoutes from "./routes/resumeRoutes.js"
import analyzerRoutes from "./routes/analyzerRoutes.js"
import careerRoutes from "./routes/careerRoutes.js"
import dashboardRoutes from "./routes/dashboardRoutes.js"
import adminRoutes from "./routes/adminRoutes.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/uploads", express.static("src/uploads"))

app.use("/api/auth", authRoutes)
app.use("/api/otp", otpRoutes)
app.use("/api/resume", resumeRoutes)
app.use("/api/analyzer", analyzerRoutes)
app.use("/api/career", careerRoutes)
app.use("/api/dashboard", dashboardRoutes)
app.use("/api/admin", adminRoutes)

export default app