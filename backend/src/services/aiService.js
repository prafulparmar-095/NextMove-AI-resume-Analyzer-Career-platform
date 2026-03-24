import openai from "../config/ai.js"

async function generateAIResponse(prompt) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }]
    })

    return response.choices[0].message.content
  } catch (error) {
    console.error("AI Error:", error.message)
    return null
  }
}

export { generateAIResponse }