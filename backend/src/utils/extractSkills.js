import skillsList from "../data/skillsList.js"

function extractSkills(text = "") {
  const lowerText = text.toLowerCase()

  const foundSkills = skillsList.filter((skill) =>
    lowerText.includes(skill.toLowerCase())
  )

  return [...new Set(foundSkills)]
}

export default extractSkills