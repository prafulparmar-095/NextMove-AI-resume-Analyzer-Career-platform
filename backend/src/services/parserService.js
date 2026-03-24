import parsePdf from "../utils/parsePdf.js"
import parseDocx from "../utils/parseDocx.js"

async function parseResume(filePath) {
  if (filePath.endsWith(".pdf")) {
    return parsePdf(filePath)
  }
  return parseDocx(filePath)
}

export { parseResume }