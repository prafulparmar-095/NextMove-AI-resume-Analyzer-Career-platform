function keywordMatcher(text = "", keywords = []) {
  const lowerText = text.toLowerCase()

  const found = keywords.filter((keyword) =>
    lowerText.includes(keyword.toLowerCase())
  )

  return [...new Set(found)]
}

export default keywordMatcher