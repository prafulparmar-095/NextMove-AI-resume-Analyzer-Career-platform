import fs from "fs"

async function parsePdf(filePath) {
  const buffer = fs.readFileSync(filePath)

  const module = await import("pdf-parse")
  const pdfParse = module.default || module

  const data = await pdfParse(buffer)
  return data.text || ""
}

export default parsePdf