import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import OtpLogin from "../pages/OtpLogin"
import ForgotPassword from "../pages/ForgotPassword"
import ResumeBuilderPage from "../pages/ResumeBuilderPage"
import ResumeAnalyzerPage from "../pages/ResumeAnalyzerPage"
import CareerPage from "../pages/CareerPage"
import Dashboard from "../pages/Dashboard"
import AdminDashboard from "../pages/AdminDashboard"
import Profile from "../pages/Profile"
import NotFound from "../pages/NotFound"
import Unauthorized from "../pages/Unauthorized"
import ProtectedRoute from "../components/common/ProtectedRoute"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/otp-login" element={<OtpLogin />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/resume-builder" element={<ResumeBuilderPage />} />
      <Route path="/resume-analyzer" element={<ResumeAnalyzerPage />} />

      <Route
        path="/career"
        element={
          <ProtectedRoute>
            <CareerPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin"
        element={
          <ProtectedRoute adminOnly={true}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes