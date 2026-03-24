import jobRoles from "../data/jobRoles.js"

function predictRoles(skills = []) {
  const results = jobRoles.map((role) => {
    const matchedSkills = role.skills.filter((skill) => skills.includes(skill))
    const matchPercentage = Math.round(
      (matchedSkills.length / role.skills.length) * 100
    )

    return {
      title: role.title,
      description: role.description,
      matchPercentage,
      matchedSkills
    }
  })

  return results.sort((a, b) => b.matchPercentage - a.matchPercentage)
}

export default predictRoles