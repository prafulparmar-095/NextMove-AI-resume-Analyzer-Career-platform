import Navbar from "../components/common/Navbar"
import Footer from "../components/common/Footer"
import AdminStats from "../components/admin/AdminStats"
import UserTable from "../components/admin/UserTable"
import ResumeTable from "../components/admin/ResumeTable"
import ActivityLogs from "../components/admin/ActivityLogs"

function AdminDashboard() {
  const stats = {
    totalUsers: 120,
    guestVisits: 340,
    uploadedResumes: 210,
    createdResumes: 95,
    atsAnalyses: 260,
    careerUsage: 180
  }

  const users = [
    {
      name: "Praful Parmar",
      email: "praful@example.com",
      role: "user",
      joinedAt: "12 Mar 2026"
    },
    {
      name: "Admin User",
      email: "admin@nextmove.com",
      role: "admin",
      joinedAt: "10 Mar 2026"
    }
  ]

  const resumes = [
    {
      title: "MERN_Developer_Resume.pdf",
      user: "Praful Parmar",
      type: "Uploaded",
      date: "17 Mar 2026"
    },
    {
      title: "NextMove Builder Resume",
      user: "Rahul Shah",
      type: "Created",
      date: "16 Mar 2026"
    }
  ]

  const logs = [
    { action: "New user registered", time: "Today, 9:15 AM", role: "user" },
    { action: "Resume analysis generated", time: "Today, 10:10 AM", role: "user" },
    { action: "Admin viewed dashboard stats", time: "Today, 10:45 AM", role: "admin" }
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="container-custom px-4 py-16 space-y-6">
        <AdminStats stats={stats} />
        <UserTable users={users} />
        <ResumeTable resumes={resumes} />
        <ActivityLogs logs={logs} />
      </div>
      <Footer />
    </div>
  )
}

export default AdminDashboard