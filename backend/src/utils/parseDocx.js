import fs from "fs"
import mammoth from "mammoth"

async function parseDocx(filePath) {
  const buffer = fs.readFileSync(filePath)
  const result = await mammoth.extractRawText({ buffer })
  return result.value || ""
}

export default parseDocx