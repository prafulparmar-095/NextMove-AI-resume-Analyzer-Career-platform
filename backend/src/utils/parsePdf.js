import fs from "fs"
import { PDFParse } from "pdf-parse"
import { CanvasFactory } from "pdf-parse/worker"

async function parsePdf(filePath) {
  const buffer = fs.readFileSync(filePath)

  const parser = new PDFParse({
    data: buffer,
    CanvasFactory
  })

  const result = await parser.getText()

  return result.text || ""
}

export default parsePdf