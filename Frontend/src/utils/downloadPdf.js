import html2canvas from "html2canvas"
import jsPDF from "jspdf"

export async function downloadElementAsPdf(elementId, fileName = "nextmove-file.pdf") {
  const element = document.getElementById(elementId)
  if (!element) return

  const canvas = await html2canvas(element, { scale: 2 })
  const imgData = canvas.toDataURL("image/png")

  const pdf = new jsPDF("p", "mm", "a4")
  const pdfWidth = 210
  const pdfHeight = (canvas.height * pdfWidth) / canvas.width

  pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight)
  pdf.save(fileName)
}