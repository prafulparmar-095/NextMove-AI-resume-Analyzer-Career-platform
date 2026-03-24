import Navbar from "../components/common/Navbar"
import Footer from "../components/common/Footer"
import CareerSuggestions from "../components/career/CareerSuggestions"
import SkillGapCard from "../components/career/SkillGapCard"
import RoadmapTimeline from "../components/career/RoadmapTimeline"
import LearningResources from "../components/career/LearningResources"

function CareerPage() {
  const mockRoles = [
    {
      title: "Frontend Developer",
      description: "Best fit for users strong in React, UI development, and modern JavaScript.",
      matchPercentage: 88
    },
    {
      title: "MERN Stack Developer",
      description: "Good fit if you are comfortable with React, Node.js, Express, and MongoDB.",
      matchPercentage: 81
    }
  ]

  const missingSkills = ["TypeScript", "Docker", "System Design"]

  const roadmap = [
    "Strengthen JavaScript and React fundamentals",
    "Build 3 strong portfolio projects",
    "Learn backend APIs with Node.js and Express",
    "Practice MongoDB integration",
    "Improve resume with measurable achievements",
    "Start applying for internships and entry-level roles"
  ]

  const resources = [
    {
      title: "React - Full Course",
      platform: "YouTube",
      url: "https://www.youtube.com/"
    },
    {
      title: "Node.js and Express Bootcamp",
      platform: "Udemy",
      url: "https://www.udemy.com/"
    },
    {
      title: "MongoDB Basics",
      platform: "MongoDB University",
      url: "https://learn.mongodb.com/"
    }
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="container-custom px-4 py-16 space-y-6">
        <CareerSuggestions roles={mockRoles} />
        <div className="grid lg:grid-cols-2 gap-6">
          <SkillGapCard missingSkills={missingSkills} />
          <LearningResources resources={resources} />
        </div>
        <RoadmapTimeline steps={roadmap} />
      </div>
      <Footer />
    </div>
  )
}

export default CareerPage