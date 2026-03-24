function calculateATSScore({
  extractedSkills = [],
  requiredSkills = [],
  keywordsFound = []
}) {
  let score = 0

  // Skill match (50%)
  const skillMatch =
    (extractedSkills.filter((s) => requiredSkills.includes(s)).length /
      (requiredSkills.length || 1)) *
    50

  // Keyword match (30%)
  const keywordScore = Math.min(keywordsFound.length * 2, 30)

  // Formatting + structure (20%) - mock
  const formattingScore = 20

  score = skillMatch + keywordScore + formattingScore

  return Math.round(Math.min(score, 100))
}

export default calculateATSScore