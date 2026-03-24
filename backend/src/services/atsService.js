import extractSkills from "../utils/extractSkills.js"
import calculateATSScore from "../utils/atsScoreCalculator.js"

function generateATSAnalysis(text) {
  const extractedSkills = extractSkills(text)

  const requiredSkills = ["react", "node.js", "mongodb", "javascript"]

  const atsScore = calculateATSScore({
    extractedSkills,
    requiredSkills,
    keywordsFound: extractedSkills
  })

  return {
    extractedSkills,
    atsScore
  }
}

export { generateATSAnalysis }