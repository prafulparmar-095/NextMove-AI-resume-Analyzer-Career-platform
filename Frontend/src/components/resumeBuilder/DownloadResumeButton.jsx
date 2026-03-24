import html2canvas from "html2canvas"
import jsPDF from "jspdf"

function DownloadResumeButton() {
  async function handleDownload() {
    const resume = document.getElementById("resume-preview")
    if (!resume) return

    const canvas = await html2canvas(resume, { scale: 2 })
    const imgData = canvas.toDataURL("image/png")

    const pdf = new jsPDF("p", "mm", "a4")
    const pdfWidth = 210
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight)
    pdf.save("nextmove-resume.pdf")
  }

  return (
    <button
      type="button"
      onClick={handleDownload}
      className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700"
    >
      Download Resume PDF
    </button>
  )
}

export default DownloadResumeButton