import Navbar from "../components/common/Navbar"
import Footer from "../components/common/Footer"
import UserStats from "../components/dashboard/UserStats"
import RecentActivities from "../components/dashboard/RecentActivities"
import ResumeList from "../components/dashboard/ResumeList"
import AnalysisHistoryCard from "../components/analyzer/AnalysisHistoryCard"

function Dashboard() {
  const stats = {
    uploadedResumes: 4,
    createdResumes: 2,
    atsAnalyses: 5,
    careerSuggestions: 3
  }

  const activities = [
    { action: "Uploaded a resume for analysis", time: "Today, 10:30 AM", type: "Upload" },
    { action: "Generated ATS analysis report", time: "Today, 11:00 AM", type: "Analysis" },
    { action: "Created a new resume in builder", time: "Yesterday, 6:20 PM", type: "Builder" }
  ]

  const resumes = [
    { title: "Praful Resume", updatedAt: "17 Mar 2026", type: "Built Resume" },
    { title: "Software_Engineer_Resume.pdf", updatedAt: "16 Mar 2026", type: "Uploaded Resume" }
  ]

  const history = [
    { fileName: "Software_Engineer_Resume.pdf", createdAt: "17 Mar 2026", atsScore: 78 },
    { fileName: "Frontend_Resume.pdf", createdAt: "15 Mar 2026", atsScore: 84 }
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="container-custom px-4 py-16 space-y-6">
        <UserStats stats={stats} />

        <div className="grid lg:grid-cols-2 gap-6">
          <ResumeList resumes={resumes} />
          <RecentActivities activities={activities} />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Analysis History</h2>
          <div className="grid gap-4">
            {history.map((item, index) => (
              <AnalysisHistoryCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard