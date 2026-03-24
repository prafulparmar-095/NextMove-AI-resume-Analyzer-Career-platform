import jobRoles from "../data/jobRoles.js"

function generateCareerSuggestions(analysis) {
  const skills = analysis.extractedSkills || []

  const matchedRoles = jobRoles.map((role) => {
    const matchCount = role.skills.filter((skill) =>
      skills.includes(skill)
    ).length

    const matchPercentage = Math.round(
      (matchCount / role.skills.length) * 100
    )

    return {
      title: role.title,
      description: role.description,
      matchPercentage
    }
  })

  const bestRoles = matchedRoles
    .sort((a, b) => b.matchPercentage - a.matchPercentage)
    .slice(0, 3)

  return {
    bestRoles,
    skillGap: ["System Design", "Docker"],
    roadmap: [
      "Improve core skills",
      "Build projects",
      "Apply for jobs"
    ],
    learningResources: [
      {
        title: "React Course",
        platform: "YouTube",
        url: "https://youtube.com"
      }
    ]
  }
}

export default generateCareerSuggestions